export class Keyboard {

    public static readonly state: Map<string, boolean> = new Map()

    public static initialize() {
        document.addEventListener('keydown', Keyboard.onKeyDown)
        document.addEventListener('keyup', Keyboard.onKeyUp)
    }

    private static onKeyDown = (e: KeyboardEvent): void => {
        Keyboard.state.set(e.code, true)
    }
    private static onKeyUp = (e: KeyboardEvent): void => {
        Keyboard.state.set(e.code, false)
    }
}
