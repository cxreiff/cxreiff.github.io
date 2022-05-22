import { FC, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Cartridges } from './cartridges'
import { Frame } from '~/src/common/frame/frame.component'
import { useMeasuredRef } from '~/src/hooks/useMeasuredRef'
import { isMobile } from '~/src/utilities/common'

import { ShipEntity } from './cartridges/asteroids/entities/shipEntity'
import { Keyboard } from './shared/static/keyboard'
import { Manager } from './shared/static/manager'
import { View } from './shared/static/view'

import styles from './pixijs.module.scss'

const Pixijs: FC = () => {

    const { id = 'asteroids' } = useParams<{id: string}>()
    const [ ref, { width = 0 } ] = useMeasuredRef<HTMLCanvasElement>()
    
    const { aspectRatio } = Cartridges[id]

    useLayoutEffect(() => {
        if (!Manager.app && ref.current && width) {
            Manager.initialize(ref.current, width, Cartridges[id])
        }
    }, [ref.current, width, id])
    useLayoutEffect(() => () => Manager.destroy(), [id])

    return (
        <>
            <Frame aspect={aspectRatio} className={styles.pixijs}>
                <canvas ref={ref} style={{
                    height: width / aspectRatio,
                    maxWidth: (
                        View.isHTML5FullscreenEnabled()
                        ? View.isHTML5Fullscreen() ? `${100 * aspectRatio}vh` : undefined
                        : (
                            View.isCSSFullscreen()
                            ? `${window.screen.availHeight * aspectRatio}px`
                            : undefined
                        )
                    ),
                }} />
            </Frame>
            { isMobile() &&
                <div className={styles.controls}>
                    {Object.entries(ShipEntity.CONTROLS).map(([action, code]) => (
                        <button
                            key={code}
                            onPointerDown={() => Keyboard.virtualKeyDown(code)}
                            onPointerUp={() => Keyboard.virtualKeyUp(code)}
                            onClick={e => e.preventDefault()}
                        >
                            {action}
                        </button>
                    ))}
                </div>
            }
        </>
    )
}

export default Pixijs
