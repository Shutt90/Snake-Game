let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "s":
      if (lastInputDirection.y !== 0) break; //if moving up or down, can't move up or down again while travelling that direction
      inputDirection = { x: 0, y: 1 };
      break;
    case "d":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
    case "a":
      if (lastInputDirection.x !== 0) break; //if moving left or right, can't move left or right again while travelling that direction
      inputDirection = { x: -1, y: 0 };
      break;
  }
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
