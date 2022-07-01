import { FC } from 'react'

import { HomepageImage } from './homepageImage.component'
import { HomepageAbout } from './homepageAbout.component'

import styles from './homepage.module.scss'

const Homepage: FC = () => {

    return (
        <section className={styles.homepage}>
            <HomepageImage />
            <HomepageAbout />
        </section>
    )
}

export default Homepage
