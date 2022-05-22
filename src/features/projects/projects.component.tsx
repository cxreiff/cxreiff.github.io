import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Card } from '~/src/common/card/card.component'
import pixijs from '~/src/assets/images/pixijs.png'
import babylonjs from '~/src/assets/images/babylonjs.png'

import styles from './projects.module.scss'

const Projects: FC = () => {
    
    const navigate = useNavigate()

    return (
        <section className={styles.projects}>
            <Card
                image={pixijs}
                primary={'asteroids game'}
                secondary={'pixi.js, matter.js'}
                onClick={() => navigate('/projects/pixijs/asteroids')}
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
