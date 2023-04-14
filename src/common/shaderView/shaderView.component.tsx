import { FC, useEffect, useRef } from "react";
import Regl, { Vec2, Buffer } from "regl";

import { Frame } from "../frame/frame.component";
import styles from "./shaderView.module.scss";

interface Uniforms {
  u_resolution: Vec2;
  u_time: number;
}

interface Attributes {
  position: Buffer;
}

type ShaderCanvasProps = {
  vertexShader: string;
  fragmentShader: string;
  position: number[][];
};

export const ShaderView: FC<ShaderCanvasProps> = ({
  vertexShader,
  fragmentShader,
  position,
}) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref.current) {
      const regl = Regl(ref.current);
      const drawVertices = regl<Uniforms, Attributes>({
        vert: vertexShader,
        frag: fragmentShader,
        attributes: {
          position: regl.buffer(position),
        },
        uniforms: {
          u_resolution: [
            regl.context("viewportWidth"),
            regl.context("viewportHeight"),
          ],
          u_time: regl.context("time"),
        },
        count: position.length,
      });
      regl.frame(() => {
        regl.clear({ color: [0, 0, 0, 0], depth: 1 });
        drawVertices();
      });
    }
  }, [ref, vertexShader, fragmentShader]);

  return (
    <Frame aspect={2 / 2.1} className={styles.shader_view}>
      <canvas ref={ref} width={1000} height={1000} />
    </Frame>
  );
};
