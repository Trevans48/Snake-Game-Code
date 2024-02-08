// import display from "./display";

import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: number;
  private currentDirection: number;
  private color: string;
  constructor(snakeColor: string) {
    this.currentPosition = new Point(0,0);
    this.currentDirection = 1;
    this.color = snakeColor;
  }
  move(moves: number) {
    display("The", this.color, "snake moved", moves, "squares");
    if (this.currentDirection === 1)
      this.currentPosition = this.currentPosition + moves;
    else this.currentPosition = this.currentPosition - moves;
  }
  //up = 1, down = 2, left = 3, right = 4
  turnleft() {
    if (this.currentDirection === 1) {
      this.currentDirection = 3;
    } else if (this.currentDirection === 2) {
      this.currentDirection = 3;
    }
    else if (this.currentDirection === 3) {
      this.currentDirection = 3;
    }
    else if (this.currentDirection === 4) {
      this.currentDirection = 3;
    }
    display("The", this.color, "snake turned left");
  }
  
  turnRight() {
    if (this.currentDirection === 1) {
      this.currentDirection = 4;
    } else if (this.currentDirection === 2) {
      this.currentDirection = 4;
    }
    else if (this.currentDirection === 3) {
      this.currentDirection = 4;
    }
    else if (this.currentDirection === 4) {
      this.currentDirection = 4;
    }
    display("The", this.color, "snake turned right");
  }
  
  public get position() {
    return this.currentPosition;
  }
}

class Point {
  private xcoord: number;
  private ycoord: number;
  constructor() {
    this.xcoord = 0;
    this.ycoord = 0;
  }
  public get position() {
    return this.xcoord;
    return this.ycoord;
  }
}

export default Snake;
