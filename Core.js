function createRectButton(
  x,
  y,
  width,
  height,
  cornerRadius,
  textWritten,
  textSizeV /* optional, 'null' for default */,
  textColor /* optional, 'null' for default, for custom color 'color(r, g, b)' */,
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
}




function search(
  numberToSearchFor,
  arrayVariable,
  doneVariable//boolean, optional, if array is already in order from
  //least to greatest set to "true",ex:search(num, arr, true); 
  //else: do search(num, arr, done);
  
  //requires a constant variable named "found" to exist and to be set
  //to false
) {
  aV = arrayVariable;
  dV = doneVariable;
  num = numberToSearchFor;
  aVAF = aV.at(aV.length / 2);
  aV0 = aV.at(0);
  if (found == false) {
    if (dV == true) {
      if (aVAF != num) {
        if (aVAF < num) {
          aV.splice(0, floor(aV.length / 2));
          console.log("cut");
        } else {
          aV.splice(floor(aV.length / 2), floor(aV.length / 2));
          console.log("cut");
        }
      } else {
        if (aV.length == 2) {
          aV.splice(0, 1);
        } else {
          console.log("found");
          found = true;
          
        }
      }
    }
  } else {
    return true;
  }
}
