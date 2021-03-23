export const snakeSpeed = 1;
const snakeBody = [{ x: 11, y: 11 }];

export function update() {
  console.log("update snake");
}

export function draw() {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.x;
    snakeElement.style.grigColumnStart = segment.y;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}