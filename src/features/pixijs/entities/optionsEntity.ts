import { Container, Text, ITextStyle } from '../pixijs'
import fscreen from 'fscreen'

import { Entity } from '../abstract/entity'
import { AsteroidScene } from '../scenes/asteroidScene'
import { View } from '../static/view'
import { Sound } from '../static/sound'

import styles from '../pixijs.module.scss'

export class OptionsEntity extends Entity<Container> {

    private static readonly FULLSCREEN_CHARACTER = '\u2725'
    private static readonly UNMUTED_CHARACTER = 'SOUND ON'
    private static readonly MUTED_CHARACTER = 'SOUND OFF'
    
    private fullscreenButton: Text
    private soundButton: Text

    constructor (x: number, y: number) {
        super(new Container())

        this.fullscreenButton = new Text(OptionsEntity.FULLSCREEN_CHARACTER, {
            ...AsteroidScene.TEXT_OPTIONS,
            fontSize: 48,
        } as Partial<ITextStyle>)
        this.fullscreenButton.anchor.y = 1.0
        this.fullscreenButton.interactive = true
        this.fullscreenButton.cursor = 'pointer'
        this.fullscreenButton.on('pointerdown', () => {
            if (fscreen.fullscreenElement) {
                fscreen.exitFullscreen()
            } else if (View.element.parentElement?.classList.contains(styles.fullscreen_fallback)) {
                View.element.parentElement?.classList.remove(styles.fullscreen_fallback)
            } else if (fscreen.fullscreenEnabled) {
                fscreen.requestFullscreen(View.element.parentElement!)
            } else {
                View.element.parentElement?.classList.add(styles.fullscreen_fallback)
            }
        })
        this.facade.addChild(this.fullscreenButton)

        this.soundButton = new Text(OptionsEntity.MUTED_CHARACTER, {
            ...AsteroidScene.TEXT_OPTIONS,
            fontSize: 24,
        } as Partial<ITextStyle>)
        this.soundButton.anchor.y = 1.0
        this.soundButton.interactive = true
        this.soundButton.cursor = 'pointer'
        this.soundButton.position.x = 50
        this.soundButton.position.y = -10
        this.soundButton.on('pointerdown', () => {
            Sound.muted = !Sound.muted
            this.soundButton.text = (
                Sound.muted
                ? OptionsEntity.MUTED_CHARACTER
                : OptionsEntity.UNMUTED_CHARACTER
            )
        })
        this.facade.addChild(this.soundButton)

        
        this.relativePosition.x = x
        this.relativePosition.y = y
        this.resize()
    }

    override update (delta: number) {}
}
