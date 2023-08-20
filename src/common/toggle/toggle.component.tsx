import { ReactNode, Dispatch, SetStateAction } from "react";

import styles from "./toggle.module.scss";

type ToggleProps = {
  value: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

export const Toggle = ({ value, setter, children }: ToggleProps) => (
  <label className={styles.toggle}>
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
