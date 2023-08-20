import { ImageSvgOverlay } from "~/src/common/imageSvgOverlay/imageSvgOverlay.component";
import { IMAGE_URLS } from "~/src/utilities/constants";

import styles from "./homepageImage.module.scss";

export const HomepageImage = () => (
  <ImageSvgOverlay
    className={styles.homepage_image}
    aspect={900 / 600}
    source={IMAGE_URLS.ABOUT_ME}
    alt={"image of site author Cooper Reiff"}
  >
    <svg
      className={styles.homepage_image_svg}
      width="600"
      height="800"
      viewBox="0 0 600 800"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="path0"
        fill="none"
        stroke="#ffffff"
        stroke-width="7"
        stroke-linecap="round"
        d="M 80 77 C 87 161 138 186 138 186 L 118 180 L 130 172 L 137 185"
      />
      <path
        id="path1"
        fill="none"
        stroke="#ffffff"
        stroke-width="7"
        stroke-linecap="round"
        d="M 544 71 C 544 132 480 185 481 185 L 497 182 L 483 170 L 477 186"
      />
      <text
        id="poppy"
        xmlSpace="preserve"
        x="40"
        y="54"
        font-family="Helvetica,Arial"
        font-size="28"
        font-weight="900"
        fill="#ffffff"
      >
        poppy
      </text>
      <text
        id="rose"
        xmlSpace="preserve"
        x="512"
        y="54"
        font-family="Helvetica,Arial"
        font-size="28"
        font-weight="900"
        fill="#ffffff"
      >
        rose
      </text>
    </svg>
  </ImageSvgOverlay>
);
