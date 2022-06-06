import { FC } from 'react'
import { Moon, Sun } from 'lucide-preact'

import { useAppSelector, useAppDispatch } from '~/src/app/store'
import { setTheme, Theme } from '~/src/features/theme/theme.slice'
import { IconButton } from '~/src/common/iconButton/iconButton.component'

import styles from './themeToggle.module.scss'

type ThemeToggleProps = {
    className?: string,
}

export const ThemeToggle: FC<ThemeToggleProps> = ({ className }) => {

    const dispatch = useAppDispatch()
    const dispatchSetTheme = (theme: Theme) => void dispatch(setTheme(theme))
    const theme = useAppSelector((state) => state.theme.theme)

    return (
        <IconButton
            aria-label={theme === Theme.DARKMODE ? 'toggle dark mode off' : 'toggle dark mode on'}
            className={styles.theme_toggle}
            onClick={() => dispatchSetTheme(
                theme === Theme.DARKMODE ? Theme.LIGHTMODE : Theme.DARKMODE
            )}
        >
            { theme === Theme.DARKMODE ? <Sun /> : <Moon /> }
        </IconButton>
    )
}
