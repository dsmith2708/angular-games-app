import {PlayerSnake} from './player-snake';

export enum GameState { Menu, Playing, Paused, Ended }

export class SnakeGame {

    gameState: GameState = GameState.Menu;

    // PlayerSnake instance
    playerSnake: PlayerSnake;

    // Canvas the game will display on
    canvasNativeEl: HTMLCanvasElement;

    constructor (canvasNativeEl: HTMLCanvasElement) {
        this.canvasNativeEl = canvasNativeEl;
        this.playerSnake = PlayerSnake.getPlayerSnake();
    }

    // Handle user keypress, pass to PlayerSnake if neccessary
    keyDownHandler(keyPressed: string) {

        // Handle keypresses based on game state
        if (this.gameState === GameState.Menu) {

        } else if (this.gameState === GameState.Playing) {

        } else if (this.gameState === GameState.Paused) {
            this.gameState = GameState.Playing;
        } else if (this.gameState === GameState.Ended) {
            this.resetGame();
        }
    }

    private resetGame() {

    }

    private render() {
        switch (this.gameState) {
            case GameState.Menu: {
                break;
            }
            case GameState.Playing: {
                break;
            }
            case GameState.Paused: {
                break;
            }
            case GameState.Ended: {
                break;
            }
        }
    }

}
