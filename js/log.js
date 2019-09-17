document.getElementById("submit6").addEventListener("click", logTaylor);
function logTaylor() {
  const inputs = document.getElementById("log-form").elements;
  let spec = false;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].nodeName == "INPUT" && !inputs[i].hasAttribute("disabled")) {
      let str = inputs[i].value;
      if (inputs[i].value.includes("e") || inputs[i].value.includes("π")) {
        str = str.replace(/e/g, "");
        str = str.replace(/\u03c0/g, "");
      }
      if (isNumeric(str) || str == 0) {
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
    inputs[2].value = "Input valid values";
    return;
  }
  let x = +inputs[0].value;
  let base = inputs[1].value;
  if (base == "e") {
    base = Math.E;
  } else if (base == "π") {
    base = Math.PI;
  } else {
    base = +inputs[1].value;
  }
  inputs[2].value = round(getBaseLog(x, base), 7);
}
