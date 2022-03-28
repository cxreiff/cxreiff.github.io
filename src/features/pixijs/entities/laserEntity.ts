import { Graphics, DisplayObject } from 'pixi.js'

import { Entity } from '../abstract/entity'
import { Manager } from '../static/manager'
import { View } from '../static/view'
import { AsteroidEntity } from '../entities/asteroidEntity'

export class LaserEntity extends Entity<Graphics> {

    constructor (x: number, y: number, rotation: number) {
        super(new Graphics())
        this.relativePosition.x = x
        this.relativePosition.y = y
        this.object.rotation = rotation
        this.velocity.x = Math.sin(rotation) / 70
        this.velocity.y = -Math.cos(rotation) / 70
    }

    override update (delta: number) {
        this.updateForVelocity()
        if (this.boundPositionToView(-0.1)) {
            Manager.currentScene.removeEntity(this)
        }
        this.draw()
    }

    override handleCollision (otherEntity: Entity<DisplayObject>) {
        switch (otherEntity.constructor) {
            case AsteroidEntity:
                Manager.currentScene.removeEntity(this)
                this.destroy()
        }
    }

    draw () {
        this.object.clear()
        this.object.lineStyle(0)
        this.object.beginFill(0x3D3333, 1)
        this.object.moveTo(View.scale(-0.005 / 2), View.scale(0.01))
        this.object.lineTo(View.scale(-0.005 / 2), View.scale(-0.01))
        this.object.lineTo(View.scale(0.005), View.scale(-0.01))
        this.object.lineTo(View.scale(0.005), View.scale(0.01))
        this.object.endFill()
    }
}