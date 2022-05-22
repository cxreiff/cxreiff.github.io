import { Loader } from '../../pixijs'

export class Sound {

    public static muted = true

    private constructor () {}

    public static play (sound: string) {
        if (!Sound.muted) {
            Loader.shared.resources[sound]?.sound?.play()
        }
    }
}
