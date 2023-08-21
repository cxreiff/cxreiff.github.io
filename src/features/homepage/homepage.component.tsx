import { ProjectsMini } from "~src/features/projects/projects.component";
import { PhotosMini } from "~src/features/photos/photosMini.component";
import { HomepageImage } from "./homepageImage.component";
import { HomepageAbout } from "./homepageAbout.component";

import styles from "./homepage.module.scss";

const Homepage = () => (
  <section className={styles.homepage}>
    <HomepageImage />
    <HomepageAbout />
    <div className={styles.preview}>
      <ProjectsMini />
    </div>
    <div className={styles.preview}>
      <PhotosMini />
    </div>
  </section>
);

export default Homepage;
