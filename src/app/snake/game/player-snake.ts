import { SnakeBlock } from './snake-block';

export class PlayerSnake {
    /**
     * The only instance of PlayerSnake that will ever exist
     *
     * @static
     * @type {PlayerSnake}
     * @memberof PlayerSnake
     */
    static playerInstance: PlayerSnake;
    snakeBlocks: SnakeBlock[] = [];

    /**
     * The players' current score
     *
     * @memberof SnakeGame
     */
    score = 0;

    /**
     * The current length of the snake
     *
     * @memberof PlayerSnake
     */
    length = 0;

    /**
     * The direction the snake is currently travelling in.
     * 1=left 2=right 3=up 4=down
     *
     * @memberof PlayerSnake
     */
    snakeDirection = 2;

    private constructor() { }

    /**
     * Returns only instance of PlayerSnake
     *
     * @static
     * @returns {PlayerSnake}
     * @memberof PlayerSnake
     */
    public static getPlayerSnake(): PlayerSnake {
       return this.playerInstance ? this.playerInstance : this.createPlayerInstance();
    }

    /**
     * Creates the player instance if null, called in getPlayerSnake()
     *
     * @private
     * @static
     * @returns {PlayerSnake}
     * @memberof PlayerSnake
     */
    private static createPlayerInstance(): PlayerSnake {
        this.playerInstance = new PlayerSnake();
        return this.playerInstance;
    }

    /**
     *set the snake direction
     *
     * @param {number} direction
     * @memberof PlayerSnake
     */
    public setSnakeDir(direction: number) {
        this.snakeDirection = direction;
    }
}
