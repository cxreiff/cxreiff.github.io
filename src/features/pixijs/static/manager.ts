import { Application, Texture, Loader, BaseTexture, Ticker } from '../pixijs'

import { Scene } from '../abstract/scene'
import { AsteroidScene } from '../scenes/asteroidScene'
import { StartScene } from '../scenes/startScene'
import { LoaderScene } from '../scenes/loaderScene'
import { View } from '../static/view'
import { Keyboard } from '../static/keyboard'

import { SPRITESHEET_URLS, SOUND_URLS } from '~/src/utilities/constants'

export class Manager {

    public static app: Application | undefined
    public static currentScene: Scene

    public static readonly ASSETS = [
        { name: 'asteroids', url: SPRITESHEET_URLS.ASTEROIDS },
        { name: 'blip', url: SOUND_URLS.BLIP },
        { name: 'blep', url: SOUND_URLS.BLEP },
        { name: 'blup', url: SOUND_URLS.BLUP },
    ]
    public static readonly ASPECT_RATIO = 16/9
    public static readonly MIN_RESOLUTION_WIDTH = 800

    private constructor () {}

    public static initialize (viewElement: HTMLCanvasElement, width: number, height: number) {
        if (Manager.app) { return }
        
        Manager.app = new Application({
            view: viewElement,
            backgroundColor: 0xEEDDDD,
            antialias: true,
            autoDensity: true,
            width: Math.max(width, Manager.MIN_RESOLUTION_WIDTH),
            height: Math.max(width, Manager.MIN_RESOLUTION_WIDTH) / Manager.ASPECT_RATIO,
        })

        View.initialize(viewElement)
        Keyboard.initialize(viewElement)

        Ticker.shared.add(Manager.update)

        Manager.changeScene(
            new LoaderScene(
                Manager.ASSETS,
                () => setTimeout(() => Manager.changeScene(
                    new StartScene(() => Manager.changeScene(
                        new AsteroidScene()
                    ))
                ), 400),
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
