import { PlayerSnake } from './player-snake';
import { GameState } from './helpers';


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

        // Draw background
        const canvasCtx = this.canvasNativeEl.getContext('2d');
        const backgroundGradient = canvasCtx.createLinearGradient(0, 0, this.canvasNativeEl.width, this.canvasNativeEl.height);
        backgroundGradient.addColorStop(0, 'rgb(0, 0, 0)');
        backgroundGradient.addColorStop(1, 'rgb(255, 255, 255)');
        canvasCtx.fillStyle = backgroundGradient;
        canvasCtx.fillRect(0, 0, this.canvasNativeEl.width, this.canvasNativeEl.height);


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
