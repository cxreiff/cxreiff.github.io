import { Container, Text, ITextStyle } from '../pixijs'
import fscreen from 'fscreen'

import { Entity } from '../abstract/entity'
import { AsteroidScene } from '../scenes/asteroidScene'
import { View } from '../static/view'

import styles from '../pixijs.module.scss'

export class OptionsEntity extends Entity<Container> {

    private fullscreenButton?: Text

    constructor (x: number, y: number) {
        super(new Container())

        this.fullscreenButton = new Text('\u2725', {
            ...AsteroidScene.TEXT_OPTIONS,
            fontSize: 48,
        } as Partial<ITextStyle>)
        this.fullscreenButton.anchor.y = 1.0
        this.fullscreenButton.interactive = true
        this.fullscreenButton.cursor = 'pointer'
        this.fullscreenButton.on('pointerdown', () => {
            if (fscreen.fullscreenElement) {
                fscreen.exitFullscreen()
            } else if (View.element.parentElement?.classList.contains(styles.fullscreen_fallback)) {
                View.element.parentElement?.classList.remove(styles.fullscreen_fallback)
            } else if (fscreen.fullscreenEnabled) {
                fscreen.requestFullscreen(View.element.parentElement!)
            } else {
                View.element.parentElement?.classList.add(styles.fullscreen_fallback)
            }
        })
        
        this.facade.addChild(this.fullscreenButton)
        
        this.relativePosition.x = x
        this.relativePosition.y = y
        this.resize()
    }

    override update (delta: number) {}
}
