import { DisplayObject } from 'pixi.js'
import { MatterScene } from '../abstract/matterScene'
import { MatterEntity } from '../abstract/matterEntity'
import { ShipEntity } from '../entities/shipEntity'
import { AsteroidEntity } from '../entities/asteroidEntity'
import { View } from '../static/view'

export class AsteroidScene extends MatterScene {

    public static readonly ASTEROID_INTERVAL = 200
    public static readonly ASTEROID_LIMIT = 5

    private asteroidCountdown = 0
    private asteroidList: AsteroidEntity[] = []

    constructor () {
        super()

        this.addEntity(new ShipEntity())
    }

    override update (delta: number) {
        super.update(delta)

        if (this.asteroidList.filter(entity => entity != undefined).length < AsteroidScene.ASTEROID_LIMIT) {
            if (this.asteroidCountdown >= 0) {
                this.asteroidCountdown -= delta
            } else if (this.asteroidCountdown < 0) {
                const asteroid = this.generateAsteroid(0.03 * View.unitWidth())
                this.asteroidList.push(asteroid)
                this.addEntity(asteroid)
                this.asteroidCountdown = AsteroidScene.ASTEROID_INTERVAL
            }
        }
    }

    private generateAsteroid (size: number) {
        return new AsteroidEntity(
            Math.random() * View.unitWidth(),
            Math.random() * View.unitHeight(),
            size,
        )
    }

    override removeEntity (entity: MatterEntity<DisplayObject>) {
        const entityId = entity.body.id
        if (entity.constructor === AsteroidEntity) {
            this.asteroidList = this.asteroidList.filter(asteroid => asteroid.body.id !== entityId)
        }

        return super.removeEntity(entity)
    }
}
