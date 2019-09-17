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
