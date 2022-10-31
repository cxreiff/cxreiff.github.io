import { FC } from 'react'

import { Frame } from '~/src/common/frame/frame.component'

import styles from './beverage.module.scss'

const Beverage: FC = () => {
    return (
        <Frame aspect={3/2} className={styles.frame}>
            <iframe src={'https://jaxreiff.com/beverage/'} />
        </Frame>
    )
}

export default Beverage
