import { SnakeBlock } from './snake-block';
import { Direction } from './helpers';


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

    private constructor() { }

    // Returns only instance of PlayerSnake, creates new if doesn't exist
    public static getPlayerSnake(): PlayerSnake {
        return this.playerInstance ? this.playerInstance : this.createPlayerInstance();
    }

    // Creates only instance of PlayerSnake
    private static createPlayerInstance(): PlayerSnake {
        this.playerInstance = new PlayerSnake();
        return this.playerInstance;
    }

    public getSnakeBlocks() {
        return this.snakeBlocks;
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
        switch (this.snakeDirection) {
            case Direction.Up: {
                this.snakeBlocks.push({x: currentHeadBlock.x, y: currentHeadBlock.y - 1});
                break;
            }
            case Direction.Down: {
                this.snakeBlocks.push({x: currentHeadBlock.x, y: currentHeadBlock.y + 1});
                break;
            }
            case Direction.Left: {
                this.snakeBlocks.push({x: currentHeadBlock.x - 1, y: currentHeadBlock.y});
                break;
            }
            case Direction.Right: {
                this.snakeBlocks.push({x: currentHeadBlock.x + 1, y: currentHeadBlock.y});
                break;
            }
        }
        if (!this.lengthenSnake) {
            this.snakeBlocks.shift();
        } else if (this.lengthenSnake) {
            this.lengthenSnake = !this.lengthenSnake;
        }

    }
}
