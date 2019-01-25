import { SnakeBlock } from './snake-block';


export class FoodPlacer {
    private static currentFoodPlacement: SnakeBlock;

    public static getCurrentFoodPlacement(): SnakeBlock {
        return this.currentFoodPlacement;
    }

    public static placeFood(maxWidth: number, maxHeight: number, playerSnakeBlocks: SnakeBlock[]) {

        let notFoodPlaced = true;

        while (notFoodPlaced) {

            notFoodPlaced = false;

            const xFoodCoord = Math.floor(Math.random() * maxWidth) + 1;
            const yFoodCoord = Math.floor(Math.random() * maxHeight) + 1;

            const attemptFoodPlacement = {
                x: xFoodCoord,
                y: yFoodCoord
            };

            playerSnakeBlocks.forEach(item => {
                if (item.x === attemptFoodPlacement.x && item.y === attemptFoodPlacement.y) {
                    notFoodPlaced = true;
                }
            });

            if (!notFoodPlaced) {
                this.currentFoodPlacement = attemptFoodPlacement;
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
