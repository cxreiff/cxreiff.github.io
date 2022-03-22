import { RGBSplitFilter } from '@pixi/filter-rgb-split'

import { PixijsScene } from '../abstract/pixijsScene'
import { WavyEntity } from '../entities/wavyEntity'
import { GliderEntity } from '../entities/gliderEntity'

export class WavyScene extends PixijsScene {

    private wavyEntity: WavyEntity
    private gliderEntity: GliderEntity

    constructor() {
        super()

        this.filters = [
            new RGBSplitFilter([4,0], [0,0], [-4,0]),
        ]

        this.wavyEntity = new WavyEntity(this.ticker)
        this.gliderEntity = new GliderEntity(this.ticker, this.wavyEntity)

        this.addChild(this.wavyEntity)
        this.addChild(this.gliderEntity)
    }
}
