import { DefaultContext, NDArrayLike, Regl, Texture2D } from "regl";
import { mat4 } from "gl-matrix";
import { NdArray } from "ndarray";
import { getPixels } from "ndarray-pixels";

type BufferMap = { [key: string]: Buffer };
type Texture2DMap = { [key: string]: Texture2D };

export async function importTexture(buffer: Buffer): Promise<NdArray> {
  return await getPixels(buffer, "image/png");
}

export async function importTextures(
  buffers: BufferMap,
  regl: Regl
): Promise<Texture2DMap> {
  const result: Texture2DMap = {};
  for (const key in buffers) {
    result[key] = regl.texture(
      // cardinal sin committed as regl.texture() types do not
      // allow Uint8Array, but do handle that data type properly.
      (await importTexture(buffers[key])) as unknown as NDArrayLike
    );
  }
  return result;
}

export const rotatingInView = ({ tick }: DefaultContext) => {
  const translate = mat4.translate(mat4.create(), mat4.create(), [0, -5, -20]);
  const rotateY = mat4.rotateY(
    mat4.create(),
    mat4.create(),
    (tick * Math.PI) / 400
  );
  return mat4.multiply(translate, translate, rotateY);
};

export const lookingFromOrigin = () =>
  mat4.lookAt(mat4.create(), [0, 0, 0], [0, 0, -1], [0, 1, 0]);

export const standardProjection = ({
  viewportWidth,
  viewportHeight,
}: DefaultContext) =>
  mat4.perspective(
    mat4.create(),
    Math.PI / 4,
    viewportWidth / viewportHeight,
    0.01,
    1000.0
  );

export const mvMatrix = (context: DefaultContext) =>
  mat4.multiply(mat4.create(), lookingFromOrigin(), rotatingInView(context));
