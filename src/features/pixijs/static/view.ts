export class View {

    public static element: HTMLCanvasElement

    public static initialize (view: HTMLCanvasElement) {
        View.element = view
    }

    public static scale = (fraction: number) => fraction * View.element.width
    public static ratio = () => View.element.height / View.element.width
}
