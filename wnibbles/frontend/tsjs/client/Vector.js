import { Pos } from './Pos';
import { Direction } from './Direction';
export class Vector extends Pos {
    constructor() {
        super();
    }
    move() {
        let pos = this.moveNew();
        this.x = pos.x;
        this.y = pos.y;
    }
    moveNew() {
        return this.moveNewDirection(this.direction);
    }
    isOpositeDirection(direction) {
        if (this.direction == Direction.Up) {
            return direction == Direction.Down;
        }
        else if (this.direction == Direction.Right) {
            return direction == Direction.Left;
        }
        else if (this.direction == Direction.Down) {
            return direction == Direction.Up;
        }
        else if (this.direction == Direction.Left) {
            return direction == Direction.Right;
        }
    }
    moveNewDirection(direction) {
        let pos = new Pos();
        pos.x = this.x;
        pos.y = this.y;
        if (direction == Direction.Up) {
            pos.y = this.y - 1;
        }
        else if (direction == Direction.Right) {
            pos.x = this.x + 1;
        }
        else if (direction == Direction.Down) {
            pos.y = this.y + 1;
        }
        else if (direction == Direction.Left) {
            pos.x = this.x - 1;
        }
        return pos;
    }
}
//# sourceMappingURL=Vector.js.map