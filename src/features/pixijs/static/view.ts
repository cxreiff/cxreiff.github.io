import fscreen from 'fscreen'

import styles from '../pixijs.module.scss'

export class View {

    public static element: HTMLCanvasElement

    private static units = 1000

    private constructor () {}

    public static initialize (view: HTMLCanvasElement) {
        View.element = view
    }

    public static toggleFullscreen () {
        if (View.isFullscreen()) {
            View.exitFullscreen()
        } else if (View.isMobileFullscreen()) {
            View.exitMobileFullscreen()
        } else if (View.isFullscreenEnabled()) {
            View.goFullscreen()
        } else {
            View.goMobileFullscreen()
        }
    }

    public static isFullscreenEnabled = () => fscreen.fullscreenEnabled
    public static isFullscreen = () => !!fscreen.fullscreenElement
    public static goFullscreen = () => fscreen.requestFullscreen(View.element.parentElement!)
    public static exitFullscreen = () => fscreen.exitFullscreen()
    public static isMobileFullscreen = () => (
        View.element?.parentElement!.classList.contains(styles.fullscreen_fallback)
    )
    public static goMobileFullscreen = () => (
        View.element?.parentElement!.classList.add(styles.fullscreen_fallback)
    )
    public static exitMobileFullscreen = () => (
        View.element?.parentElement!.classList.remove(styles.fullscreen_fallback)
    )

    public static scale = (units: number) => (
        units / View.units * (View.element.width / window.devicePixelRatio)
    )

    public static ratio = () => View.element.height / View.element.width

    public static unitWidth = () => View.units

    public static unitHeight = () => View.units * View.ratio()
}
