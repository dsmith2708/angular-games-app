import { SnakeBlock } from './snake-block';


export class FoodPlacer {
    private static currentFoodPlacement: SnakeBlock;

    public static getCurrentFoodPlacement(): SnakeBlock {
        return this.currentFoodPlacement;
    }

    public static placeFood(maxWidth: number, maxHeight: number, playerSnakeBlocks: SnakeBlock[]) {

        let foodPlaced = false;

        while (!foodPlaced) {
            const xFoodCoord = Math.floor(Math.random() * maxWidth) + 1;
            const yFoodCoord = Math.floor(Math.random() * maxHeight) + 1;

            const attemptFoodPlacement = {
                x: xFoodCoord,
                y: yFoodCoord
            };

            if (!playerSnakeBlocks.includes(attemptFoodPlacement)) {
                this.currentFoodPlacement = attemptFoodPlacement;
                foodPlaced = true;
            }

        }

    }

    public static checkLocationForFood(playerSnakeHead: SnakeBlock): boolean {
        if (JSON.stringify(playerSnakeHead) === JSON.stringify(this.currentFoodPlacement)) {
            return true;
        } else {
            return false;
        }
    }
}
