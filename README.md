# Langton's Ant

A program modelling the Langton's ants movements.

```
https://en.wikipedia.org/wiki/Langton's_ant
```

## 📖 Getting started

Live Preview:

```
https://longtonsant.netlify.app
```

Clone Repo:

```
https://github.com/Abelitee/langtons-ant.git
```

## 🔎 Scope

- At a white square, turn 90° clockwise, flip the color of the square, move forward one unit.

- At a black square, turn 90° counter-clockwise, flip the color of the square, move forward one unit.

## 🗺 Approach

# Setup

- A canvas is created and split into a grid with the `Screen Width` and `Screen Height` as its dimensions.

- Every point/box in the grid has an initial value of 0 to indicate a white space

- Once the ant reaches a point/box on the grid, its value is inverted i.e from 0 to 1 and vice versa.

# Movements

- There are four possible directions of the ant i.e up,right,down,left in a clockwise direction.

- The ant starts at the center of the grid i.e width/2 x height/2 ; represented as X and Y

- The ant is moved by changing the values of X and Y based on its current direction.

## ⚡️ Features

- Speed Control.

## 🎛 Technologies

- P5 JS

<!-- ## Testing

- To run tets, run `yarn test` in the root directory -->

## 🧑🏼‍💻 Author:

Abel Tayo.
