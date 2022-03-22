import { Application } from 'pixi.js'

import { PixijsScene } from './abstract/pixijsScene'
import { View } from './static/view'
import { Keyboard } from './static/keyboard'
import { DashScene } from './scenes/dashScene'

export class PixijsProject extends Application {

    private currentScene: PixijsScene

    constructor (viewElement: HTMLCanvasElement, viewRect: DOMRect) {
        super({
            view: viewElement,
            resizeTo: viewElement,
            backgroundColor: 0xEEDDDD,
            autoDensity: true,
            antialias: true,
            width: viewRect.width,
            height: viewRect.height,
        })

        View.initialize(viewElement)
        Keyboard.initialize()

        this.currentScene = new DashScene()
        this.stage.addChild(this.currentScene)
        this.currentScene.start()
    }
}
