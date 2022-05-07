import { DisplayObject } from 'pixi.js'
import { Engine, Composite } from 'matter-js'

import { Scene } from './scene'
import { Entity } from './entity'
import { MatterEntity } from './matterEntity'

export abstract class MatterScene extends Scene {

    public engine = Engine.create({
        gravity: { x: 0, y: 0, scale: 0 },
    })

    override update (delta: number) {
        Engine.update(this.engine, delta)
        super.update(delta)
    }

    override addEntity (entity: Entity<DisplayObject>) {
        if(entity instanceof MatterEntity) {
            Composite.add(this.engine.world, entity.body)
        }
        super.addEntity(entity)
        return entity
    }

    override removeEntity (entity: Entity<DisplayObject>) {
        if (entity instanceof MatterEntity) {
            Composite.remove(this.engine.world, entity.body)
        }
        super.removeEntity(entity)
        return entity
    }
}
