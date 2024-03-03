import { ReactNode, Dispatch, SetStateAction } from "react";
import cn from "classnames";

import styles from "./toggle.module.scss";

type ToggleProps = {
  value: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  className?: string;
};

export const Toggle = ({ value, setter, children, className }: ToggleProps) => (
  <label className={cn(styles.toggle, className)}>
    <span>{children}</span>
    <input
      type={"checkbox"}
      checked={value}
      onChange={({ target }) => setter(target.checked)}
    />
    <span>
      <span />
    </span>
  </label>
);
