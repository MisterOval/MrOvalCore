{function createRectButton(
  x,
  y,
  width,
  height,
  cornerRadius,
  textWritten,
  textSizeV /* optional, 'null' for default */,
  textColor /* optional, 'null' for default */,
  rectColor /* optional, 'null' for default, for custom color 'color(r, g, b)' */
  ) 
{
  push();
  rectMode(CENTER);
  textAlign(CENTER);
  if (
    mouseX <= x + width / 2 &&
    mouseX >= x - width / 2 &&
    mouseY >= y - height / 2 &&
    mouseY <= y + height / 2
  ) {
    width += 5;
    height += 5;
    if (mouseIsPressed){
      if (mouseButton === LEFT) {
        return true;
      }
    }
  }
  if (textSizeV == null) {
    textSizeV = 15;
  }

  if (rectColor == null) {
    rectColor = "white";
  }

  if (textColor == null) {
    textColor = "black";
  }
  textSize(textSizeV);
  fill(rectColor);
  rect(x, y, width, height, cornerRadius);
  fill(textColor);
  text(textWritten, x, y + textSizeV / 4);
  pop();
  rectMode(CORNER);
  textAlign(LEFT);
}}
