import { Graphics } from 'pixi.js'

import { Entity } from '../abstract/entity'
import { View } from '../static/view'

export class LoaderEntity extends Entity<Graphics> {

    public progress = 0

    constructor () {
        super(new Graphics())

        this.relativePosition.x = View.unitWidth() * 0.2
        this.relativePosition.y = View.unitHeight() / 2 - 20
    }

    override update (delta: number) {
        this.draw()
    }

    draw () {
        const loaderBarWidth = View.unitWidth() * 0.6

        this.facade.lineStyle(3, 0x3D3333, 1)
        this.facade.drawRect(0, 0, View.scale(loaderBarWidth), View.scale(34))

        this.facade.beginFill(0x3D3333, 1)
        this.facade.drawRect(0, 0, View.scale(loaderBarWidth * this.progress), View.scale(34))
        this.facade.endFill()
    }
}
