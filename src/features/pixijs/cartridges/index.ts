import { SPRITESHEET_URLS, SOUND_URLS } from '~/src/utilities/constants'

import { Scene } from '../shared/abstract/scene'

import { AsteroidScene } from './asteroids/scenes/asteroidScene'
import { WavyScene } from './wavy/scenes/wavyScene'

export interface Asset {
    name: string,
    url: string,
}

export interface Cartridge {
    title: string,
    FirstScene: new () => Scene,
    aspectRatio: number,
    assets: Asset[],
}

export const Cartridges: { [key: string]: Cartridge } = {
    asteroids: {
        title: 'Asteroids',
        FirstScene: AsteroidScene,
        aspectRatio: 16/9,
        assets: [
            { name: 'asteroids', url: SPRITESHEET_URLS.ASTEROIDS },
            { name: 'blip', url: SOUND_URLS.BLIP },
            { name: 'blep', url: SOUND_URLS.BLEP },
            { name: 'blup', url: SOUND_URLS.BLUP },
        ],
    },
    tall_asteroids: {
        title: 'Tall Asteroids',
        FirstScene: AsteroidScene,
        aspectRatio: 9/16,
        assets: [
            { name: 'asteroids', url: SPRITESHEET_URLS.ASTEROIDS },
            { name: 'blip', url: SOUND_URLS.BLIP },
            { name: 'blep', url: SOUND_URLS.BLEP },
            { name: 'blup', url: SOUND_URLS.BLUP },
        ],
    },
    wavy: {
        title: 'Wavy',
        FirstScene: WavyScene,
        aspectRatio: 16/9,
        assets: [],
    }
}
