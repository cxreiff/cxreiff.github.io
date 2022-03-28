import { Scene } from '../abstract/scene'
import { ShipEntity } from '../entities/shipEntity'
import { AsteroidEntity } from '../entities/asteroidEntity'
import { View } from '../static/view'

export class AsteroidScene extends Scene {

    constructor () {
        super()
        this.addEntity(new ShipEntity())
        this.addEntity(new AsteroidEntity(Math.random(), Math.random() * View.ratio(), 0.03))
        this.addEntity(new AsteroidEntity(Math.random(), Math.random() * View.ratio(), 0.04))
        this.addEntity(new AsteroidEntity(Math.random(), Math.random() * View.ratio(), 0.02))
    }

    override update (delta: number) {
        super.update(delta)


    }
}
