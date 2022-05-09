import { Text } from 'pixi.js'

import { Entity } from '../abstract/entity'

export class ScoreEntity extends Entity<Text> {

    public score: number

    constructor (x: number, y: number, alignment: 'left'|'center'|'right', initialScore = 0) {
        super(
            new Text(initialScore.toString(), {
                fontFamily : 'monospace',
                fontSize: 32,
                fill : 0x3d3333,
                align: alignment,
                dropShadow: true,
                dropShadowDistance: 0,
                dropShadowBlur: 3,
                dropShadowColor: '#EEDDDD',
            })
        )
        this.facade.anchor.x = { left: 0, center: 0.5, right: 1 }[alignment]
        this.relativePosition.x = x
        this.relativePosition.y = y
        this.score = initialScore
    }

    override update (delta: number) {
        this.facade.text = this.score.toString()
    }

    public setScore (score: number) {
        if (score >= 0) {
            this.score = score
            this.facade.text = this.score.toString()
        }
    }
}
