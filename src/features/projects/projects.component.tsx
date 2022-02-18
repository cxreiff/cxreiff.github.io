import { FC } from 'react'
import { push } from 'connected-react-router'

import { useAppDispatch } from '~/src/app/store'
import { Card } from '~/src/common/card/card.component'
import pixijs from '~/src/assets/images/pixijs.png'
import babylonjs from '~/src/assets/images/babylonjs.png'

import * as styles from './projects.module.scss'

const Projects: FC = () => {
    
    const dispatch = useAppDispatch()
    const navigate = (pathname: string) => dispatch(push(pathname))

    return (
        <section className={styles.projects}>
            <Card
                image={pixijs}
                primary={'pixi.js project'}
                secondary={'pixi.js'}
                onClick={() => navigate('/projects/pixijs')}
            />
            <Card
                image={babylonjs}
                primary={'babylon.js project'}
                secondary={'babylon.js'}
                onClick={() => navigate('/projects/babylonjs')}
            />
        </section>
    )
}

export default Projects
