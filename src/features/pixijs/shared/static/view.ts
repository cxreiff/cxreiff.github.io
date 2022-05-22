import fscreen from 'fscreen'

import styles from '../../pixijs.module.scss'

export class View {

    public static element: HTMLCanvasElement
    public static aspectRatio: number

    private static units = 1000

    private constructor () {}

    public static initialize (view: HTMLCanvasElement, aspectRatio: number) {
        View.element = view
        View.aspectRatio = aspectRatio
        if ((window.navigator as unknown as { standalone: boolean }).standalone) {
            View.toggleFullscreen()
        }
    }

    public static toggleFullscreen () {
        if (View.isHTML5Fullscreen()) {
            View.exitHTML5Fullscreen()
        } else if (View.isCSSFullscreen()) {
            View.exitCSSFullscreen()
        } else if (View.isHTML5FullscreenEnabled()) {
            View.goHTML5Fullscreen()
        } else {
            View.goCSSFullscreen()
        }
    }

    public static isHTML5FullscreenEnabled = () => fscreen.fullscreenEnabled
    public static isFullscreen = () => View.isHTML5Fullscreen() || View.isCSSFullscreen()
    public static isHTML5Fullscreen = () => !!fscreen.fullscreenElement
    public static goHTML5Fullscreen = () => fscreen.requestFullscreen(View.element.parentElement!)
    public static exitHTML5Fullscreen = () => fscreen.exitFullscreen()
    public static isCSSFullscreen = () => (
        View.element?.parentElement!.classList.contains(styles.fullscreen_fallback)
    )
    public static goCSSFullscreen = () => (
        View.element?.parentElement!.classList.add(styles.fullscreen_fallback)
    )
    public static exitCSSFullscreen = () => (
        View.element?.parentElement!.classList.remove(styles.fullscreen_fallback)
    )

    public static scale = (units: number) => (
        units / View.units * (View.element.width / window.devicePixelRatio)
    )

    public static ratio = () => View.element.height / View.element.width

    public static unitWidth = () => View.units

    public static unitHeight = () => View.units * View.ratio()
}
