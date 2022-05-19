import { FC, useLayoutEffect } from 'react'

import { Frame } from '~/src/common/frame/frame.component'
import { useMeasuredRef } from '~/src/hooks/useMeasuredRef'
import { isMobile } from '~/src/utilities/common'

import { ShipEntity } from './entities/shipEntity'
import { Keyboard } from './static/keyboard'
import { Manager } from './static/manager'
import { View } from './static/view'

import styles from './pixijs.module.scss'

const Pixijs: FC = () => {

    const [ ref, { width = 0, height = 0 } ] = useMeasuredRef<HTMLCanvasElement>()

    useLayoutEffect(() => {
        if (!Manager.app && ref.current && width && height) {
            Manager.initialize(ref.current, width, height)
        }
    }, [ref.current, width, height])
    useLayoutEffect(() => () => Manager.destroy(), [])

    return (
        <>
            <Frame aspect={Manager.ASPECT_RATIO} className={styles.pixijs}>
                <canvas ref={ref} style={{
                    height: width / Manager.ASPECT_RATIO,
                    maxWidth: (
                        View.isFullscreen() || View.isMobileFullscreen()
                        ? `${100 * Manager.ASPECT_RATIO}vh`
                        : undefined
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
