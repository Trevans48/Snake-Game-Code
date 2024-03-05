import Snake from "./Snake";
import Point from "./Point";

class WorldModel {
  private snake: Snake;
  private width: number;
  private height: number;

  constructor(s: Snake, width: number, height: number) {
    this.snake = s;
    this.width = width;
    this.height = height;
  }

  update(steps: number): void {
    this.snake.move(steps);
  }

  worldWidth(): number {
    return this.width;
  }

  worldHeight(): number {
    return this.height;
  }

  get Snake(): Snake {
    return this.snake;
  }

  set Snake(s:Snake) {
    this.Snake = s;
}

}

export default WorldModel;
