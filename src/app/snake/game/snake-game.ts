
export class SnakeGame {

    canvasNativeEl: HTMLCanvasElement;
    score = 0;
    length = 0;

    constructor (canvasNativeEl: HTMLCanvasElement) {
        this.canvasNativeEl = canvasNativeEl;
    }
}
