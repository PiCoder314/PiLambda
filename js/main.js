function round(num, scale) {
  if(!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale)  + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = ""
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
}
function sigma(initial, end, content) {
  if (content === "function") {
    alert("func");
  }
}
function getBaseLog(x, y) {
  return Math.log(x) / Math.log(y);
}
// Simple Interest
function si_int() {
  var inputs = document.getElementById('si_interest').elements;
  var spec = false;
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].nodeName == "INPUT" && !inputs[i].hasAttribute("disabled")) {
      if (+inputs[i].value) {
        inputs[i].style.boxShadow = "";
      } else {
        inputs[i].style.boxShadow = "0px 0px 4px 2px red";
        if (!spec) { spec = true }
      }
    }
  }
  if (spec) {inputs[5].value = "Input valid values"; return}
  switch(inputs[2].value) {
    case "Monthly":
      mR = 12
      break;
    case "Quarterly":
      mR = 4
      break;
    case "Yearly":
      mR=1
      break;
  }
  switch(inputs[4].value) {
    case "Months":
      mT = 12
      break;
    case "Years":
      mT=1
      break;
  }
  var P = +(inputs[0].value);
  var R = (+(inputs[1].value)/100)*mR;
  var T = +(inputs[3].value)/mT;
  var SI = P*R*T;
  inputs[5].value = round(SI+P,2);
};
// Compound Interest
function ci_int() {
  var inputs = document.getElementById('comp_interest').elements;
  var spec = false;
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].nodeName == "INPUT" && !inputs[i].hasAttribute("disabled")) {
      if (+inputs[i].value) {
        inputs[i].style.boxShadow = "";
      } else {
        inputs[i].style.boxShadow = "0px 0px 4px 2px red";
        if (!spec) { spec = true }
      }
    }
  }
  if (spec) {inputs[6].value = "Input valid values"; return}
  switch(inputs[2].value) {
    case "Monthly":
      mR = 12
      break;
    case "Quarterly":
      mR = 4
      break;
    case "Yearly":
      mR=1
      break;
  }
  switch(inputs[4].value) {
    case "Months":
      mT = 12
      break;
    case "Years":
      mT=1
      break;
  }
  switch(inputs[5].value) {
    case "Monthly":
      cT = 12
      break;
    case "Quarterly":
      cT = 4
      break;
    case "Yearly":
      cT=1
      break;
  }
  var P = +(inputs[0].value);
  var R = ((+(inputs[1].value)/100)*mR)/cT;
  var T = (+(inputs[3].value)/mT)*cT;
  var CI = Math.pow(1+R,T);
  CI *= P
  //alert(R)
  //alert(T)
  inputs[6].value = round(CI,2);
};
// Money Multiplier
function mult_money() {
  var inputs = document.getElementById('mult_money').elements;
  var spec = false;
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].nodeName == "INPUT" && !inputs[i].hasAttribute("disabled")) {
      if (+inputs[i].value) {
        inputs[i].style.boxShadow = "";
      } else {
        inputs[i].style.boxShadow = "0px 0px 4px 2px red";
        if (!spec) { spec = true }
      }
    }
  }
  if (spec) {inputs[5].value = "Input valid values"; return}
  var mM;
  switch(inputs[2].value) {
    case "Monthly":
      mM="month(s)"
      break;
    case "Quarterly":
      mM="quarter(s)"
      break;
    case "Yearly":
      mM="year(s)"
      break;
  }
  var P = +(inputs[0].value);
  var R = (+(inputs[1].value)/100);
  var M = +(inputs[3].value);
  var res;
  switch(inputs[4].value) {
    case "SI":
      res = round(((M-1)/R),2);
      break;
    case "CI":
      res = round(getBaseLog(M,1+R),2);
      break;
  }
  inputs[5].value = `Time to ${M}x your money is ${res} ${mM}`;
}
document.getElementById('submit1').addEventListener('click', si_int);
document.getElementById('submit2').addEventListener('click', ci_int);
document.getElementById('submit3').addEventListener('click', mult_money);
