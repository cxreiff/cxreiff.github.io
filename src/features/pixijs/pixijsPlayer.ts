import { Graphics, Circle } from 'pixi.js'
import { Updatable, Drawable } from './pixijsProject'

import { Wiggly } from './pixijsWiggly'

export class Player extends Graphics implements Updatable, Drawable {

    wiggly: Wiggly

    circle: Circle = new Circle(0.5, 0.8, 0.05)
    
    constructor (wiggly: Wiggly) {
        super()
        this.wiggly = wiggly
    }

    update: Updatable['update'] = (delta, elapsed) => {
        const linePosAtPlayer = (this.wiggly.points.slice(-8)[0].x + this.wiggly.points.slice(-9)[0].x) / 2
        if (this.circle.x < linePosAtPlayer - 0.05) {
            this.circle.x += (linePosAtPlayer - 0.05 - this.circle.x) / 4
        } else if (this.circle.x > linePosAtPlayer + 0.05) {
            this.circle.x += (linePosAtPlayer + 0.05 - this.circle.x) / 4
        }
    }
    
    draw: Drawable['draw'] = (x, y) => {
        this.clear()
        this.lineStyle(0)
        this.beginFill(0x3D3333, 1)
        this.drawCircle(x(this.circle.x), y(this.circle.y), x(this.circle.radius))
        this.endFill()
    }
}
