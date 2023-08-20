import { ReactElement, ComponentProps } from "react";
import cn from "classnames";

import styles from "./iconButton.module.scss";

type IconButtonProps = {
  children: ReactElement;
};

export const IconButton = ({
  children,
  className,
  ...buttonProps
}: IconButtonProps & ComponentProps<"button">) => (
  <button className={cn(styles.icon_button, className)} {...buttonProps}>
    {children}
  </button>
);
