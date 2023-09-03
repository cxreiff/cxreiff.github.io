import { useState } from "react";

type ImageProps = {
  aspect: number;
  source: string;
  alt?: string;
  className?: string;
};

import { Frame } from "src/common/frame/frame.component";

export const Image = ({ aspect, source, alt, className }: ImageProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <Frame aspect={aspect} loading={loading} className={className}>
      <img src={source} onLoad={() => setLoading(false)} alt={alt} />
    </Frame>
  );
};
