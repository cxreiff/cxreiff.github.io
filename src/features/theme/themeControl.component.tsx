import { FC } from 'react'
import cn from 'classnames'

import { useAppSelector, useAppDispatch } from '~/src/app/store'
import { setTheme, Theme } from '~/src/features/theme/theme.slice'

import styles from './themeControl.module.scss'

type ThemeControlProps = {
    className?: string,
}

export const ThemeControl: FC<ThemeControlProps> = ({ className }) => {

    const dispatch = useAppDispatch()
    const dispatchSetTheme = (theme: Theme) => void dispatch(setTheme(theme))
    const theme = useAppSelector((state) => state.theme.theme)

    return (
        <span className={className}>
            <button
                aria-label={'change theme to red color scheme'}
                className={cn(styles.lightmode_button, {
                    [styles.current_theme]: theme === Theme.LIGHTMODE,
                })}
                onClick={() => dispatchSetTheme(Theme.LIGHTMODE)}
            />
            <button
                aria-label={'change theme to green color scheme'}
                className={cn(styles.greenish_button, {
                    [styles.current_theme]: theme === Theme.GREENISH,
                })}
                onClick={() => dispatchSetTheme(Theme.GREENISH)}
            />
            <button
                aria-label={'change theme to blue color scheme'}
                className={cn(styles.bluish_button, {
                    [styles.current_theme]: theme === Theme.BLUISH,
                })}
                onClick={() => dispatchSetTheme(Theme.BLUISH)}
            />
        </span>
    )
}
