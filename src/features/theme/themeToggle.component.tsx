import { MoonIcon, SunIcon } from "lucide-preact";

import { useAppSelector, useAppDispatch } from "src/app/store";
import { setTheme, Theme } from "src/features/theme/theme.slice";
import { IconButton } from "src/common/iconButton/iconButton.component";

type ThemeToggleProps = {
  className?: string;
};

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const dispatch = useAppDispatch();
  const dispatchSetTheme = (theme: Theme) => void dispatch(setTheme(theme));
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <IconButton
      aria-label={
        theme === Theme.DARKMODE
          ? "toggle dark mode off"
          : "toggle dark mode on"
      }
      className={className}
      onClick={() =>
        dispatchSetTheme(
          theme === Theme.DARKMODE ? Theme.LIGHTMODE : Theme.DARKMODE
        )
      }
    >
      {theme === Theme.DARKMODE ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};
