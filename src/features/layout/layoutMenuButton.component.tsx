import { FC } from 'react'
import { Menu } from 'lucide-preact'

import { IconButton } from '~/src/common/iconButton/iconButton.component'

import styles from './layoutMenuButton.module.scss'

type LayoutMenuButtonProps = {
    toggleMenu: () => void,
}

export const LayoutMenuButton: FC<LayoutMenuButtonProps> = ({ toggleMenu }) => (
    <IconButton
        aria-label={'expand navigation'}
        className={styles.menu_button}
        onClick={toggleMenu}
    >
        <Menu />
    </IconButton>
)
