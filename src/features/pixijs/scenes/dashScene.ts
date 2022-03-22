import { PixijsScene } from '../abstract/pixijsScene'
import { DasherEntity } from '../entities/dasherEntity'

export class DashScene extends PixijsScene {

    private dasherEntity: DasherEntity = new DasherEntity(this.ticker)

    constructor () {
        super()

        this.addChild(this.dasherEntity)
    }
}
