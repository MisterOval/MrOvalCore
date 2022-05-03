function mOCSetup() {
  found = false;
  fail = false;
  ints = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  rIA = [""];
}

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
) {
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
    if (mouseIsPressed) {
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
  doneVariable //boolean, optional, if array is already in order from
  //least to greatest, set to "true",ex:search(num, arr, true);
) {
  let aV = arrayVariable;
  dV = doneVariable;
  num = numberToSearchFor;
  aVAF = aV.at(aV.length / 2);
  aV0 = aV.at(0);
  if (found == false) {
    if (fail == false) {
      if (dV == true) {
        if (aVAF != num) {
          if (aVAF < num) {
            if (aV.length == 1) {
              console.log("failed");
              aV.splice(0, aV.length);
              fail = true;
              return false;
            } else {
              aV.splice(0, floor(aV.length / 2));
              console.log("cut");
            }
          } else {
            if (aV.length == 1) {
              console.log("failed");
              aV.splice(0, aV.length);
              failed = true;
              return false;
            } else {
              aV.splice(floor(aV.length / 2), floor(aV.length / 2));
              console.log("cut");
            }
          }
        } else {
          if (aV.length == 2) {
            aV.splice(0, 1);
          } else {
            console.log("found");
            aV.splice(0, aV.length, num);
            found = true;
          }
        }
      }
    }
  } else {
    return true;
  }
}
// 
