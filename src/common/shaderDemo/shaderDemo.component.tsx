import { FC } from "react";

import { useAppSelector } from "~/src/app/store";
import { Theme } from "~/src/features/theme/theme.slice";
import {
  SyntaxHighlighter,
  styleLight,
  styleDark,
} from "~/src/utilities/syntaxHighlighter";
import { ShaderView } from "../shaderView/shaderView.component";

import styles from "./shaderDemo.module.scss";

type ShaderDemoProps = {
  vertexShader: string;
  fragmentShader: string;
  position: number[][];
};

export const ShaderDemo: FC<ShaderDemoProps> = ({
  vertexShader,
  fragmentShader,
  position,
}) => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <section className={styles.shader_demo}>
      <div className={styles.shader_view}>
        <ShaderView
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          position={position}
        />
      </div>
      <div className={styles.shader_syntax}>
        <SyntaxHighlighter
          language={"glsl"}
          style={theme === Theme.DARKMODE ? styleDark : styleLight}
        >
          {vertexShader}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language={"glsl"}
          style={theme === Theme.DARKMODE ? styleDark : styleLight}
        >
          {fragmentShader}
        </SyntaxHighlighter>
      </div>
    </section>
  );
};
