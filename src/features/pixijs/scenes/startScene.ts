import { Scene } from '../abstract/scene'
import { StartEntity } from '../entities/startEntity'
import { TitleEntity } from '../entities/titleEntity'
import { OptionsEntity } from '../entities/optionsEntity'
import { View } from '../static/view'

export class StartScene extends Scene {
    
    constructor (onStart: () => void) {
        super()

        this.addEntity(new StartEntity(
            onStart,
            View.unitWidth() * 0.5,
            View.unitHeight() * 0.5,
        ))
        this.addEntity(new TitleEntity(
            'ASTEROIDS',
            View.unitWidth() * 0.5,
            View.unitHeight() * 0.2,
        ))
        this.addEntity(new OptionsEntity(
            20,
            View.unitHeight() - 10,
        ))
    }
}
