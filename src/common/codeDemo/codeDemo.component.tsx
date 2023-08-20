import { ReactElement } from "react";

import { useAppSelector } from "~/src/app/store";
import { Theme } from "~/src/features/theme/theme.slice";
import {
  SyntaxHighlighter,
  styleLight,
  styleDark,
} from "~/src/utilities/syntaxHighlighter";

import styles from "./codeDemo.module.scss";

function omitHidden(input: string) {
  return input.replace(
    /\/\/\[demo_hide\]([\s\S]*?)\/\/\[demo_hide_end\]/g,
    "{...}"
  );
}

export type Excerpt = { language: string; code: string };

type CodeDemoProps = {
  children: ReactElement;
  excerpts: Excerpt[];
};

export const CodeDemo = ({ children, excerpts }: CodeDemoProps) => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <section className={styles.shader_demo}>
      <div className={styles.shader_view}>{children}</div>
      <div className={styles.shader_syntax}>
        {excerpts.map(({ language, code }, index) => (
          <SyntaxHighlighter
            key={index}
            language={language}
            style={theme === Theme.DARKMODE ? styleDark : styleLight}
          >
            {omitHidden(code)}
          </SyntaxHighlighter>
        ))}
      </div>
    </section>
  );
};
