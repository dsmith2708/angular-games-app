import {PlayerSnake} from './player-snake';

export class SnakeGame {
    /**
     * The instance of the player snake to use in the game
     *
     * @type {PlayerSnake}
     * @memberof SnakeGame
     */
    playerSnake: PlayerSnake;

    /**
     * The html canvas the game will be displayed on
     *
     * @type {HTMLCanvasElement}
     * @memberof SnakeGame
     */
    canvasNativeEl: HTMLCanvasElement;

    constructor (canvasNativeEl: HTMLCanvasElement) {
        this.canvasNativeEl = canvasNativeEl;
        this.playerSnake = PlayerSnake.getPlayerSnake();
    }

    /**
     * Pass new snake direction to PlayerSnake to set
     *
     * @param {number} direction
     * @memberof SnakeGame
     */
    keyDownHandler(keyPressed: string) {

    }


}
