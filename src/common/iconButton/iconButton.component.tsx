import { FC, ReactElement, HTMLAttributes } from 'react'
import { LucideProps } from 'lucide-preact'
import cn from 'classnames'

import styles from './iconButton.module.scss'

type IconButtonProps = {
    children: ReactElement<LucideProps>,
}

export const IconButton: FC<IconButtonProps & HTMLAttributes<HTMLButtonElement>> = ({
    children,
    className,
    ...buttonProps
}) => (
    <button className={cn(styles.icon_button, className)} {...buttonProps}>
        {children}
    </button>
)
