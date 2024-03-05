import Snake from "./Snake";
import Point from "./Point";

class WorldModel {
  private snake: Snake;

  constructor(s: Snake) {
    this.snake = s;
  }

  update(steps: number): void {
    this.snake.move(steps);
  }

  get Snake(): Snake {
    return this.snake;
  }

   set Snake(s:Snake) {
    this.Snake = s;
}

}

export default WorldModel;
