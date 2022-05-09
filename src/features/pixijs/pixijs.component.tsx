import { FC, useEffect } from 'react'

import { useMeasuredRef } from '~/src/hooks/useMeasuredRef'
import { Manager } from './static/manager'

import styles from './pixijs.module.scss'

const Pixijs: FC = () => {

    const [pixiRef, setPixiRef, pixiRect] = useMeasuredRef()

    useEffect(() => {
        if (pixiRef.current && pixiRect) {
            Manager.initialize(pixiRef.current as HTMLCanvasElement, pixiRect)
            return () => Manager.destroy()
        }
    }, [pixiRef.current]) /* eslint-disable-line react-hooks/exhaustive-deps */

    return (
        <canvas
            className={styles.pixijs}
            ref={setPixiRef}
            style={pixiRect && {
                height: pixiRect.width * 9.0 / 16.0,
            }}
        />
    )
}

export default Pixijs
