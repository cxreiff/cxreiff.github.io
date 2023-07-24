import { FC } from "react";

import { HomepageImage } from "./homepageImage.component";
import { HomepageAbout } from "./homepageAbout.component";
import { MiniProjects } from "../projects/projects.component";

import styles from "./homepage.module.scss";

const Homepage: FC = () => {
  return (
    <section className={styles.homepage}>
      <HomepageImage />
      <HomepageAbout />
      <div className={styles.projects}>
        <MiniProjects />
      </div>
    </section>
  );
};

export default Homepage;
