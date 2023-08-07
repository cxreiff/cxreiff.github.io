import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "./subnavigation.module.scss";

type SubnavigationProps = {
  current: string;
  routes: { route: string; label: string }[];
  options?: ReactNode[];
};

export const Subnavigation: FC<SubnavigationProps> = ({
  routes,
  current,
  options = [],
}) => (
  <section className={styles.subnavigation}>
    <ul>
      {routes.map(({ route, label }) => (
        <li key={route} className={cn({ [styles.current]: current === route })}>
          <Link to={route}>{label}</Link>
        </li>
      ))}
    </ul>
    <ul>
      {options.map((option, index) => (
        <li key={index}>{option}</li>
      ))}
    </ul>
  </section>
);
