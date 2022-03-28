export class View {

    public static element: HTMLCanvasElement

    private constructor () {}

    public static initialize (view: HTMLCanvasElement) {
        View.element = view
    }

    public static scale (fraction: number) {
        return fraction * View.element.width
    }

    public static ratio () {
        return View.element.height / View.element.width
    }
}
