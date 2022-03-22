import { Ticker, Graphics } from 'pixi.js'

import { PixijsEntity } from '../abstract/pixijsEntity'
import { View } from '../static/view'
import { WavyEntity } from './wavyEntity'

export class GliderEntity extends PixijsEntity<Graphics> {

    private wavy: WavyEntity

    constructor (ticker: Ticker, wavy: WavyEntity) {
        super(ticker, new Graphics())
        this.wavy = wavy
        this.relativePosition.x = 0.5
        this.relativePosition.y = 0.4
    }

    override update = (delta: number) => {
        const linePosAtPlayer = this.wavy.points.slice(-13)[0].x
        if (this.relativePosition.x < linePosAtPlayer - 0.04) {
            this.relativePosition.x += (linePosAtPlayer - 0.04 - this.relativePosition.x) / 10
        } else if (this.relativePosition.x > linePosAtPlayer + 0.04) {
            this.relativePosition.x += (linePosAtPlayer + 0.04 - this.relativePosition.x) / 10
        }
        
        this.object.clear()
        this.object.lineStyle(0)
        this.object.beginFill(0x3D3333, 1)
        this.object.moveTo(View.scale(-0.07 / 2), 0)
        this.object.lineTo(View.scale(0.07 / 2), 0)
        this.object.lineTo(0, View.scale(-0.07))
        this.object.endFill()
    }
}
