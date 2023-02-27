import { FC, ReactElement, ComponentProps } from "react";
import cn from "classnames";

import styles from "./iconButton.module.scss";

type IconButtonProps = {
  children: ReactElement;
};

export const IconButton: FC<IconButtonProps & ComponentProps<"button">> = ({
  children,
  className,
  ...buttonProps
}) => (
  <button className={cn(styles.icon_button, className)} {...buttonProps}>
    {children}
  </button>
);
