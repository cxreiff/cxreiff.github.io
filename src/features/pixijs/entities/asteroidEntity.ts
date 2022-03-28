import { Graphics, DisplayObject, Rectangle } from 'pixi.js'

import { Entity } from '../abstract/entity'
import { View } from '../static/view'
import { Manager } from '../static/manager'
import { LaserEntity } from '../entities/laserEntity'

export class AsteroidEntity extends Entity<Graphics> {
    
    private size: number

    constructor (x: number, y: number, size: number) {
        super(new Graphics())
        this.size = size
        
        this.relativePosition.x = x
        this.relativePosition.y = y

        this.velocity.x = (Math.random() - 0.5) / 500
        this.velocity.y = (Math.random() - 0.5) / 500

        this.hitbox = new Rectangle(0, 0, Math.sqrt(2) * size, Math.sqrt(2) * size)
    }

    override update (delta: number) {
        this.updateForVelocity()

        if (this.boundPositionToTop()) {
            this.velocity.y = -this.velocity.y
        }
        if (this.boundPositionToRight()) {
            this.velocity.x = -this.velocity.x
        }
        if (this.boundPositionToBottom()) {
            this.velocity.y = -this.velocity.y
        }
        if (this.boundPositionToLeft()) {
            this.velocity.x = -this.velocity.x
        }

        this.draw()
    }

    override handleCollision (otherEntity: Entity<DisplayObject>) {
        switch (otherEntity.constructor) {
            case LaserEntity:
                Manager.currentScene.removeEntity(this)
                this.destroy()
        }
    }

    draw () {
        this.object.clear()
        this.object.lineStyle(0)
        this.object.beginFill(0x3D3333, 1)
        this.object.drawCircle(0, 0, View.scale(this.size))
        this.object.endFill()
    }
}