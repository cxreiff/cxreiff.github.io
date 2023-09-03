import { useState } from "react";
import { Lightbox } from "react-modal-image";
import cn from "classnames";

import { Image } from "src/common/image/image.component";

import styles from "./imageLightbox.module.scss";

type ImageLightboxProps = {
  aspect: number;
  small: string;
  medium: string;
  large: string;
  alt?: string;
  className?: string;
};

export const ImageLightbox = ({
  aspect,
  small,
  medium,
  large,
  alt,
  className,
}: ImageLightboxProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className={cn(styles.image_lightbox, className)}>
      <div onClick={() => setOpened(true)}>
        <Image
          className={styles.interactive}
          aspect={aspect}
          source={small}
          alt={alt}
        />
      </div>
      {opened && (
        <Lightbox
          medium={medium}
          large={large}
          alt={alt}
          hideDownload={true}
          hideClose={true}
          onClose={() => {
            setOpened(false);
          }}
        />
      )}
    </div>
  );
};
