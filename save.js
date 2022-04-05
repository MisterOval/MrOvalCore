function mOCSetup() {
  ints = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  rIA = [];
}

function rawInput(inputType /*check documentation*/,returnType , charLimit, maxValue) {
  iT = inputType;
  rT = returnType;
  cL = charLimit;
  mV = maxValue;
  
  if(rT == "STR"){
    return rIA.join('');
  }
}

function keyTyped() {
  //rawInput dependency
  if (iT == "INT") {
    if (ints.includes(key)) {
      if(rIA.length < cL){
        rIA.push(key);
      } else {
        rIA = [];
      }
    }
  }
}
