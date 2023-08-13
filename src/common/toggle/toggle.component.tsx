import { Dispatch, FC, SetStateAction } from "react";

import styles from "./toggle.module.scss";

type ToggleProps = {
  value: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
};

export const Toggle: FC<ToggleProps> = ({ value, setter, children }) => (
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
