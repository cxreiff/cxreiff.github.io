import { FC } from "react";

import { useAppSelector } from "~/src/app/store";
import { Theme } from "~/src/features/theme/theme.slice";
import {
  SyntaxHighlighter,
  styleLight,
  styleDark,
} from "~/src/utilities/syntaxHighlighter";
import {
  ShaderView,
  ShaderViewProps,
} from "../shaderView/shaderView.component";

import styles from "./shaderDemo.module.scss";

export const ShaderDemo: FC<ShaderViewProps> = ({
  vertexShader,
  fragmentShader,
  ...props
}) => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <section className={styles.shader_demo}>
      <div className={styles.shader_view}>
        <ShaderView
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          {...props}
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
