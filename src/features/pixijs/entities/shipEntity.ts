import { Graphics, DisplayObject } from 'pixi.js'

import { Entity } from '../abstract/entity'
import { Manager } from '../static/manager'
import { View } from '../static/view'
import { Keyboard } from '../static/keyboard'
import { LaserEntity } from './laserEntity'
import { AsteroidEntity } from './asteroidEntity'

export class ShipEntity extends Entity<Graphics> {

    private static CONTROLS = {
        BOOST: 'Space',
        TURN_LEFT: 'ArrowLeft',
        TURN_RIGHT: 'ArrowRight',
        FORWARD: 'ArrowUp',
        BACKWARD: 'ArrowDown',
    }

    private speed = 0.008
    private projectileFired = false

    constructor () {
        super(new Graphics())
        this.relativePosition.x = 0.5
        this.relativePosition.y = 0.2

        Keyboard.listenFor(...Object.values(ShipEntity.CONTROLS))
    }

    override update (delta: number) {

        if (Keyboard.isPressed(ShipEntity.CONTROLS.BOOST) && this.projectileFired === false) {
            this.projectileFired = true
            this.spawnProjectile()
        } else if (!Keyboard.isPressed(ShipEntity.CONTROLS.BOOST) && this.projectileFired === true) {
            this.projectileFired = false
        }

        if (Keyboard.isPressed(ShipEntity.CONTROLS.TURN_LEFT)) {
            this.object.rotation -= 0.06
        }

        if (Keyboard.isPressed(ShipEntity.CONTROLS.TURN_RIGHT)) {
            this.object.rotation += 0.06
        }

        if (Keyboard.isPressed(ShipEntity.CONTROLS.FORWARD)) {
            this.relativePosition.x += this.speed * Math.sin(this.object.rotation)
            this.relativePosition.y -= this.speed * Math.cos(this.object.rotation)
            this.boundPositionToView(0.01)
        }

        if (Keyboard.isPressed(ShipEntity.CONTROLS.BACKWARD)) {
            this.relativePosition.x -= this.speed * Math.sin(this.object.rotation)
            this.relativePosition.y += this.speed * Math.cos(this.object.rotation)
            this.boundPositionToView(0.01)
        }

        this.draw()
    }

    override handleCollision (otherEntity: Entity<DisplayObject>) {
        switch (otherEntity.constructor) {
            case AsteroidEntity:
                //TODO: player died, restart
        }
    }

    draw () {
        this.object.clear()
        this.object.lineStyle(0)
        this.object.beginFill(0x3D3333, 1)
        this.object.moveTo(View.scale(-0.06 / 2), View.scale(0.03))
        this.object.lineTo(View.scale(-0.018 / 2), View.scale(0.027))
        this.object.lineTo(View.scale(0.0), View.scale(0.03 + this.speed))
        this.object.lineTo(View.scale(0.018 / 2), View.scale(0.027))
        this.object.lineTo(View.scale(0.06 / 2), View.scale(0.03))
        this.object.lineTo(View.scale(0.018), View.scale(0.01))
        this.object.lineTo(View.scale(0.002), View.scale(-0.03))
        this.object.lineTo(View.scale(-0.002), View.scale(-0.03))
        this.object.lineTo(View.scale(-0.018), View.scale(0.01))
        this.object.endFill()
    }

    spawnProjectile () {
        Manager.currentScene.addEntity(
            new LaserEntity(this.relativePosition.x, this.relativePosition.y, this.object.rotation)
        )
    }
}
