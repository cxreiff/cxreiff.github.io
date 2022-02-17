import { Graphics, Point, Filter } from 'pixi.js'

import { Updatable, Drawable } from './pixijsProject'
import vShader from '~/src/assets/shaders/test.vert'
import fShader from '~/src/assets/shaders/test.frag'

export class Wiggly extends Graphics implements Updatable, Drawable {

    view: HTMLCanvasElement
    uniforms: { dimensions: number[] }
    points: Point[] = []
    pointQuota = 0.0

    constructor (view: HTMLCanvasElement) {
        super()
        this.view = view
        this.uniforms = { dimensions: [view.width, view.height] }
        this.filters = [
            new Filter(vShader, fShader, this.uniforms)
        ]
    }

    update: Updatable['update'] = (delta, elapsed) => {
        this.uniforms.dimensions = [this.view.width, this.view.height]

        this.pointQuota -= delta
        if (this.pointQuota < 0.0) {
            const randomOffset = (
                Math.sin((250 + elapsed) / 50.0)
                + Math.sin(Math.PI * (250 + elapsed) / 100.0)
            ) / 4.0 * 0.6
            this.points.push(new Point(0.5 + randomOffset, 1.3))
            this.pointQuota = 6.0
        }
        
        this.points.forEach(point => point.y -= delta * 0.01)
    }
    
    draw: Drawable['draw'] = (x, y) => {
        this.clear()
        this.lineStyle(x(0.2), 0xAA7777)
        this.moveTo(x(0.505), y(-0.3))
        this.points.forEach((point, index) => {
            this.lineTo(x(point.x), y(point.y))
            if (point.y < -0.2) {
                this.points.splice(index, 1)
            }
        })
    }
}
