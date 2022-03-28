import { Container, DisplayObject } from 'pixi.js'

import { Entity } from './entity'

/**
 * Abstract class representing a scene containing child entities and scene-specific logic.
 */
export abstract class Scene extends Container {

    private entities: Entity<DisplayObject>[] = []

    public update (delta: number) {
        this.entities.forEach(entity => entity.update(delta))
        this.entities.forEach(entity => entity.resize())
        this.checkCollisions()
    }

    public override destroy () {
        this.entities = []
        super.destroy()
    }
    
    public addEntity (entity: Entity<DisplayObject>) {
        this.entities.push(entity)
        this.addChild(entity)
    }
    
    public removeEntity (entity: Entity<DisplayObject>) {
        const index = this.entities.indexOf(entity)
        if (index >= 0) {
            this.entities.splice(index, 1)
            this.removeChild(entity)
        }
    }

    private checkCollisions () {
        this.entities.forEach((entityA, index) => {
            this.entities.slice(index).forEach(entityB => {
                if (entityA.checkCollision(entityB)) {
                    entityA.handleCollision(entityB)
                    entityB.handleCollision(entityA)
                }
            })
        })
    }
}
