function xo(strText) {
  var tempText = '';
  var strX = '';
  var strO= '';
  for (let i = 0; i < strText.length; i++) {
    tempText = strText.substr(i, 1);
    if (tempText === 'x') {
      strX += tempText;
    } else if (tempText === 'o') {
      strO += tempText;
    } else {
      //nothing
    }
  }

  if (strX.length === strO.length) {
    return true;
  } else {
    return false;
  }
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true