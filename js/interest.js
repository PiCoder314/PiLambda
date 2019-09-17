document.getElementById("submit1").addEventListener("click", si_int);
document.getElementById("submit2").addEventListener("click", ci_int);
document.getElementById("submit3").addEventListener("click", moneyMult);
function si_int() {
  const inputs = document.getElementById("si_interest").elements;
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
    inputs[5].value = "Input valid values";
    return;
  }
  let mR;
  switch (inputs[2].value) {
    case "Monthly":
      mR = 12;
      break;
    case "Quarterly":
      mR = 4;
      break;
    case "Yearly":
      mR = 1;
      break;
  }
  let mT;
  switch (inputs[4].value) {
    case "Months":
      mT = 12;
      break;
    case "Years":
      mT = 1;
      break;
  }
  const P = +inputs[0].value;
  const R = (+inputs[1].value / 100) * mR;
  const T = +inputs[3].value / mT;
  const SI = P * R * T;
  inputs[5].value = round(SI + P, 2);
}
function ci_int() {
  const inputs = document.getElementById("comp_interest").elements;
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
    inputs[6].value = "Input valid values";
    return;
  }
  let mR, mT, cT;
  switch (inputs[2].value) {
    case "Monthly":
      mR = 12;
      break;
    case "Quarterly":
      mR = 4;
      break;
    case "Yearly":
      mR = 1;
      break;
  }
  switch (inputs[4].value) {
    case "Months":
      mT = 12;
      break;
    case "Years":
      mT = 1;
      break;
  }
  switch (inputs[5].value) {
    case "Monthly":
      cT = 12;
      break;
    case "Quarterly":
      cT = 4;
      break;
    case "Yearly":
      cT = 1;
      break;
  }
  const P = +inputs[0].value;
  const R = ((+inputs[1].value / 100) * mR) / cT;
  const T = (+inputs[3].value / mT) * cT;
  const CI = P * Math.pow(1 + R, T);
  inputs[6].value = round(CI, 2);
}
function moneyMult() {
  const inputs = document.getElementById("mult_money").elements;
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
    inputs[5].value = "Input valid values";
    return;
  }
  let mM;
  switch (inputs[2].value) {
    case "Monthly":
      mM = "month(s)";
      break;
    case "Quarterly":
      mM = "quarter(s)";
      break;
    case "Yearly":
      mM = "year(s)";
      break;
  }
  const R = +inputs[1].value / 100;
  const M = +inputs[3].value;
  let res;
  switch (inputs[4].value) {
    case "SI":
      res = round((M - 1) / R, 2);
      break;
    case "CI":
      res = round(getBaseLog(M, 1 + R), 2);
      break;
  }
  inputs[5].value = `Time to ${M}x your money is ${res} ${mM}`;
}
