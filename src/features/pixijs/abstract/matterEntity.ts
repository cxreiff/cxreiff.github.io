import { DisplayObject } from 'pixi.js'
import { Body } from 'matter-js'

import { View } from '../static/view'
import { Entity } from './entity'

export abstract class MatterEntity<T extends DisplayObject> extends Entity<T> {

    public readonly body: Body

    constructor (object: T, body: Body) {
        super(object)

        this.body = body
    }

    override resize () {
        this.facade.position.x = View.scale(this.body.position.x)
        this.facade.position.y = View.scale(this.body.position.y)
        this.facade.rotation = this.body.angle
    }
}
