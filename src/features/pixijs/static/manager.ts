import { Application, Loader, Texture, BaseTexture } from 'pixi.js'

import { Scene } from '../abstract/scene'
import { AsteroidScene } from '../scenes/asteroidScene'
import { LoaderScene } from '../scenes/loaderScene'
import { View } from '../static/view'
import { Keyboard } from '../static/keyboard'

import { ASTEROID_IMAGE_URL, SHIP_IMAGE_URL } from '~/src/utilities/constants'

export class Manager {

    public static app: Application | undefined
    public static currentScene: Scene

    public static readonly ASSETS = [
        { name: 'asteroid', url: ASTEROID_IMAGE_URL },
        { name: 'ship', url: SHIP_IMAGE_URL },
    ]
    public static readonly ASPECT_RATIO = 16/9
    public static readonly MIN_RESOLUTION_WIDTH = 800

    private constructor () {}

    public static initialize (viewElement: HTMLCanvasElement, width: number, height: number) {
        if (Manager.app) { return }
        
        Manager.app = new Application({
            view: viewElement,
            backgroundColor: 0xEEDDDD,
            autoDensity: true,
            antialias: true,
            width: Math.max(width, Manager.MIN_RESOLUTION_WIDTH),
            height: Math.max(width, Manager.MIN_RESOLUTION_WIDTH) / Manager.ASPECT_RATIO,
        })

        View.initialize(viewElement)
        Keyboard.initialize(viewElement)

        Manager.app.ticker.add(Manager.update)
        
        Manager.changeScene(
            new LoaderScene(
                Manager.ASSETS,
                () => setTimeout(() => Manager.changeScene(new AsteroidScene()), 500),
            )
        )

        Manager.app.start()
    }

    public static changeScene (newScene: Scene) {
        if (Manager.currentScene) {
            Manager.app?.stage.removeChild(Manager.currentScene)
            Manager.currentScene.destroy()
        }

        Manager.currentScene = newScene
        Manager.app?.stage.addChild(newScene)
    }

    public static destroy () {
        Manager.ASSETS.forEach(asset => {
            Texture.removeFromCache(asset.name)
            BaseTexture.removeFromCache(asset.name)
            Texture.removeFromCache(asset.url)
            BaseTexture.removeFromCache(asset.url)
        })

        Loader.shared.reset()
        Manager.app?.destroy()
        Manager.app = undefined
    }

    private static update = (delta: number) => {
        if (Manager.currentScene) {
            Manager.currentScene.update(delta)
        }
    }
}
