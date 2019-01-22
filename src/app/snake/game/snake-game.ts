import { PlayerSnake } from './player-snake';
import { GameState } from './helpers';

export class SnakeGame {

    gameState: GameState = GameState.Menu;

    // PlayerSnake instance
    playerSnake: PlayerSnake;

    // Render will run while this is true
    runRender = true;

    constructor(public canvasNativeEl: HTMLCanvasElement) {
        console.log('passed nativeEl', canvasNativeEl);
        // this.canvasNativeEl = canvasNativeEl;
        console.log('new canvasnativeEL', this.canvasNativeEl);
        this.playerSnake = PlayerSnake.getPlayerSnake();

        this.startRender();
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

    private startRender() {
        console.log('ran startrender');
        window.setInterval(this.render.bind(this), 16);
    }

    private render() {
        console.log('render running');
        console.log(this.canvasNativeEl);

        if (this.canvasNativeEl) {
            // Draw background
            const canvasCtx = this.canvasNativeEl.getContext('2d');
            const backgroundGradient = canvasCtx.createLinearGradient(0, 0, this.canvasNativeEl.width, this.canvasNativeEl.height);
            backgroundGradient.addColorStop(0, 'rgb(61, 255, 112)');
            backgroundGradient.addColorStop(1, 'rgb(0, 249, 65)');
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

}
