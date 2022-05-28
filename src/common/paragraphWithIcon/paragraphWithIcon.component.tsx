import { FC, ReactElement } from 'react'

import styles from './paragraphWithIcon.module.scss'

type ParagraphWithIconProps = {
    icon: ReactElement,
}

export const ParagraphWithIcon: FC<ParagraphWithIconProps> = ({ icon, children }) => (
    <p className={styles.paragraph}>
        <span className={styles.icon}>
            {icon}
        </span>
        <span className={styles.content}>
            {children}
        </span>
    </p>
)
