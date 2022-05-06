import { Graphics } from 'pixi.js'
import { Bodies, Body } from 'matter-js'

import { MatterEntity } from '../abstract/matterEntity'
import { AsteroidScene } from '../scenes/asteroidScene'
import { View } from '../static/view'

export class AsteroidEntity extends MatterEntity<Graphics> {
    
    private size: number

    constructor (x: number, y: number, size: number) {
        super(new Graphics(), Bodies.circle(x, y, size, {
            inertia: Infinity,
            friction: 0,
            frictionAir: 0,
            restitution: 1,
            collisionFilter: {
                category: AsteroidScene.COLLISION_CATEGORIES.ASTEROID,
            },
        }))
        this.size = size
        Body.setVelocity(this.body, {
            x: (Math.random() - 0.5) * View.unitWidth() / 300,
            y: (Math.random() - 0.5) * View.unitWidth() / 300,
        })
    }

    override update (delta: number) {
        if (this.boundPositionToLeft(this.size)) {
            Body.setVelocity(this.body, {
                x: -this.body.velocity.x,
                y: this.body.velocity.y,
            })
        }
        if (this.boundPositionToRight(this.size)) {
            Body.setVelocity(this.body, {
                x: -this.body.velocity.x,
                y: this.body.velocity.y,
            })
        }
        if (this.boundPositionToTop(this.size)) {
            Body.setVelocity(this.body, {
                x: this.body.velocity.x,
                y: -this.body.velocity.y,
            })
        }
        if (this.boundPositionToBottom(this.size)) {
            Body.setVelocity(this.body, {
                x: this.body.velocity.x,
                y: -this.body.velocity.y,
            })
        }

        this.draw()
    }

    draw () {
        this.facade.clear()
        this.facade.lineStyle(0)
        this.facade.beginFill(0x3D3333, 1)
        this.facade.drawCircle(0, 0, View.scale(this.size))
        this.facade.endFill()
    }
}