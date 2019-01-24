import { PlayerSnake } from './player-snake';
import { GameState, SnakeBlockProps, Direction } from './helpers';

export class SnakeGame {

    gameState: GameState = GameState.Playing;

    // PlayerSnake instance
    playerSnake: PlayerSnake;

    // Render will run while this is true
    runRender = true;

    // How many blocks the screen has width wise
    screenWidthBlocks: number;
    // How many blocks the screen has height wise
    screenHeightBlocks: number;

    constructor(public canvasNativeEl: HTMLCanvasElement) {

        this.screenWidthBlocks = Math.floor(this.canvasNativeEl.width / SnakeBlockProps.targetDimensions);
        this.screenHeightBlocks = Math.floor(this.canvasNativeEl.height / SnakeBlockProps.targetDimensions);

        this.playerSnake = PlayerSnake.getPlayerSnake();

        this.playerSnake.setInitialPoint(Math.floor(this.screenWidthBlocks / 2), Math.floor(this.screenHeightBlocks / 2));

        this.startUpdate();
        this.startRender();
    }

    // Handle user keypress, pass to PlayerSnake if neccessary
    keyDownHandler(keyPressed: string) {

        // Handle keypresses based on game state
        if (this.gameState === GameState.Menu) {

        } else if (this.gameState === GameState.Playing) {
            switch (keyPressed) {
                case 'ArrowLeft': {
                    this.playerSnake.setSnakeDir(Direction.Left);
                    break;
                }
                case 'ArrowRight': {
                    this.playerSnake.setSnakeDir(Direction.Right);
                    break;
                }
                case 'ArrowUp': {
                    this.playerSnake.setSnakeDir(Direction.Up);
                    break;
                }
                case 'ArrowDown': {
                    this.playerSnake.setSnakeDir(Direction.Down);
                    break;
                }
            }
        } else if (this.gameState === GameState.Paused) {
            this.gameState = GameState.Playing;
        } else if (this.gameState === GameState.Ended) {
            this.resetGame();
        }
    }

    private resetGame() {

    }

    private startUpdate() {
        window.setInterval(this.update.bind(this), 1000);
    }

    private update() {
        this.playerSnake.update();
    }

    private startRender() {
        window.setInterval(this.render.bind(this), 16);
    }

    private render() {

        if (this.canvasNativeEl) {
            const canvasCtx = this.canvasNativeEl.getContext('2d');

            // Clear screen
            canvasCtx.clearRect(0, 0, this.canvasNativeEl.width, this.canvasNativeEl.height);

            // Draw background
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
                    // Draw Snake
                    canvasCtx.fillStyle = '#000000';
                    this.playerSnake.getSnakeBlocks().forEach(block => {
                        canvasCtx.fillRect(((block.x * SnakeBlockProps.targetDimensions) - SnakeBlockProps.targetDimensions),
                        (block.y * SnakeBlockProps.targetDimensions) - SnakeBlockProps.targetDimensions,
                        SnakeBlockProps.targetDimensions, SnakeBlockProps.targetDimensions );
                    });
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
