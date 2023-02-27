import { FC } from "react";

import { Frame } from "~/src/common/frame/frame.component";

import styles from "./iframe.module.scss";

type IFrameProps = {
  aspect: number;
  url: string;
  title: string;
};

export const IFrame: FC<IFrameProps> = ({ aspect, url, title }) => {
  return (
    <Frame aspect={aspect} className={styles.frame}>
      <iframe src={url} title={title} />
    </Frame>
  );
};
