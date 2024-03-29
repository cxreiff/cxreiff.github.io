import { GithubIcon, FileTextIcon } from "lucide-preact";

import { Contributions } from "src/common/contributions/contributions.component";
import { IconParagraph } from "src/common/iconParagraph/iconParagraph.component";
import { RESUME_URL, GITHUB_URL } from "src/utilities/constants";

import styles from "./homepageAbout.module.scss";

export const HomepageAbout = () => (
  <div className={styles.homepage_about}>
    <p>
      <strong>Hello!</strong> I am a software engineer experienced with frontend
      development and cloud architecture, using languages and frameworks like
      TypeScript, React, Java, Python, C++, and Rust.
    </p>
    <p>
      I'm also interested in real-time graphics programming, and have been
      spending my free time brushing up on my math and writing shader code.
    </p>
    <br />
    <p className={styles.bottom_half}>
      <div>
        <IconParagraph icon={<FileTextIcon />}>
          My developer resume can be found <a href={RESUME_URL}>here</a>.
        </IconParagraph>
        <IconParagraph icon={<GithubIcon />}>
          My GitHub profile can be found <a href={GITHUB_URL}>here</a>.
        </IconParagraph>
      </div>
      <Contributions
        className={styles.contributions}
        numberOfDays={119 + new Date().getDay()}
      />
    </p>
  </div>
);
