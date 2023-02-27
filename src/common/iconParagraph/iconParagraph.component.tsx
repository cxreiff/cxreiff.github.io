import { FC, ReactElement, ReactNode } from "react";

import styles from "./iconParagraph.module.scss";

type IconParagraphProps = {
  icon: ReactElement;
  children?: ReactNode;
};

export const IconParagraph: FC<IconParagraphProps> = ({ icon, children }) => (
  <p className={styles.paragraph}>
    <span className={styles.icon}>{icon}</span>
    <span className={styles.content}>{children}</span>
  </p>
);
