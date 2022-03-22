import { Ticker, Graphics } from 'pixi.js'

import { PixijsEntity } from '../abstract/pixijsEntity'
import { View } from '../static/view'
import { Keyboard } from '../static/keyboard'

export class DasherEntity extends PixijsEntity<Graphics> {

    private speed = 0.01

    constructor (ticker: Ticker) {
        super(ticker, new Graphics())
        this.relativePosition.x = 0.5
        this.relativePosition.y = 0.2
    }

    override update = (delta: number) => {

        if (Keyboard.state.get('Space')) {
            this.speed = 0.015
        } else {
            this.speed = 0.01
        }

        if (Keyboard.state.get('ArrowLeft')) {
            this.object.rotation -= 0.06
        }

        if (Keyboard.state.get('ArrowRight')) {
            this.object.rotation += 0.06
        }

        if (Keyboard.state.get('ArrowUp')) {
            this.relativePosition.x += this.speed * Math.sin(this.object.rotation)
            this.relativePosition.y -= this.speed * Math.cos(this.object.rotation)
            this.boundPositionToView(0.01)
        }

        this.object.clear()
        this.object.lineStyle(0)
        this.object.beginFill(0x3D3333, 1)
        this.object.moveTo(View.scale(-0.07 / 2), View.scale(0.04))
        this.object.lineTo(View.scale(-0.03 / 2), View.scale(0.037))
        this.object.lineTo(View.scale(0.0), View.scale(0.04 + this.speed))
        this.object.lineTo(View.scale(0.03 / 2), View.scale(0.037))
        this.object.lineTo(View.scale(0.07 / 2), View.scale(0.04))
        this.object.lineTo(View.scale(0.03), View.scale(0.02))
        this.object.lineTo(0, View.scale(-0.03))
        this.object.lineTo(View.scale(-0.03), View.scale(0.02))
        this.object.endFill()
    }
}
