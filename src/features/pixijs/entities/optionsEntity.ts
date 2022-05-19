import { Container, Texture, Sprite, Loader } from '../pixijs'

import { Entity } from '../abstract/entity'
import { View } from '../static/view'
import { Sound } from '../static/sound'

export class OptionsEntity extends Entity<Container> {

    private static readonly OPTION_BUTTON_SIZE = 42
    private static readonly OPTION_BUTTON_HOVER_SIZE = 48
    
    private fullscreenTexture: Texture
    private mutedTexture: Texture
    private unmutedTexture: Texture
    
    private fullscreenButton: Sprite
    private soundButton: Sprite

    constructor (x: number, y: number) {
        super(new Container())

        this.fullscreenTexture = Loader.shared.resources['asteroids'].spritesheet!.textures['fullscreen.png']
        this.mutedTexture = Loader.shared.resources['asteroids'].spritesheet!.textures['muted.png']
        this.unmutedTexture = Loader.shared.resources['asteroids'].spritesheet!.textures['unmuted.png']

        this.fullscreenButton = new Sprite(this.fullscreenTexture)
        this.fullscreenButton.anchor.x = 0.5
        this.fullscreenButton.anchor.y = 1.0
        this.fullscreenButton.interactive = true
        this.fullscreenButton.cursor = 'pointer'
        this.fullscreenButton.width = View.scale(OptionsEntity.OPTION_BUTTON_SIZE)
        this.fullscreenButton.height = View.scale(OptionsEntity.OPTION_BUTTON_SIZE)
        this.fullscreenButton.on('mouseover', () => {
            this.fullscreenButton.width = View.scale(OptionsEntity.OPTION_BUTTON_HOVER_SIZE)
            this.fullscreenButton.height = View.scale(OptionsEntity.OPTION_BUTTON_HOVER_SIZE)
        })
        this.fullscreenButton.on('mouseout', () => {
            this.fullscreenButton.width = View.scale(OptionsEntity.OPTION_BUTTON_SIZE)
            this.fullscreenButton.height = View.scale(OptionsEntity.OPTION_BUTTON_SIZE)
        })
        this.fullscreenButton.on('pointerdown', () => View.toggleFullscreen())
        this.facade.addChild(this.fullscreenButton)

        this.soundButton = new Sprite(Sound.muted ? this.mutedTexture : this.unmutedTexture)
        this.soundButton.anchor.x = 0.5
        this.soundButton.anchor.y = 1.0
        this.soundButton.position.x = View.scale(55)
        this.soundButton.interactive = true
        this.soundButton.cursor = 'pointer'
        this.soundButton.width = View.scale(OptionsEntity.OPTION_BUTTON_SIZE)
        this.soundButton.height = View.scale(OptionsEntity.OPTION_BUTTON_SIZE)
        this.soundButton.on('mouseover', () => {
            this.soundButton.width = View.scale(OptionsEntity.OPTION_BUTTON_HOVER_SIZE)
            this.soundButton.height = View.scale(OptionsEntity.OPTION_BUTTON_HOVER_SIZE)
        })
        this.soundButton.on('mouseout', () => {
            this.soundButton.width = View.scale(OptionsEntity.OPTION_BUTTON_SIZE)
            this.soundButton.height = View.scale(OptionsEntity.OPTION_BUTTON_SIZE)
        })
        this.soundButton.on('pointerdown', () => {
            Sound.muted = !Sound.muted
            this.soundButton.texture = Sound.muted ? this.mutedTexture : this.unmutedTexture
        })
        this.facade.addChild(this.soundButton)

        
        this.relativePosition.x = x
        this.relativePosition.y = y
        this.resize()
    }

    override update (delta: number) {}
}
