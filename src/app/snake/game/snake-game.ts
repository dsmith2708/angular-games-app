import { PlayerSnake } from './player-snake';
import { GameState, SnakeBlockProps, Direction } from './helpers';
import { FoodPlacer } from './food-placer';

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

        this.playerSnake = PlayerSnake.getPlayerSnake(this.screenWidthBlocks, this.screenHeightBlocks);

        this.playerSnake.setInitialPoint(Math.floor(this.screenWidthBlocks / 2), Math.floor(this.screenHeightBlocks / 2));

        FoodPlacer.placeFood(this.screenWidthBlocks, this.screenHeightBlocks, this.playerSnake.getSnakeBlocks());

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
        window.setInterval(this.update.bind(this), 100);
    }

    private update() {
        if (this.playerSnake.getSnakeAlive()) {
            this.playerSnake.update();
        } else {
            this.gameState = GameState.Ended;
        }
    }

    private startRender() {
        window.setInterval(this.render.bind(this), 16);
    }

    private render() {

        if (this.canvasNativeEl) {
            // Get Canvas context
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
                            SnakeBlockProps.targetDimensions, SnakeBlockProps.targetDimensions);
                    });

                    // Draw Food
                    const food = FoodPlacer.getCurrentFoodPlacement();
                    canvasCtx.beginPath();
                    canvasCtx.arc((food.x * SnakeBlockProps.targetDimensions) - (SnakeBlockProps.targetDimensions / 2),
                        (food.y * SnakeBlockProps.targetDimensions) - (SnakeBlockProps.targetDimensions / 2),
                        SnakeBlockProps.targetDimensions / 2, 0, 2 * Math.PI, false);
                    canvasCtx.fillStyle = 'green';
                    canvasCtx.fill();
                    canvasCtx.lineWidth = 5;
                    canvasCtx.strokeStyle = '#003300';
                    canvasCtx.stroke();
                    break;
                }
                case GameState.Paused: {
                    break;
                }
                case GameState.Ended: {
                    canvasCtx.fillStyle = '#000000';
                    canvasCtx.textAlign = 'center';
                    canvasCtx.font = '25vh ariel';
                    canvasCtx.fillText('You Died', this.canvasNativeEl.width / 2, this.canvasNativeEl.height / 2);
                    break;
                }
            }
        }
    }

}
