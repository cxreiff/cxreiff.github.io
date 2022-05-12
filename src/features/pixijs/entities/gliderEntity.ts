import { Graphics } from 'pixi.js'

import { Entity } from '../abstract/entity'
import { WavyEntity } from '../entities/wavyEntity'
import { View } from '../static/view'

export class GliderEntity extends Entity<Graphics> {

    private wavy: WavyEntity

    constructor (wavy: WavyEntity) {
        super(new Graphics())
        this.wavy = wavy
        this.relativePosition.x = 0.5
        this.relativePosition.y = 0.4
    }

    override update (delta: number) {
        const linePosAtPlayer = this.wavy.points.slice(-13)[0].x
        if (this.relativePosition.x < linePosAtPlayer - 0.04) {
            this.relativePosition.x += (linePosAtPlayer - 0.04 - this.relativePosition.x) / 10
        } else if (this.relativePosition.x > linePosAtPlayer + 0.04) {
            this.relativePosition.x += (linePosAtPlayer + 0.04 - this.relativePosition.x) / 10
        }
        
        this.facade.clear()
        this.facade.lineStyle(0)
        this.facade.beginFill(0x3D3333, 1)
        this.facade.moveTo(View.scale(-0.07 / 2), 0)
        this.facade.lineTo(View.scale(0.07 / 2), 0)
        this.facade.lineTo(0, View.scale(-0.07))
        this.facade.endFill()
    }
}
