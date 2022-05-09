import { Sprite, Loader } from 'pixi.js'
import { Bodies, Body } from 'matter-js'

import { MatterEntity } from '../abstract/matterEntity'
import { AsteroidScene } from '../scenes/asteroidScene'
import { View } from '../static/view'

export class AsteroidEntity extends MatterEntity<Sprite> {
    
    private radius: number

    constructor (x: number, y: number, radius: number) {
        super(
            new Sprite(Loader.shared.resources['asteroid'].texture),
            Bodies.circle(x, y, radius, {
                inertia: Infinity,
                friction: 0,
                frictionAir: 0,
                restitution: 1,
                collisionFilter: {
                    category: AsteroidScene.COLLISION_CATEGORIES.ASTEROID,
                },
            }),
        )

        this.radius = radius
        this.facade.width = View.scale(this.radius * 2)
        this.facade.height = View.scale(this.radius * 2)
        this.facade.anchor.x = 0.5
        this.facade.anchor.y = 0.5

        Body.setAngle(this.body, Math.random() * Math.PI * 2)

        Body.setVelocity(this.body, {
            x: (Math.random() - 0.5) * View.unitWidth() / 300,
            y: (Math.random() - 0.5) * View.unitWidth() / 300,
        })

        super.resize()
    }

    override update (delta: number) {
        if (this.boundPositionToLeft(this.radius)) {
            Body.setVelocity(this.body, {
                x: -this.body.velocity.x,
                y: this.body.velocity.y,
            })
        }
        if (this.boundPositionToRight(this.radius)) {
            Body.setVelocity(this.body, {
                x: -this.body.velocity.x,
                y: this.body.velocity.y,
            })
        }
        if (this.boundPositionToTop(this.radius)) {
            Body.setVelocity(this.body, {
                x: this.body.velocity.x,
                y: -this.body.velocity.y,
            })
        }
        if (this.boundPositionToBottom(this.radius)) {
            Body.setVelocity(this.body, {
                x: this.body.velocity.x,
                y: -this.body.velocity.y,
            })
        }

        this.draw()
    }

    draw () {
        this.facade.width = View.scale(this.radius * 2)
        this.facade.height = View.scale(this.radius * 2)
    }
}