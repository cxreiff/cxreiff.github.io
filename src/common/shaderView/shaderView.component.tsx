import { FC, useEffect, useRef } from "react";
import ReglInit, {
  Vec2,
  PrimitiveType,
  Regl,
  Texture2D,
  NDArrayLike,
  MaybeDynamicUniforms,
  Uniforms,
  Attributes,
  DefaultContext,
} from "regl";
import { getPixels } from "ndarray-pixels";
import { NdArray } from "ndarray";

import { Frame } from "../frame/frame.component";
import styles from "./shaderView.module.scss";

type BufferMap = { [key: string]: Buffer };
type Texture2DMap = { [key: string]: Texture2D };
type UniformsGetter = (
  regl: Regl
) => MaybeDynamicUniforms<Uniforms, DefaultContext, never>;

interface MyUniforms extends Uniforms {
  u_resolution: Vec2;
  u_time: number;
}

interface MyAttributes extends Attributes {
  position: number[][];
}

export type ShaderViewProps = {
  vertexShader: string;
  fragmentShader: string;
  position: number[][];
  elements: number[] | number[][];
  primitive: PrimitiveType;
  uniforms?: UniformsGetter;
  textures?: BufferMap;
};

async function importTexture(buffer: Buffer): Promise<NdArray> {
  return await getPixels(buffer, "image/png");
}

async function importTextures(
  buffers: BufferMap,
  regl: Regl
): Promise<Texture2DMap> {
  const result: Texture2DMap = {};
  for (const key in buffers) {
    result[key] = regl.texture(
      // cardinal sin committed as regl.texture() types don't
      // allow Uint8Array, but handle that data type properly.
      (await importTexture(buffers[key])) as unknown as NDArrayLike
    );
  }
  return result;
}

async function runShaders(
  regl: Regl,
  vertexShader: string,
  fragmentShader: string,
  position: number[][],
  elements: number[] | number[][],
  primitive: PrimitiveType,
  uniforms?: UniformsGetter,
  textures: BufferMap = {}
) {
  const computedUniforms = uniforms ? uniforms(regl) : {};
  const textureArrayMap = await importTextures(textures, regl);
  const drawVertices = regl<MyUniforms, MyAttributes>({
    vert: vertexShader,
    frag: fragmentShader,
    attributes: {
      position,
    },
    elements,
    uniforms: {
      u_resolution: [
        regl.context("viewportWidth"),
        regl.context("viewportHeight"),
      ],
      u_time: regl.context("time"),
      ...computedUniforms,
      ...textureArrayMap,
    },
    primitive,
  });
  regl.frame(() => {
    regl.clear({ color: [0, 0, 0, 0], depth: 1 });
    drawVertices();
  });
}

export const ShaderView: FC<ShaderViewProps> = ({
  vertexShader,
  fragmentShader,
  position,
  elements,
  primitive,
  uniforms,
  textures,
}) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref.current) {
      runShaders(
        ReglInit(ref.current),
        vertexShader,
        fragmentShader,
        position,
        elements,
        primitive,
        uniforms,
        textures
      );
    }
  }, [
    ref,
    vertexShader,
    fragmentShader,
    position,
    elements,
    primitive,
    uniforms,
    textures,
  ]);

  return (
    <Frame aspect={1 / 1} className={styles.shader_view}>
      <canvas ref={ref} width={800} height={800} />
    </Frame>
  );
};
