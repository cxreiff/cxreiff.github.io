import { Loader } from '../../pixijs'

import { Scene } from '../abstract/scene'
import { LoaderEntity } from '../entities/loaderEntity'
import { Asset } from '../../cartridges'

export class LoaderScene extends Scene {

    private loaderEntity = new LoaderEntity()
    
    constructor (assets: Asset[], onComplete: () => void) {
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
