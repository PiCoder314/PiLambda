document.getElementById("submit4").addEventListener("click", calcEasy);
function calcEasy() {
  const inputs = document.getElementById("calc").elements;
  let spec = false;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].nodeName == "INPUT" && !inputs[i].hasAttribute("disabled")) {
      if (isNumeric(inputs[i].value)) {
        inputs[i].style.boxShadow = "";
      } else {
        inputs[i].style.boxShadow = "0px 2px 0px red";
        if (!spec) {
          spec = true;
        }
      }
    }
  }
  if (spec) {
    [...Array(6).keys()].forEach(function(n) {
      inputs[n + 2].value = "Input valid values";
    });
    return;
  }
  let angle;
  if (inputs[1].value == "Radians") {
    angle = inputs[0].value % Math.PI;
  } else {
    angle = ((inputs[0].value % 360) * Math.PI) / 180;
  }
  let sin = 0;
  let cos = 0;
  let tan = 0;
  let cosec = 0;
  let sec = 0;
  let cot = 0;
  for (i = 0; i <= 30; i++) {
    sin +=
      (Math.pow(-1, i) * Math.pow(angle, 2 * i + 1)) / factorial(2 * i + 1);
    cos += (Math.pow(-1, i) * Math.pow(angle, 2 * i)) / factorial(2 * i);
  }
  tan = round(sin, 10) / round(cos, 10);
  cosec = 1 / round(sin, 10);
  sec = 1 / round(cos, 10);
  cot = 1 / round(tan, 10);
  inputs[2].value = round(sin, 10);
  inputs[3].value = round(cos, 10);
  inputs[4].value = tan;
  inputs[5].value = cosec;
  inputs[6].value = sec;
  inputs[7].value = cot;
}
