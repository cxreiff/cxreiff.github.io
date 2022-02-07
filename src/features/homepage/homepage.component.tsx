import { FC } from 'react'

import { Loader } from '~/src/common/loader/loader.component'

import * as styles from './homepage.module.scss'

const Homepage: FC = () => {
    return (
        <section className={styles.homepage}>
            <header>
                <h2>
                    Homepage
                </h2>
            </header>
            <div style={{textAlign: 'center'}}>
                Site under construction
            </div>
            <Loader />
        </section>
    )
}

export default Homepage
