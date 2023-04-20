import { FC, useEffect, useRef } from "react";
import Regl, { Vec2, PrimitiveType } from "regl";

import { Frame } from "../frame/frame.component";
import styles from "./shaderView.module.scss";

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
};

export const ShaderView: FC<ShaderViewProps> = ({
  vertexShader,
  fragmentShader,
  position,
  primitive,
}) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref.current) {
      const regl = Regl(ref.current);
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
        },
        primitive,
        count: 4,
      });
      regl.frame(() => {
        regl.clear({ color: [0, 0, 0, 0], depth: 1 });
        drawVertices();
      });
    }
  }, [ref, vertexShader, fragmentShader]);

  return (
    <Frame aspect={1 / 1} className={styles.shader_view}>
      <canvas ref={ref} width={800} height={800} />
    </Frame>
  );
};
