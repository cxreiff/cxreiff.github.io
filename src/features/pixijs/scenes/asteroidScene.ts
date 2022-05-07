// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/**
* Types for Detector currently missing in @types/matter-js
* https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/59663
* TODO: Re-enable checking in this file when types are updated
*/

import { DisplayObject } from 'pixi.js'
import { Detector } from 'matter-js'

import { MatterScene } from '../abstract/matterScene'
import { MatterEntity } from '../abstract/matterEntity'
import { AsteroidEntity } from '../entities/asteroidEntity'
import { ShipEntity } from '../entities/shipEntity'
import { LaserEntity } from '../entities/laserEntity'
import { ScoreEntity } from '../entities/scoreEntity'
import { View } from '../static/view'

export class AsteroidScene extends MatterScene {

    public static readonly ASTEROID_INTERVAL = 200
    public static readonly ASTEROID_LIMIT = 8
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

    private asteroidCountdown = 0
    private asteroidList: AsteroidEntity[] = []

    private scoreEntity: ScoreEntity = new ScoreEntity(View.unitWidth() - 20, 20, 'right')
    private shipEntity: ShipEntity = new ShipEntity()

    public laserAsteroidCollisionDetector = Detector.create()

    constructor () {
        super()

        this.sortableChildren = true

        this.scoreEntity.zIndex = AsteroidScene.Z_LAYERS.GUI

        this.addEntity(this.shipEntity)
        this.addEntity(this.scoreEntity)
    }

    override update (delta: number) {
        super.update(delta)

        if (this.asteroidList.length < AsteroidScene.ASTEROID_LIMIT) {
            if (this.asteroidCountdown >= 0) {
                this.asteroidCountdown -= delta
            } else if (this.asteroidCountdown < 0) {
                this.addEntity(this.generateAsteroid(0.03 * View.unitWidth()))
                this.asteroidCountdown = AsteroidScene.ASTEROID_INTERVAL
            }
        }

        Detector.collisions(this.laserAsteroidCollisionDetector).forEach(collision => {
            if (
                (collision.bodyA.collisionFilter.category | collision.bodyB.collisionFilter.category)
                === (AsteroidScene.COLLISION_CATEGORIES.ASTEROID | AsteroidScene.COLLISION_CATEGORIES.LASER)
            ) {
                this.scoreEntity.setScore(this.scoreEntity.score + 100)

                let asteroidId: number, laserId: number
                if (collision.bodyA.collisionFilter.category === AsteroidScene.COLLISION_CATEGORIES.ASTEROID) {
                    asteroidId = collision.bodyA.id
                    laserId = collision.bodyB.id
                } else {
                    asteroidId = collision.bodyB.id
                    laserId = collision.bodyA.id
                }
                const asteroid = this.asteroidList.find(asteroid => asteroid.body.id === asteroidId)
                if (asteroid) {
                    setTimeout(() => this.removeEntity(asteroid), 10)
                }
                const laser = this.entities.find(entity => entity instanceof MatterEntity && entity.body.id === laserId) as MatterEntity<DisplayObject>
                if (laser) {
                    setTimeout(() => this.removeEntity(laser), 13)
                }
            }
        })
    }

    private generateAsteroid (size: number) {
        return new AsteroidEntity(
            Math.random() * View.unitWidth(),
            Math.random() * View.unitHeight(),
            size,
        )
    }

    override addEntity (entity: MatterEntity<DisplayObject>) {
        if (entity instanceof AsteroidEntity) {
            this.asteroidList.push(entity)
        }
        if (entity instanceof AsteroidEntity || entity instanceof LaserEntity) {
            Detector.setBodies(this.laserAsteroidCollisionDetector, [
                ...this.laserAsteroidCollisionDetector.bodies,
                entity.body,
            ])
        }

        return super.addEntity(entity)
    }

    override removeEntity (entity: MatterEntity<DisplayObject>) {
        const entityId = entity.body.id
        if (entity instanceof AsteroidEntity) {
            this.asteroidList = this.asteroidList.filter(asteroid => asteroid.body.id !== entityId)
        }
        if (entity instanceof AsteroidEntity || entity instanceof LaserEntity) {
            Detector.setBodies(
                this.laserAsteroidCollisionDetector,
                this.laserAsteroidCollisionDetector.bodies.filter(body => body.id !== entityId),
            )
        }

        return super.removeEntity(entity)
    }
}
