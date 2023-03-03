import { FC } from "react";

import { Frame } from "~/src/common/frame/frame.component";
import { MEDIA_QUERIES, useMediaQuery } from "~src/hooks/useMediaQuery";

import styles from "./iframe.module.scss";

type IFrameProps = {
  aspect: number;
  mobileAspect?: number;
  title: string;
  url: string;
};

export const IFrame: FC<IFrameProps> = ({
  aspect,
  url,
  title,
  mobileAspect = aspect,
}) => {
  const isLargerThanSM = useMediaQuery(MEDIA_QUERIES.LARGER_THAN_SM);
  const shouldUseMobileAspect = aspect !== mobileAspect && !isLargerThanSM;

  return (
    <Frame
      aspect={shouldUseMobileAspect ? mobileAspect : aspect}
      className={styles.frame}
    >
      <iframe src={url} title={title} />
    </Frame>
  );
};
