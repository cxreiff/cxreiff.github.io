import { Container, DisplayObject, Point, Ticker, TickerCallback } from 'pixi.js'

import { View } from '../static/view'

/**
 * Abstract class representing a visible entity with update logic.
 * Subscribes itself to passed-in ticker, and handles view scaling.
 */
export abstract class PixijsEntity<T extends DisplayObject> extends Container {

    private ticker: Ticker

    public object: T
    public relativePosition: Point

    constructor (ticker: Ticker, object: T) {
        super()
        this.ticker = ticker
        this.object = object
        this.relativePosition = new Point(0, 0)
        
        this.addChild(object)
        this.ticker.add(this.updateAndScale)
    }

    abstract update: TickerCallback<this>
    
    private scaleToView = () => {
        this.object.position.x = View.scale(this.relativePosition.x)
        this.object.position.y = View.scale(this.relativePosition.y)
    }

    private updateAndScale: TickerCallback<this> = (delta) => {
        this.update && this.update(delta)
        this.scaleToView()
    }

    protected boundPositionToView = (buffer = 0.0) => {
        if(this.relativePosition.x < 0.0 + buffer) { this.relativePosition.x = 0.0 + buffer }
        if(this.relativePosition.x > 1.0 - buffer) { this.relativePosition.x = 1.0 - buffer }
        if(this.relativePosition.y < 0.0 + buffer) { this.relativePosition.y = 0.0 + buffer }
        if(this.relativePosition.y > View.ratio() - buffer) { this.relativePosition.y = View.ratio() - buffer }
    }
}
