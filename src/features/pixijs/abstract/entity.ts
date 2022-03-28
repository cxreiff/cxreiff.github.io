import { Container, DisplayObject, Point, Rectangle } from 'pixi.js'

import { View } from '../static/view'

/**
 * Abstract class representing a visible entity with update logic.
 * Subscribes itself to passed-in ticker, and handles view scaling.
 */
export abstract class Entity<T extends DisplayObject> extends Container {

    public object: T
    public relativePosition: Point
    public velocity: Point
    protected hitbox?: Rectangle

    constructor (object: T) {
        super()
        this.object = object
        this.relativePosition = new Point(0, 0)
        this.velocity = new Point(0, 0)
        
        this.addChild(object)
    }

    public abstract update (delta: number): void
    
    public resize () {
        this.object.position.x = View.scale(this.relativePosition.x)
        this.object.position.y = View.scale(this.relativePosition.y)
    }

    public checkCollision (otherEntity: Entity<DisplayObject>): boolean {
        let boundsA = this.getBounds()
        let boundsB = otherEntity.getBounds()

        if (this.hitbox) {
            boundsA = new Rectangle(
                boundsA.x + View.scale(this.hitbox.x),
                boundsA.y + View.scale(this.hitbox.y),
                View.scale(this.hitbox.width),
                View.scale(this.hitbox.height),
            )
        }

        if (otherEntity.hitbox) {
            boundsB = new Rectangle(
                boundsB.x + View.scale(otherEntity.hitbox.x),
                boundsB.y + View.scale(otherEntity.hitbox.y),
                View.scale(otherEntity.hitbox.width),
                View.scale(otherEntity.hitbox.height),
            )
        }

        const rightmostLeft = boundsA.left < boundsB.left ? boundsB.left : boundsA.left
        const leftmostRight = boundsA.right > boundsB.right ? boundsB.right : boundsA.right

        if (leftmostRight <= rightmostLeft) {
            return false
        }

        const bottommostTop = boundsA.top < boundsB.top ? boundsB.top : boundsA.top
        const topmostBottom = boundsA.bottom > boundsB.bottom ? boundsB.bottom : boundsA.bottom

        return topmostBottom > bottommostTop
    }

    public abstract handleCollision (entity: Entity<DisplayObject>): void

    protected boundPositionToView (buffer = 0.0): boolean {
        const top = this.boundPositionToTop(buffer)
        const right = this.boundPositionToRight(buffer)
        const bottom = this.boundPositionToBottom(buffer)
        const left = this.boundPositionToLeft(buffer)
        return top || right || bottom || left
    }

    protected boundPositionToTop (buffer = 0.0): boolean {
        if(this.relativePosition.y < 0.0 + buffer) {
            this.relativePosition.y = 0.0 + buffer
            return true
        }
        return false
    }
    protected boundPositionToRight (buffer = 0.0): boolean {
        if(this.relativePosition.x > 1.0 - buffer) {
            this.relativePosition.x = 1.0 - buffer
            return true
        }
        return false
    }
    protected boundPositionToBottom (buffer = 0.0): boolean {
        if(this.relativePosition.y > View.ratio() - buffer) {
            this.relativePosition.y = View.ratio() - buffer
            return true
        }
        return false
    }
    protected boundPositionToLeft (buffer = 0.0): boolean {
        if(this.relativePosition.x < 0.0 + buffer) {
            this.relativePosition.x = 0.0 + buffer
            return true
        }
        return false
    }

    protected updateForVelocity () {
        this.relativePosition.x += this.velocity.x
        this.relativePosition.y += this.velocity.y
    }
}
