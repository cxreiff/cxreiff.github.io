import { FC, useEffect } from 'react'

import { useMeasuredRef } from '~/src/hooks/useMeasuredRef'
import { PixijsProject } from './pixijsProject'

import * as styles from './pixijs.module.scss'

const Pixijs: FC = () => {

    const [pixiRef, setPixiRef, pixiRect] = useMeasuredRef()

    useEffect(() => {
        if (pixiRef.current && pixiRect) {
            const pixiApp = new PixijsProject(pixiRef.current as HTMLCanvasElement, pixiRect)
            pixiApp.start()
            return () => pixiApp.stop()
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
