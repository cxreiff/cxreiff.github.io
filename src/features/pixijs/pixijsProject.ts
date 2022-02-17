import { Application, DisplayObject } from 'pixi.js'

import { Player } from './pixijsPlayer'
import { Wiggly } from './pixijsWiggly'

export interface Updatable {
    update: (delta: number, elapsed: number) => void,
}

export interface Drawable {
    draw: (x: (x: number) => number, y: (y: number) => number) => void,
}

export class PixijsProject extends Application implements Updatable, Drawable {

    wiggly: Wiggly
    player: Player

    elapsed = 0.0
    updateList: Updatable[] = []
    drawList: Drawable[] = []

    constructor (viewElement: HTMLCanvasElement, viewRect: DOMRect) {
        super({
            view: viewElement,
            resizeTo: viewElement,
            backgroundColor: 0xeedddd,
            autoDensity: true,
            antialias: true,
            width: viewRect.width,
            height: viewRect.height,
        })

        this.ticker.add((delta) => {
            this.elapsed += delta
            this.update(delta, this.elapsed)
            this.draw(
                (x: number) => this.view.width * x,
                (y: number) => this.view.height * y
            )
        })

        this.wiggly = new Wiggly(this.view)
        this.addLoopable(this.wiggly)

        this.player = new Player(this.wiggly)
        this.addLoopable(this.player)
    }
    
    addLoopable (loopable: DisplayObject & Updatable & Drawable) {
        this.stage.addChild(loopable)
        this.updateList.push(loopable)
        this.drawList.push(loopable)
    }

    update: Updatable['update'] = (delta, elapsed) => {
        this.updateList.forEach(updatable => updatable.update(delta, this.elapsed))
    }
    
    draw: Drawable['draw'] = (x, y) => {
        this.drawList.forEach(drawable => drawable.draw(x, y))
    }
}
