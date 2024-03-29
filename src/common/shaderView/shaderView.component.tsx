import { useEffect, useRef } from "react";
import ReglInit, { Regl } from "regl";

import { Frame } from "../frame/frame.component";
import styles from "./shaderView.module.scss";

export type Procedure = (regl: Regl) => void | Promise<void>;

export type ShaderViewProps = {
  procedure: Procedure;
};

export const ShaderView = ({ procedure }: ShaderViewProps) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref.current) {
      const regl = ReglInit({
        canvas: ref.current,
        extensions: "oes_texture_float",
      });

      procedure(regl);

      return () => {
        regl.destroy();
      };
    }
  }, [ref, procedure]);

  return (
    <Frame aspect={1 / 1} className={styles.shader_view} canFullscreen>
      <canvas ref={ref} width={800} height={800} />
    </Frame>
  );
};
