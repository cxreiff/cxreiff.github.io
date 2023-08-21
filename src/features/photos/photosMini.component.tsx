import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

import { useAppDispatch, useAppSelector } from "~src/app/store";
import { ImageLightbox } from "~src/common/imageLightbox/imageLightbox.component";
import { Card } from "~src/common/card/card.component";
import { clearPhotos, fetchPhotos } from "./photos.slice";
import arrow from "~/src/assets/svg/arrow.svg";

import styles from "./photos.module.scss";

export const PhotosMini = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const dispatchFetchPhotos = () => dispatch(fetchPhotos());
  const dispatchClearPhotos = () => dispatch(clearPhotos());
  const photoSets = useAppSelector((state) => state.photos.photoSets);

  useEffect(() => {
    dispatchFetchPhotos();
    return () => dispatchClearPhotos();
  }, [dispatch]);

  return (
    <section
      className={cn(styles.photos, styles.mini, {
        [styles.loading]: photoSets.length === 0,
      })}
    >
      {photoSets.slice(0, 7).map((photoSet, index) => (
        <article key={index} className={styles.tile}>
          <ImageLightbox
            aspect={1 / 1}
            className={styles.photo}
            {...photoSet}
          />
        </article>
      ))}
      <Card
        className={styles.see_more}
        svg={arrow}
        primary={"photos"}
        onClick={() => navigate("/photos")}
      />
    </section>
  );
};
