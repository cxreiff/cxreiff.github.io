import { Text } from 'pixi.js'

import { Entity } from '../abstract/entity'
import { AsteroidScene } from '../scenes/asteroidScene'

export class TitleEntity extends Entity<Text> {

    constructor (text: string, x: number, y: number) {
        super(new Text(text, {
            ...AsteroidScene.TEXT_OPTIONS,
            fontSize: 48,
            align: 'center',
        }))
        this.facade.anchor.x = 0.5
        this.relativePosition.x = x
        this.relativePosition.y = y
        this.resize()
    }

    override update (delta: number) {}
}
