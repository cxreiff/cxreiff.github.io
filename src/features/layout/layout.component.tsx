import { FC, ReactNode, useState, useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-preact";
import cn from "classnames";

import { RouteDefinition } from "~/src/app/routing";
import { IconButton } from "~/src/common/iconButton/iconButton.component";
import { ThemeToggle } from "~/src/features/theme/themeToggle.component";

import styles from "./layout.module.scss";

type LayoutProps = {
  routes: RouteDefinition[];
  children?: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children, routes }) => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  useLayoutEffect(() => setExpanded(false), [pathname]);

  const comparePaths = (path: string, pathname: string) =>
    path === pathname.split("/")[1];

  return (
    <div className={styles.layout}>
      <nav
        aria-label={"primary"}
        className={cn({ [styles.expanded]: expanded })}
      >
        <IconButton
          aria-label={"expand navigation"}
          className={styles.menu_button}
          onClick={() => setExpanded(!expanded)}
        >
          <Menu />
        </IconButton>
        <ul>
          <li aria-label={"navigate to home"} className={styles.logo}>
            <a onClick={() => navigate("")}>cooper reiff</a>
          </li>
          {routes
            .filter(({ path }) => path)
            .map(({ path }) => (
              <li
                key={path}
                aria-label={`navigate to ${path}`}
                className={cn(styles.navlink, {
                  [styles.current]: comparePaths(path, pathname),
                })}
              >
                <a onClick={() => navigate(path)}>{path}</a>
              </li>
            ))}
        </ul>
        <ThemeToggle className={styles.theme_toggle} />
      </nav>
      <main>{children}</main>
    </div>
  );
};
