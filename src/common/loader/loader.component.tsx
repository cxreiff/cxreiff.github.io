import { FC } from 'react'

import styles from './loader.module.scss'

export const Loader: FC = () => (
    <div className={styles.loader}>
        {[1,2,3,4].map((key) => (
            <span key={key} />
        ))}
    </div>
)
