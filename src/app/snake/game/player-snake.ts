import { SnakeBlock } from './snake-block';
import { Direction } from './helpers';
import { FoodPlacer } from './food-placer';


export class PlayerSnake {

    // Only instance of playersnake
    static playerInstance: PlayerSnake;

    // Locations the player snake occupies
    private snakeBlocks: SnakeBlock[] = [];

    // Player score
    private score = 0;

    // Player snake length
    private length = 0;

    // Lengthen Snake
    private lengthenSnake = true;

    // Direction snake is travelling in
    snakeDirection = Direction.Up;

    // Is Player Snake Alive
    private alive = true;

    private constructor(public screenWidthBlocks: number, public screenHeightBlocks: number) { }

    // Returns only instance of PlayerSnake, creates new if doesn't exist
    public static getPlayerSnake(screenWidthBlocks: number, screenHeightBlocks: number): PlayerSnake {
        return this.playerInstance ? this.playerInstance : this.createPlayerInstance(screenWidthBlocks, screenHeightBlocks);
    }

    // Creates only instance of PlayerSnake
    private static createPlayerInstance(screenWidthBlocks: number, screenHeightBlocks: number): PlayerSnake {
        this.playerInstance = new PlayerSnake(screenWidthBlocks, screenHeightBlocks);
        return this.playerInstance;
    }

    public getSnakeBlocks(): SnakeBlock[] {
        return this.snakeBlocks;
    }

    public getSnakeAlive(): boolean {
        return this.alive;
    }

    public setSnakeDir(direction: Direction) {
        this.snakeDirection = direction;
    }

    public setInitialPoint(xCoord: number, yCoord: number) {
        this.snakeBlocks = [{
            x: xCoord,
            y: yCoord
        }];
    }

    public update() {
        const currentHeadBlock = this.snakeBlocks[this.snakeBlocks.length - 1];
        let attemptNewHeadBlock: SnakeBlock;
        switch (this.snakeDirection) {
            case Direction.Up: {
                attemptNewHeadBlock = { x: currentHeadBlock.x, y: currentHeadBlock.y - 1 };
                break;
            }
            case Direction.Down: {
                attemptNewHeadBlock = { x: currentHeadBlock.x, y: currentHeadBlock.y + 1 };
                break;
            }
            case Direction.Left: {
                attemptNewHeadBlock = { x: currentHeadBlock.x - 1, y: currentHeadBlock.y };
                break;
            }
            case Direction.Right: {
                attemptNewHeadBlock = { x: currentHeadBlock.x + 1, y: currentHeadBlock.y };
                break;
            }
        }

        // Check if snake has hit itself
        this.snakeBlocks.forEach(block => {
            if (block.x === attemptNewHeadBlock.x && block.y === attemptNewHeadBlock.y) {
                this.alive = false;
            }
        });

        // Check if snake has gone out of bounds
        if (attemptNewHeadBlock.x < 1 || attemptNewHeadBlock.y < 1 || attemptNewHeadBlock.x > this.screenWidthBlocks ||
            attemptNewHeadBlock.y > this.screenHeightBlocks) {
            this.alive = false;
        }

        if (this.alive) {
            this.snakeBlocks.push(attemptNewHeadBlock);

            if (FoodPlacer.checkLocationForFood(attemptNewHeadBlock)) {
                this.lengthenSnake = true;
                FoodPlacer.placeFood(this.screenWidthBlocks, this.screenHeightBlocks, this.getSnakeBlocks());
            }

            if (!this.lengthenSnake) {
                this.snakeBlocks.shift();
            } else if (this.lengthenSnake) {
                this.lengthenSnake = !this.lengthenSnake;
            }
        }


    }
}
