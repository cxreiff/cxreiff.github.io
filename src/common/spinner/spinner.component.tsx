import React from 'react'

import styles from './spinner.module.scss'

export const Spinner: React.FC = () => (
    <div className={styles.spinner}>
        <div className={styles.spinner_inner} />
    </div>
)

export default Spinner
