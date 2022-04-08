import { DisplayObject } from 'pixi.js'
import { Engine, Composite } from 'matter-js'

import { Scene } from './scene'
import { MatterEntity } from './matterEntity'

export abstract class MatterScene extends Scene {

    public engine = Engine.create({
        gravity: { x: 0, y: 0, scale: 0 },
    })

    override update (delta: number) {
        Engine.update(this.engine, delta)
        super.update(delta)
    }

    override addEntity (entity: MatterEntity<DisplayObject>) {
        super.addEntity(entity)
        Composite.add(this.engine.world, entity.body)
        return entity
    }

    override removeEntity (entity: MatterEntity<DisplayObject>) {
        super.removeEntity(entity)
        Composite.remove(this.engine.world, entity.body)
        return entity
    }
}
