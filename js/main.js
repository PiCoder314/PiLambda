document.querySelector('#searchInp').addEventListener("input", sortGames)
function sortGames(){
  console.log("hi")
}
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
const warning = document.querySelector('form#prime-form p.warning');
const fadeIn = anime({
  targets: warning,
  autoplay: false,
  opacity: [0, 1],
  easing: 'linear',
  duration: 500,
  begin: () => {
    warning.style.display = 'block';
  },
});
const fadeOut = anime({
  targets: warning,
  autoplay: false,
  opacity: [1, 0],
  easing: 'linear',
  duration: 500,
  complete: () => {
    warning.style.display = 'none';
  },
});
let hidden = true;
function isitPrime() {
  const inputs = document.getElementById('prime-form').elements;
  let spec = false;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].nodeName == 'INPUT' && !inputs[i].hasAttribute('disabled')) {
      if (isNumeric(inputs[i].value)) {
        inputs[i].style.boxShadow = '';
      } else {
        inputs[i].style.boxShadow = '0px 2px 0px red';
        if (!spec) {
          spec = true;
        }
      }
    }
  }
  if (spec) {
    inputs[1].value = 'Input valid values';
    return;
  }
  const num = +inputs[0].value;
  if (num >= 100 && hidden) {
    hidden = false;
    fadeIn.play();
    fadeIn.restart();
  } else if (num < 100 && !hidden) {
    hidden = true;
    fadeOut.play();
    fadeOut.restart();
  }
  if (isPrime(num)) {
    inputs[1].value = 'Yes';
  } else {
    inputs[1].value = 'No';
  }
}
function sortForms() {
  //vars
  const re = document.getElementById('searchInp').value;
  let query = [];
  let forms = document.querySelectorAll("section[class*='Form'] h2");
  forms.forEach(function(form) {
    query.push(form.innerText);
  });
  //empty search
  if (!re) {
    query.forEach(function(form) {
      let xpath = `//h2[text()='${form}']`;
      let matchingElement = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      matchingElement.parentElement.parentElement.style.display = 'block';
      if (window.matchMedia('(min-width: 768px)').matches) {
        resizeAllGridItems();
      }
      return;
    });
  }
  //search(fuzzysort)
  let res = fuzzysort.go(re, query, {
    threshold: -5e3,
    limit: Infinity,
    allowTypo: true,
  });
  if (res.length !== 0) {
    query.forEach(function(form) {
      let isMatch = false;
      res.forEach(function(e) {
        if (form == e.target) {
          isMatch = true;
        }
      });
      let xpath = `//h2[text()='${form}']`;
      let matchingElement = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      if (isMatch) {
        matchingElement.parentElement.parentElement.style.display = 'block';
      } else {
        matchingElement.parentElement.parentElement.style.display = 'none';
      }
    });
    if (window.matchMedia('(min-width: 768px)').matches) {
      resizeAllGridItems();
    }
  }
}
document.getElementById('submit5').addEventListener('click', isitPrime);
document.getElementById('searchBtn').addEventListener('click', sortForms);
window.addEventListener('resize', resizeAllGridItems);
document.getElementById("navBtn").addEventListener("click", pushNav);
const navLinks = document.querySelectorAll(".nav-link");
const navHeight = document.getElementsByClassName("nav-list")[0].clientHeight;
if (!window.matchMedia("(min-width: 768px)").matches) {
  navLinks.forEach(function(link) {
    link.addEventListener("click", pushNav);
  });
}
let pushed = false
function pushNav() {
  let nav = document.querySelector("#pushNav");
  if (!pushed) {
    nav.style.maxHeight = `${navHeight}px`;
    pushed = true;
  } else {
    nav.style.maxHeight = 0;
    pushed = false;
  }
}
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
function resizeGridItem(item) {
  const grid = document.getElementsByClassName("grid")[0];
  const rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
  );
  const rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
  );
  const rowSpan = Math.ceil(
    (item.querySelector(".wrapMason").getBoundingClientRect().height + rowGap) /
      (rowHeight + rowGap)
  );
  item.style.gridRowEnd = "span " + rowSpan;
}
function resizeAllGridItems() {
  const allItems = document.getElementsByClassName("mathForm");
  for (let x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x]);
  }
}
if (window.matchMedia("(min-width: 768px)").matches) {
  resizeAllGridItems();
}
function isPrime(n) {
  if (isNumeric(n)) {
    if (n % 2 == 0) {
      if (n == 2) {
        return true;
      } else {
        return false;
      }
    } else if (n == 1 || n == 0) {
      return false;
    } else {
      for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
        if (n % i == 0) {
          return false;
        }
      }
    }
    return true;
  } else {
    return "Enter integer value";
  }
}
function round(num, scale) {
  if (!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale) + "e-" + scale);
  } else {
    const arr = ("" + num).split("e");
    let sig = "";
    if (+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(
      Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) +
      "e-" +
      scale
    );
  }
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function getBaseLog(x, y) {
  return Math.log(x) / Math.log(y);
}
function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
