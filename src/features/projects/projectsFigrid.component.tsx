import { FIGRID_URL, IMAGE_URLS } from "src/utilities/constants";

import styles from "./projectsFigrid.module.scss";
import { ExternalLinkIcon } from "lucide-preact";

const ProjectsFigrid = () => (
  <section className={styles.projects_figrid}>
    <div>
      <h4>
        <a href={FIGRID_URL}>
          figrid.io <ExternalLinkIcon size={"1rem"} />
        </a>
      </h4>
      <p>UNDER CONSTRUCTION - You may get ugly errors and some odd UX.</p>
      <p>
        figrid.io is a tool for turning your writing and images into interactive
        fiction, that can be shared via URL.
      </p>
      <p>
        Create a "grid" within which you add a number of "tiles". You can also
        add events, characters, items, and locks. Each of these can be assigned
        a description and an image.
      </p>
      <p>
        Then press play- you can now play through what you've just created as a
        text adventure, navigating between areas, talking to characters, finding
        items, unlocking doors, etcetera.
      </p>
    </div>
    <figure>
      <img
        src={IMAGE_URLS.FIGRID_SCREENSHOT}
        alt={
          "screenshot of figrid.io, a tool for creating interactive fiction, " +
          " showing a text description section, map section, and area details section"
        }
      />
      <figcaption>figrid's play screen</figcaption>
    </figure>
  </section>
);

export default ProjectsFigrid;
