import { FC } from 'react'

import * as styles from './resume.module.scss'

const Resume: FC = () => {
    return (
        <section>
            <embed
                className={styles.pdf}
                src={'https://jaxreiff.com/resume/resume.pdf#toolbar=0'}
                type={'application/pdf'}
                width={'100%'}
                height={'100%'}
            />
        </section>
    )
}

export default Resume
