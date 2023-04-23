import { FC, useEffect, useRef } from "react";
import ReglInit, {
  Vec2,
  PrimitiveType,
  Regl,
  Texture2D,
  NDArrayLike,
} from "regl";
import { getPixels } from "ndarray-pixels";
import { NdArray } from "ndarray";

import { Frame } from "../frame/frame.component";
import styles from "./shaderView.module.scss";

type BufferMap = { [key: string]: Buffer };
type Texture2DMap = { [key: string]: Texture2D };

interface Uniforms {
  u_resolution: Vec2;
  u_time: number;
}

interface Attributes {
  position: number[][];
}

export type ShaderViewProps = {
  vertexShader: string;
  fragmentShader: string;
  position: number[][];
  primitive: PrimitiveType;
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
  primitive: PrimitiveType,
  textures: BufferMap
) {
  const textureArrayMap = await importTextures(textures, regl);
  const drawVertices = regl<Uniforms, Attributes>({
    vert: vertexShader,
    frag: fragmentShader,
    attributes: {
      position,
    },
    uniforms: {
      u_resolution: [
        regl.context("viewportWidth"),
        regl.context("viewportHeight"),
      ],
      u_time: regl.context("time"),
      ...textureArrayMap,
    },
    primitive,
    count: 4,
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
  primitive,
  textures = {},
}) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref.current) {
      runShaders(
        ReglInit(ref.current),
        vertexShader,
        fragmentShader,
        position,
        primitive,
        textures
      );
    }
  }, [ref, vertexShader, fragmentShader, position, primitive, textures]);

  return (
    <Frame aspect={1 / 1} className={styles.shader_view}>
      <canvas ref={ref} width={800} height={800} />
    </Frame>
  );
};
