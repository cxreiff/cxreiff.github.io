import { ReactElement, SVGProps, cloneElement, useState } from "react";
import cn from "classnames";

type ImageSvgOverlayProps = {
  aspect: number;
  source: string;
  alt?: string;
  className?: string;
  children: ReactElement<SVGProps<SVGElement>>;
};

import { Frame } from "src/common/frame/frame.component";

import styles from "./imageSvgOverlay.module.scss";

export const ImageSvgOverlay = ({
  aspect,
  source,
  alt,
  className,
  children,
}: ImageSvgOverlayProps) => {
  const [loading, setLoading] = useState(true);

  const svg = cloneElement(children, {
    className: cn(
      (children.props as { className?: string }).className,
      styles.svg_overlay
    ),
  });

  return (
    <Frame
      aspect={aspect}
      loading={loading}
      className={cn(className, styles.image_svg_overlay)}
    >
      <img src={source} onLoad={() => setLoading(false)} alt={alt} />
      {!loading && svg}
    </Frame>
  );
};
