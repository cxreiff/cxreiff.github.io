export class View {

    public static element: HTMLCanvasElement
    private static units = 800

    private constructor () {}

    public static initialize (view: HTMLCanvasElement) {
        View.element = view
    }

    public static scale = (units: number) => (
        units / View.units * (View.element.width / window.devicePixelRatio)
    )

    public static ratio = () => View.element.height / View.element.width

    public static unitWidth = () => View.units

    public static unitHeight = () => View.units * View.ratio()
}
