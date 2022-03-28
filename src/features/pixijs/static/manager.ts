import { Application } from 'pixi.js'

import { View } from './view'
import { Keyboard } from './keyboard'
import { Scene } from '../abstract/scene'
import { AsteroidScene } from '../scenes/asteroidScene'

export class Manager {

    public static app: Application
    public static currentScene: Scene

    private constructor () {}

    public static initialize (viewElement: HTMLCanvasElement, viewRect: DOMRect) {
        Manager.app = new Application({
            view: viewElement,
            resizeTo: viewElement,
            backgroundColor: 0xEEDDDD,
            autoDensity: true,
            antialias: true,
            width: viewRect.width,
            height: viewRect.height,
        })

        View.initialize(viewElement)
        Keyboard.initialize(viewElement)

        Manager.app.ticker.add(Manager.update)
        
        Manager.changeScene(new AsteroidScene())

        Manager.app.start()
    }

    public static changeScene (newScene: Scene) {
        if (Manager.currentScene) {
            Manager.app.stage.removeChild(Manager.currentScene)
            Manager.currentScene.destroy()
        }

        Manager.currentScene = newScene
        Manager.app.stage.addChild(newScene)
    }

    private static update = (delta: number) => {
        if (Manager.currentScene) {
            Manager.currentScene.update(delta)
        }
    }
}
