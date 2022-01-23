import { FC } from 'react'
import { push } from 'connected-react-router'

import { useAppDispatch } from '~/src/app/store'

import * as styles from './projects.module.scss'

const Projects: FC = () => {
    
    const dispatch = useAppDispatch()
    const navigate = (pathname: string) => dispatch(push(pathname))
    
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
                    <a onClick={() => navigate('/projects/test1')}>test1</a>
                </p>
            </article>
            <article>
                <header>
                    <h3>
                        Article 2
                    </h3>
                </header>
                <p>
                    <a onClick={() => navigate('/projects/test2')}>test2</a>
                </p>
            </article>
        </section>
    )
}

export default Projects
