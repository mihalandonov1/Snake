import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = { x: 0, y: 0 };
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = { x: 20, y: 1 };
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  snakeElement.style.gridRowStart = food.x;
  snakeElement.style.gridColumnStart = food.y;
  snakeElement.classList.add("snake");
  gameBoard.appendChild(snakeElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
