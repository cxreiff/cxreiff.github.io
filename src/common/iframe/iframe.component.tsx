import { Frame } from "src/common/frame/frame.component";
import { MEDIA_QUERIES, useMediaQuery } from "src/hooks/useMediaQuery";

import styles from "./iframe.module.scss";

type IFrameProps = {
  aspect: number;
  mobileAspect?: number;
  title: string;
  url: string;
  canFullscreen?: boolean;
};

export const IFrame = ({
  aspect,
  url,
  title,
  mobileAspect = aspect,
  canFullscreen = false,
}: IFrameProps) => {
  const isLargerThanSM = useMediaQuery(MEDIA_QUERIES.LARGER_THAN_SM);
  const shouldUseMobileAspect = aspect !== mobileAspect && !isLargerThanSM;

  return (
    <Frame
      aspect={shouldUseMobileAspect ? mobileAspect : aspect}
      className={styles.frame}
      canFullscreen={canFullscreen}
    >
      <iframe src={url} title={title} />
    </Frame>
  );
};
