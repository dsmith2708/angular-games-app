// Enum for snake directions
export enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

// Enum for game states
export enum GameState {
    Menu,
    Playing,
    Paused,
    Ended
}

// Properties for snake blocks
export class SnakeBlockProps {
    static readonly targetDimensions = 30;
}
