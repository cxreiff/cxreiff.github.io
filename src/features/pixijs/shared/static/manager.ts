import { Application, Texture, Loader, BaseTexture, Ticker } from '../../pixijs'

import { SPRITESHEET_URLS } from '~/src/utilities/constants'

import { Scene } from '../abstract/scene'
import { StartScene } from '../scenes/startScene'
import { LoaderScene } from '../scenes/loaderScene'
import { OverlayScene } from '../scenes/overlayScene'
import { View } from '../static/view'
import { Keyboard } from '../static/keyboard'

import { Cartridge, Asset } from '../../cartridges'

export class Manager {

    public static app: Application | undefined
    public static currentScene: Scene
    public static overlayScene?: Scene
    public static cartridge: Cartridge

    public static readonly MIN_RESOLUTION_WIDTH = 800
    public static readonly GUI_Z_INDEX = 999
    public static readonly SCENE_Z_INDEX = 0
    public static readonly SHARED_ASSETS: Asset[] = [{ name: 'shared', url: SPRITESHEET_URLS.SHARED }]

    private constructor () {}

    public static initialize (
        viewElement: HTMLCanvasElement, 
        width: number,
        cartridge: Cartridge,
    ) {
        if (Manager.app) { return }
        
        const { title, FirstScene, aspectRatio, assets } = cartridge

        Manager.app = new Application({
            view: viewElement,
            backgroundColor: 0xEEDDDD,
            antialias: true,
            autoDensity: true,
            resolution: window.devicePixelRatio,
            width: Math.max(width, Manager.MIN_RESOLUTION_WIDTH),
            height: Math.max(width, Manager.MIN_RESOLUTION_WIDTH) / aspectRatio,
        })

        Manager.app.stage.sortableChildren = true

        Manager.cartridge = cartridge

        View.initialize(viewElement, aspectRatio)
        Keyboard.initialize(viewElement)

        Ticker.shared.add(Manager.update)

        Manager.changeScene(
            new LoaderScene([ ...Manager.SHARED_ASSETS, ...assets], () => {
                Manager.changeOverlay(new OverlayScene())
                Manager.changeScene(new StartScene(title, () => Manager.changeScene(new FirstScene())))
            })
        )

        Manager.app.start()
    }

    public static changeScene (newScene: Scene) {
        if (Manager.currentScene) {
            Manager.app?.stage.removeChild(Manager.currentScene)
            Manager.currentScene.destroy()
        }
        newScene.zIndex = Manager.SCENE_Z_INDEX
        Manager.currentScene = newScene
        Manager.app?.stage.addChild(newScene)
    }

    public static changeOverlay (overlay: Scene) {
        if (Manager.overlayScene) {
            Manager.app?.stage.removeChild(Manager.overlayScene)
            Manager.overlayScene.destroy()
        }
        overlay.zIndex = Manager.GUI_Z_INDEX
        Manager.app?.stage.addChild(overlay)
        Manager.overlayScene = overlay
    }

    public static reloadStart (newTitle = Manager.cartridge.title) {
        Manager.changeScene(
            new StartScene(newTitle, () => Manager.changeScene(new Manager.cartridge.FirstScene()))
        )
    }

    public static destroy () {
        [...Manager.SHARED_ASSETS, ...Manager.cartridge.assets].forEach(asset => {
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
