import { Loader } from 'pixi.js'

import { Scene } from '../abstract/scene'
import { LoaderEntity } from '../entities/loaderEntity'

export class LoaderScene extends Scene {

    private loaderEntity = new LoaderEntity()
    
    constructor (assets: { name: string, url: string }[], onComplete: () => void) {
        super()

        this.addEntity(this.loaderEntity)

        Loader.shared.add(assets)

        Loader.shared.onProgress.add(this.onProgress, this)
        Loader.shared.onComplete.once(onComplete, this)

        Loader.shared.load()
    }

    private onProgress = (loader: Loader) => {
        this.loaderEntity.progress = loader.progress / 100
    }
}
