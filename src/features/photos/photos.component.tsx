import { useState } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";

import { ImageLightbox } from "src/common/imageLightbox/imageLightbox.component";

import styles from "./photos.module.scss";
import { PHOTO_SETS } from "src/features/photos/photosList";

const Photos = () => {
  const [numberOfPhotosVisible, setNumberOfPhotosVisible] = useState(9);

  const hasNextPage = numberOfPhotosVisible <= PHOTO_SETS.length;

  const [sentryRef] = useInfiniteScroll({
    loading: false,
    delayInMs: 0,
    rootMargin: "0px 0px 900px 0px",
    hasNextPage,
    onLoadMore: () => setNumberOfPhotosVisible(numberOfPhotosVisible + 3),
  });

  return (
    <section className={styles.photos}>
      {PHOTO_SETS.slice(0, numberOfPhotosVisible).map((photoSet, index) => (
        <article key={index} className={styles.tile}>
          <ImageLightbox
            aspect={1 / 1}
            className={styles.photo}
            {...photoSet}
          />
        </article>
      ))}
      {hasNextPage && <div ref={sentryRef} />}
    </section>
  );
};

export default Photos;
