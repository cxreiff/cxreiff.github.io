import cn from "classnames";

import { ImageLightbox } from "src/common/imageLightbox/imageLightbox.component";
import { CardAction } from "src/common/card/cardAction.component";
import arrow from "src/assets/svg/arrow.svg";

import styles from "./photos.module.scss";
import { PHOTO_SETS } from "src/features/photos/photosList";
import { useNavigate } from "react-router-dom";

export const PhotosMini = () => {
  const navigate = useNavigate();

  return (
    <section className={cn(styles.photos, styles.mini)}>
      {PHOTO_SETS.slice(0, 7).map((photoSet, index) => (
        <article key={index} className={styles.tile}>
          <ImageLightbox
            aspect={1 / 1}
            className={styles.photo}
            {...photoSet}
          />
        </article>
      ))}
      <CardAction
        svg={arrow}
        primary={"photos"}
        onClick={() => navigate("/photos")}
        matchHeight
      />
    </section>
  );
};
