import { SnakeBlock } from './snake-block';

// Enum for snake directions
export enum Direction {
    Up,
    Down,
    Left,
    Right,
}

export class PlayerSnake {

    // Only instance of playersnake
    static playerInstance: PlayerSnake;

    // Locations the player snake occupies
    private snakeBlocks: SnakeBlock[] = [];

    // Player score
    private score = 0;

    // Player snake length
    private length = 0;


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
}
