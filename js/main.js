function si_int() {
  var inputs = document.getElementById('si_interest').elements;
  var P = +(inputs[0].value);
  var R = +(inputs[1].value);
  var T = +(inputs[2].value);
  var SI = P*R*T;
  inputs[3].value = SI;
};
document.getElementById('submit').addEventListener('click', si_int);
