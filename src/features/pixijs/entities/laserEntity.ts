import { Graphics } from 'pixi.js'
import { Bodies, Body } from 'matter-js'

import { MatterEntity } from '../abstract/matterEntity'
import { AsteroidScene } from '../scenes/asteroidScene'
import { Manager } from '../static/manager'
import { View } from '../static/view'

export class LaserEntity extends MatterEntity<Graphics> {

    constructor (x: number, y: number, rotation: number) {
        super(new Graphics(), Bodies.rectangle(x, y, 5, 20, {
            isSensor: true,
            friction: 0,
            frictionAir: 0,
            collisionFilter: {
                category: AsteroidScene.COLLISION_CATEGORIES.LASER,
                mask: AsteroidScene.COLLISION_CATEGORIES.ASTEROID,
            },
        }))
        Body.set(this.body, {
            angle: rotation,
            velocity: { x: Math.sin(rotation) * 15, y: -Math.cos(rotation) * 15 }
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
        this.facade.drawRect(0, 0, View.scale(5), View.scale(20))
        this.facade.endFill()
    }
}
