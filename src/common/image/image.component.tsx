import { FC, useState } from "react";

type ImageProps = {
  aspect: number;
  source: string;
  alt?: string;
  className?: string;
};

import { Frame } from "~/src/common/frame/frame.component";

export const Image: FC<ImageProps> = ({ aspect, source, alt, className }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Frame aspect={aspect} loading={loading} className={className}>
      <img src={source} onLoad={() => setLoading(false)} alt={alt} />
    </Frame>
  );
};
