import { Container, Ticker } from 'pixi.js'

/**
 * Abstract class representing a scene containing child entities and scene-specific logic.
 * Creates a scene-specific ticker so that the ticker can be stopped and resumed when the
 * scene is swapped.
 */
export abstract class PixijsScene extends Container {

    public ticker: Ticker = new Ticker()

    public start = () => this.ticker.start()
}
