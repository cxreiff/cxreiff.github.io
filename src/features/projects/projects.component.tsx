import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Card } from '~/src/common/card/card.component'
import pixijs from '~/src/assets/svg/pixijs.svg'
import babylonjs from '~/src/assets/svg/babylonjs.svg'
import bevy from '~/src/assets/svg/bevy.svg'

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
            <Card
                image={bevy}
                primary={'bevy project'}
                secondary={'rust, WASM, bevy'}
                onClick={() => navigate('/projects/beverage')}
            />
        </section>
    )
}

export default Projects
