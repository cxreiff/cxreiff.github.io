import { FC } from "react";
import { Link } from "react-router-dom";
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
      <strong>Hello!</strong> I am a software engineer specializing in front-end
      development. I build clients with tools like TypeScript and React, and
      develop across the full stack as well.
    </p>
    <p>
      This is my personal site, where I've put photos, writing, and various
      projects I've been working on.
    </p>
    <p>
      The site itself also serves as an example (and test environment) of some
      of my preferred front-end technologies, libraries, and approaches. The
      source code for the site is publically available at its{" "}
      <a href={GITHUB_SITE_PROJECT_URL}>repository</a>, and links to resources
      and libraries that I have found useful building the site can be found in
      this <Link to={"/posts/portfolio-site-design"}>post</Link>.
    </p>
    <br />
    <IconParagraph icon={<Paintbrush />}>
      Try a different color? <ThemeControl className={styles.theme_buttons} />
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
