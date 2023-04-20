import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./subnavigation.module.scss";
import cn from "classnames";

type SubnavigationProps = {
  current: string;
  routes: { route: string; label: string }[];
};

export const Subnavigation: FC<SubnavigationProps> = ({ routes, current }) => (
  <ul className={styles.subnavigation}>
    {routes.map(({ route, label }) => (
      <li key={route} className={cn({ [styles.current]: current === route })}>
        <Link to={route}>{label}</Link>
      </li>
    ))}
  </ul>
);
