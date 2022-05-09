import { Sprite } from 'pixi.js'
import { Bodies, Body } from 'matter-js'

import { MatterEntity } from '../abstract/matterEntity'
import { AsteroidScene } from '../scenes/asteroidScene'
import { Manager } from '../static/manager'
import { View } from '../static/view'
import { Keyboard } from '../static/keyboard'
import { LaserEntity } from './laserEntity'

export class ShipEntity extends MatterEntity<Sprite> {

    private static CONTROLS = {
        FIRE: 'Space',
        TURN_LEFT: 'ArrowLeft',
        TURN_RIGHT: 'ArrowRight',
        FORWARD: 'ArrowUp',
        BACKWARD: 'ArrowDown',
    }

    private static VERTICES = [
        { x: -25, y: 30 },
        { x: 25, y: 30 },
        { x: 30, y: 20 },
        { x: 3, y: -18 },
        { x: -3, y: -18 },
        { x: -30, y: 20 },
    ]

    private static SPEED = 7
    private static TURNING_SPEED = 0.08

    constructor () {
        super(
            Sprite.from('ship'),
            Bodies.fromVertices(
                View.unitWidth() * 0.5,
                View.unitHeight() * 0.2,
                [ShipEntity.VERTICES],
                {
                    friction: 0.9,
                    frictionAir: 0.9,
                    inertia: 0.1,
                    collisionFilter: {
                        category: AsteroidScene.COLLISION_CATEGORIES.SHIP,
                        mask: AsteroidScene.COLLISION_CATEGORIES.ASTEROID,
                    },
                }
            )
        )

        this.facade.width = View.scale(60)
        this.facade.height = View.scale(60)
        this.facade.anchor.x = 0.5
        this.facade.anchor.y = 0.5

        Keyboard.listenFor(...Object.values(ShipEntity.CONTROLS))

        super.resize()
    }

    override update (delta: number) {

        if (Keyboard.wasPressed(ShipEntity.CONTROLS.FIRE)) {
            this.spawnProjectile()
        }

        if (Keyboard.isPressed(ShipEntity.CONTROLS.TURN_LEFT)) {
            Body.setAngle(this.body, this.body.angle - ShipEntity.TURNING_SPEED)
        }

        if (Keyboard.isPressed(ShipEntity.CONTROLS.TURN_RIGHT)) {
            Body.setAngle(this.body, this.body.angle + ShipEntity.TURNING_SPEED)
        }

        if (Keyboard.isPressed(ShipEntity.CONTROLS.FORWARD)) {
            Body.setPosition(this.body, {
                x: this.body.position.x + ShipEntity.SPEED * Math.sin(this.facade.rotation),
                y: this.body.position.y - ShipEntity.SPEED * Math.cos(this.facade.rotation),
            })
        }

        if (Keyboard.isPressed(ShipEntity.CONTROLS.BACKWARD)) {
            Body.setPosition(this.body, {
                x: this.body.position.x - ShipEntity.SPEED * Math.sin(this.facade.rotation),
                y: this.body.position.y + ShipEntity.SPEED * Math.cos(this.facade.rotation),
            })
        }

        this.boundPositionToView(0.017 * View.unitWidth())
    }

    spawnProjectile () {
        Manager.currentScene.addEntity(
            new LaserEntity(this.body.position.x, this.body.position.y, this.body.angle)
        )
    }
}
