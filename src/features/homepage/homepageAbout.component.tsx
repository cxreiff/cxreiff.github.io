import { FC } from "react";
import { Github, FileText, Paintbrush } from "lucide-preact";

import { IconParagraph } from "~/src/common/iconParagraph/iconParagraph.component";
import { ThemeControl } from "~/src/features/theme/themeControl.component";
import {
  RESUME_URL,
  GITHUB_URL,
  GITHUB_SITE_PROJECT_URL,
} from "~/src/utilities/constants";

import styles from "./homepageAbout.module.scss";

export const HomepageAbout: FC = () => (
  <div className={styles.homepage_about}>
    <p>
      <strong>Hello!</strong> I am a software engineer experienced with frontend
      development and cloud architecture, using languages and frameworks like
      TypeScript, React, Java, Python, C++, and Rust.
    </p>
    <p>
      I'm also interested in real-time graphics programming, and have been
      spending my free time brushing up on math and writing shader code.
    </p>
    <p>
      The source code for this site is available at its{" "}
      <a href={GITHUB_SITE_PROJECT_URL}>repository</a>.
    </p>
    <br />
    <IconParagraph icon={<Paintbrush />}>
      Try a different theme? <ThemeControl className={styles.theme_buttons} />
    </IconParagraph>
    <IconParagraph icon={<FileText />}>
      My full-stack development resume can be found{" "}
      <a href={RESUME_URL}>here</a>.
    </IconParagraph>
    <IconParagraph icon={<Github />}>
      My GitHub profile can be found <a href={GITHUB_URL}>here</a>.
    </IconParagraph>
  </div>
);
