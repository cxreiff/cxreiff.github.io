import { MiniProjects } from "~src/features/projects/projects.component";
import { HomepageImage } from "./homepageImage.component";
import { HomepageAbout } from "./homepageAbout.component";

import styles from "./homepage.module.scss";

const Homepage = () => (
  <section className={styles.homepage}>
    <HomepageImage />
    <HomepageAbout />
    <div className={styles.projects}>
      <MiniProjects />
    </div>
  </section>
);

export default Homepage;
