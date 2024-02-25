import {
  useRef,
  ReactNode,
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import cn from "classnames";

import { IconButton } from "../iconButton/iconButton.component";

import styles from "./frame.module.scss";
import { MaximizeIcon, MinimizeIcon } from "lucide-preact";

type FrameProps = {
  aspect: number;
  loading?: boolean;
  canFullscreen?: boolean;
  externalLink?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export const Frame = ({
  aspect,
  loading = false,
  canFullscreen = false,
  className,
  style,
  children,
}: FrameProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    if (fullscreen && document.fullscreenElement == null) {
      ref.current?.requestFullscreen();
    } else if (!fullscreen && document.fullscreenElement != null) {
      document.exitFullscreen();
    }
  }, [fullscreen]);

  useLayoutEffect(() => {
    document.onfullscreenchange = () =>
      setFullscreen(document.fullscreenElement != null);
    return () => {
      document.onfullscreenchange = null;
    };
  });

  return (
    <div
      className={cn(styles.frame, className, { [styles.hidden]: loading })}
      style={style}
      ref={ref}
    >
      {children}
      <svg viewBox={`0 0 ${aspect} 1`} />
      {canFullscreen && document.fullscreenEnabled && (
        <IconButton
          className={styles.fullscreen_button}
          onClick={() => setFullscreen(!fullscreen)}
        >
          {fullscreen ? <MinimizeIcon /> : <MaximizeIcon />}
        </IconButton>
      )}
    </div>
  );
};
