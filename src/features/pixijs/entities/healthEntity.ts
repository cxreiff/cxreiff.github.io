import { Text } from 'pixi.js'

import { Entity } from '../abstract/entity'
import { ShipEntity } from '../entities/shipEntity'
import { AsteroidScene } from '../scenes/asteroidScene'
import { Manager } from '../static/manager'

export class HealthEntity extends Entity<Text> {

    public static readonly FULL_HEART = '\u2665'
    public static readonly EMPTY_HEART = '\u2661'

    constructor (x: number, y: number) {
        super(new Text(HealthEntity.FULL_HEART.repeat(ShipEntity.FULL_HEALTH), {
            ...AsteroidScene.TEXT_OPTIONS,
            fontSize: 48,
            align: 'left',
        }))
        this.relativePosition.x = x
        this.relativePosition.y = y
        this.resize()
    }

    override update (delta: number) {
        const health = (Manager.currentScene as AsteroidScene).shipEntity.health
        this.facade.text = (
            HealthEntity.FULL_HEART.repeat(health)
            + HealthEntity.EMPTY_HEART.repeat(ShipEntity.FULL_HEALTH - health)
        )
    }
}