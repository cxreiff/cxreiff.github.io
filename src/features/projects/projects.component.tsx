import { FC } from 'react'

import * as styles from './projects.module.scss'

const Projects: FC = () => {
    return (
        <section className={styles.projects}>
            <header>
                <h2>
                    Projects
                </h2>
            </header>
            <article>
                <header>
                    <h3>
                        Article 1
                    </h3>
                </header>
                <p>
                    Article 1 Content
                </p>
                <p>
                    Article 1 More Content
                </p>
            </article>
            <article>
                <header>
                    <h3>
                        Article 2
                    </h3>
                </header>
                <p>
                    Article 2 Content
                </p>
                <p>
                    Article 2 More Content
                </p>
            </article>
        </section>
    )
}

export default Projects
