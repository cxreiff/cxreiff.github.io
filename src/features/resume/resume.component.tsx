import { FC } from 'react'

import { RESUME_URL } from '~/src/utilities/constants'
import styles from './resume.module.scss'

const Resume: FC = () => {
    return (
        <section>
            <embed
                className={styles.pdf}
                src={RESUME_URL}
                type={'application/pdf'}
                width={'100%'}
                height={'100%'}
            />
        </section>
    )
}

export default Resume
