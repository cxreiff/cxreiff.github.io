import { Container, Text, ITextStyle } from 'pixi.js'
import fscreen from 'fscreen'

import { Entity } from '../abstract/entity'
import { AsteroidScene } from '../scenes/asteroidScene'
import { View } from '../static/view'

export class OptionsEntity extends Entity<Container> {

    private fullscreenButton?: Text

    constructor (x: number, y: number) {
        super(new Container())

        if(fscreen.fullscreenEnabled) {
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
                } else {
                    fscreen.requestFullscreen(View.element.parentElement!)
                }
            })
            this.facade.addChild(this.fullscreenButton)
        }
        
        this.relativePosition.x = x
        this.relativePosition.y = y
        this.resize()
    }

    override update (delta: number) {}
}
