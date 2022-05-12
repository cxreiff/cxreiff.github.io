import { DisplayObject } from 'pixi.js'
import { Query, Bounds } from 'matter-js'

import { MatterScene } from '../abstract/matterScene'
import { Entity } from '../abstract/entity'
import { AsteroidEntity } from '../entities/asteroidEntity'
import { HealthEntity } from '../entities/healthEntity'
import { ShipEntity } from '../entities/shipEntity'
import { ScoreEntity } from '../entities/scoreEntity'
import { View } from '../static/view'

export class AsteroidScene extends MatterScene {

    public static readonly ASTEROID_INTERVAL = 100
    public static readonly ASTEROID_LIMIT = 8
    public static readonly ASTEROID_MIN_SIZE = 0.03
    public static readonly ASTEROID_MAX_SIZE = 0.07
    public static readonly ASTEROID_VARIATION = 0.03
    public static readonly COLLISION_CATEGORIES = {
        DEFAULT: 0x0001,
        ASTEROID: 0x0002,
        SHIP: 0x0004,
        LASER: 0x0008,
    }
    public static readonly Z_LAYERS = {
        GUI: 2,
        OBJECTS: 1,
        BACKGROUND: 0,
    }

    private asteroidCountdown = AsteroidScene.ASTEROID_INTERVAL
    private asteroidList: AsteroidEntity[] = []

    public scoreEntity = new ScoreEntity(View.unitWidth() - 20, 20, 'right')
    public shipEntity = new ShipEntity()
    public healthEntity = new HealthEntity(20, 20)

    constructor () {
        super()

        this.sortableChildren = true

        this.scoreEntity.zIndex = AsteroidScene.Z_LAYERS.GUI
        this.healthEntity.zIndex = AsteroidScene.Z_LAYERS.GUI

        this.addEntity(this.shipEntity)
        this.addEntity(this.scoreEntity)
        this.addEntity(this.healthEntity)
    }

    override update (delta: number) {
        super.update(delta)

        if (this.asteroidList.length < AsteroidScene.ASTEROID_LIMIT) {
            if (this.asteroidCountdown >= 0) {
                this.asteroidCountdown -= delta
            } else if (this.asteroidCountdown < 0) {
                const radius = AsteroidScene.ASTEROID_MAX_SIZE * View.unitWidth() - ~~(
                    Math.random() * AsteroidScene.ASTEROID_VARIATION * View.unitWidth()
                )
                let x = Math.random() * View.unitWidth()
                let y = Math.random() * View.unitHeight()
                while (
                    Query.region(
                        this.detector.bodies,
                        Bounds.create([
                            { x: x - radius * 2, y: y - radius * 2 },
                            { x: x + radius * 2, y: y - radius * 2 },
                            { x: x + radius * 2, y: y + radius * 2 },
                            { x: x - radius * 2, y: y + radius * 2 },
                        ])
                    ).length > 0
                ) {
                    x = Math.random() * View.unitWidth()
                    y = Math.random() * View.unitHeight()
                }
                this.spawnAsteroid(x, y, AsteroidScene.ASTEROID_MAX_SIZE * View.unitWidth() - ~~(
                    Math.random() * AsteroidScene.ASTEROID_VARIATION * View.unitWidth()
                ))
            }
        }
    }

    public spawnAsteroid (x: number, y: number, size: number) {
        this.asteroidCountdown = AsteroidScene.ASTEROID_INTERVAL + this.asteroidList.length * 10
        return this.addEntity(new AsteroidEntity(x, y, size))
    }

    override addEntity (entity: Entity<DisplayObject>) {
        if (entity instanceof AsteroidEntity) {
            this.asteroidList.push(entity)
        }
        return super.addEntity(entity)
    }

    override removeEntity (entity: Entity<DisplayObject>) {
        if (entity instanceof AsteroidEntity) {
            this.asteroidList = this.asteroidList.filter(asteroid => asteroid.body.id !== entity.body.id)
        }
        return super.removeEntity(entity)
    }
}
