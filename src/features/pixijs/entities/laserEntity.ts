import { Graphics } from 'pixi.js'
import { Bodies, Body } from 'matter-js'

import { MatterEntity } from '../abstract/matterEntity'
import { AsteroidScene } from '../scenes/asteroidScene'
import { Manager } from '../static/manager'
import { View } from '../static/view'

export class LaserEntity extends MatterEntity<Graphics> {

    private static readonly LASER_WIDTH = 6
    private static readonly LASER_HEIGHT = 20
    private static readonly LASER_SPEED = 14

    constructor (x: number, y: number, rotation: number) {
        super(
            new Graphics(),
            Bodies.rectangle(
                x - (LaserEntity.LASER_WIDTH / 2),
                y,
                LaserEntity.LASER_WIDTH,
                LaserEntity.LASER_HEIGHT,
                {
                    isSensor: true,
                    friction: 0,
                    frictionAir: 0,
                    collisionFilter: {
                        category: AsteroidScene.COLLISION_CATEGORIES.LASER,
                        mask: AsteroidScene.COLLISION_CATEGORIES.ASTEROID,
                    },
                },
            )
        )
        Body.set(this.body, {
            angle: rotation,
            velocity: {
                x: Math.sin(rotation) * LaserEntity.LASER_SPEED,
                y: -Math.cos(rotation) * LaserEntity.LASER_SPEED,
            }
        })
    }

    override update (delta: number) {
        if (
            this.body.position.x < -10
            || this.body.position.x > View.unitWidth() + 10
            || this.body.position.y < -10
            || this.body.position.y > View.unitHeight() + 10
        ) {
            Manager.currentScene.removeEntity(this)
        }

        this.draw()
    }

    draw () {
        this.facade.clear()
        this.facade.lineStyle(0)
        this.facade.beginFill(0x3D3333, 1)
        this.facade.drawRect(
            -View.scale(LaserEntity.LASER_WIDTH / 2),
            0,
            View.scale(LaserEntity.LASER_WIDTH),
            View.scale(LaserEntity.LASER_HEIGHT),
        )
        this.facade.endFill()
    }
}
