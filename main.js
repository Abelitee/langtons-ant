// the grid is the board and X,Y are the ant's location
let grid;
let x;
let y;
let direction;
let speed;

// P5 populates the global namespace making it difficult to keep track of its variables
// an instance is created to  give specific definitions of variables
let initP5 = new p5(Sketch);
const width = initP5.windowWidth;
const height = initP5.windowHeight;

// there are four possible directions of the ant [up,right,down,left] in a clockwise direction
const UP = 0;
const RIGHT = 1;
const DOWN = 2;
const LEFT = 3;

function Sketch(p) {
  //NOTE: The "p" props is passed by p5 hence allowing the use of p5's attributes within the local space of the function

  // create the default values where ant will start at the center of the grid
  // PS: The center of the grid is gotten by dividing width and height by 2 respectively
  // PS: The initial direction of the ant is UP [value of 0]
  p.setup = function () {
    p.createCanvas(width, height);
    grid = gridArray(width, height);
    x = width / 2;
    y = height / 2;
    direction = UP;
  };

  // the lines are drawn using P5 canvas and color(255)=white, color("#222b45")=black
  // The state is the current color and its either 0 or 1(i.e white, black)
  // PS: the loop is the number of cycle per instance i.e the drawing speed
  p.draw = function () {
    p.strokeWeight(1);
    speed = document.getElementById("speed").value;

    if (speed > 1000) {
      speed = 1000;
    }

    for (let n = 0; n < speed; n++) {
      let state = grid[x][y];

      if (state == 0) {
        turnRight();
        grid[x][y] = 1;
      } else if (state == 1) {
        turnLeft();
        grid[x][y] = 0;
      }

      p.stroke(p.color(255));

      if (grid[x][y] == 1) {
        p.stroke(p.color("#222b45")); //color(0)
      }

      p.point(x, y);

      moveForward();
    }
  };
}

// increasing the direction's value simulates a right turn
// PS: if a direction is > 3 (i.e LEFT), the direction is reset to the default of 0 (UP)
function turnRight() {
  direction++;
  if (direction > LEFT) {
    direction = UP;
  }
}

// decreasing the direction's value simulates a left turn
// PS: if the direction is < 0 (i.e UP),the direction is set to the maximum value of 3(LEFT)
function turnLeft() {
  direction--;
  if (direction < UP) {
    direction = LEFT;
  }
}

// The ant is moved by its position on the board(i.e x,y)
// just like in a graph where x is the horizontal plane and y is the vertical plane.
// i.e up = y-1 , down = y+1, left = x-1 and right = x+1
function moveForward() {
  if (direction == UP) {
    y--;
  } else if (direction == RIGHT) {
    x++;
  } else if (direction == DOWN) {
    y++;
  } else if (direction == LEFT) {
    x--;
  }

  // The edges of the board are the limits of the ant's movement
  // i.e when x reaches the value of the width, it's reset back to zero and vice versa
  if (x === width) {
    x = 0;
  } else if (x < 0) {
    x = width - 1;
  }
  if (y === height) {
    y = 0;
  } else if (y < 0) {
    y = height - 1;
  }
}

// Create a two dimensional array and fill it with zeros(0) to represent the rows and columns
function gridArray(rows, cols) {
  return Array.from(Array(rows), () => Array(cols).fill(0));
}
