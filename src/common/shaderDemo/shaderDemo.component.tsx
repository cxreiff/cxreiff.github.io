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

function omitHidden(input: string) {
  return input.replace(
    /\/\/\[demo_hide\]([\s\S]*?)\/\/\[demo_hide_end\]/g,
    "{...}"
  );
}

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
          {omitHidden(vertexShader)}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language={"glsl"}
          style={theme === Theme.DARKMODE ? styleDark : styleLight}
        >
          {omitHidden(fragmentShader)}
        </SyntaxHighlighter>
      </div>
    </section>
  );
};
