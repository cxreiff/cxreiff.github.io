import { FC } from 'react'
import cn from 'classnames'

import { useAppSelector } from '~/src/app/store'

export const Theme: FC = ({ children }) => {

    const { theme, transitioning } = useAppSelector((state) => state.theme)
    
    return (
        <div className={cn(`theme--${theme}`, {
            "theme--transition": transitioning,
        })}>
            {children}
        </div>
    )
}
