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
