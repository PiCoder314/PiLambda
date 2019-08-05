// Simple Interest
function si_int() {
  var inputs = document.getElementById('si_interest').elements;
  switch(inputs[2].value) {
    case "Monthly":
      mR = 12
      break;;
    case "Quarterly":
      mR = 4
      break;;
    case "Yearly":
      mR=1
      break;;
  }
  switch(inputs[4].value) {
    case "Months":
      mT = 12
      break;;
    case "Years":
      mT=1
      break;;
  }
  var P = +(inputs[0].value);
  var R = (+(inputs[1].value)/100)*mR;
  var T = +(inputs[3].value)/mT;
  var SI = P*R*T;
  inputs[5].value = Math.round((SI+P)*100)/100;
};
// Compound Interest
function ci_int() {
  var inputs = document.getElementById('comp_interest').elements;
  switch(inputs[2].value) {
    case "Monthly":
      mR = 12
      break;;
    case "Quarterly":
      mR = 4
      break;;
    case "Yearly":
      mR=1
      break;;
  }
  switch(inputs[4].value) {
    case "Months":
      mT = 12
      break;;
    case "Years":
      mT=1
      break;;
  }
  switch(inputs[5].value) {
    case "Monthly":
      cT = 12
      break;;
    case "Quarterly":
      cT = 4
      break;;
    case "Yearly":
      cT=1
      break;;
  }
  var P = +(inputs[0].value);
  var R = ((+(inputs[1].value)/100)*mR)/cT;
  var T = (+(inputs[3].value)/mT)*cT;
  var CI = Math.pow(1+R,T);
  CI *= P
  //alert(R)
  //alert(T)
inputs[6].value = (CI*100)/100;
};
document.getElementById('submit1').addEventListener('click', si_int);
document.getElementById('submit2').addEventListener('click', ci_int);
