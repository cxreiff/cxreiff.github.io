import cn from "classnames";

import { useAppSelector, useAppDispatch } from "src/app/store";
import { setTheme, Theme } from "src/features/theme/theme.slice";

import styles from "./themeControl.module.scss";

type ThemeControlProps = {
  className?: string;
};

export const ThemeControl = ({ className }: ThemeControlProps) => {
  const dispatch = useAppDispatch();
  const dispatchSetTheme = (theme: Theme) => void dispatch(setTheme(theme));
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <span className={cn(className, styles.theme_control)}>
      <button
        aria-label={"change theme to light color scheme"}
        className={cn(styles.lightmode_button, {
          [styles.current_theme]: theme === Theme.LIGHTMODE,
        })}
        onClick={() => dispatchSetTheme(Theme.LIGHTMODE)}
      />
      <button
        aria-label={"change theme to dark color scheme"}
        className={cn(styles.darkmode_button, {
          [styles.current_theme]: theme === Theme.DARKMODE,
        })}
        onClick={() => dispatchSetTheme(Theme.DARKMODE)}
      />
    </span>
  );
};
