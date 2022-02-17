import { FC } from 'react'
import { push } from 'connected-react-router'

import { useAppDispatch } from '~/src/app/store'
import { Card } from '~/src/common/card/card.component'
import profile from '~/src/assets/profile.png'

import * as styles from './projects.module.scss'

const Projects: FC = () => {
    
    const dispatch = useAppDispatch()
    const navigate = (pathname: string) => dispatch(push(pathname))

    return (
        <section className={styles.projects}>
            <Card
                image={profile}
                primary={'pixi.js project'}
                secondary={'pixi.js'}
                onClick={() => navigate('/projects/pixijs')}
            />
        </section>
    )
}

export default Projects
