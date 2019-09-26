//Week-2, javascript, Challenge 7 -Asterisk:
//1. Asterisk:
var rows1 = 7;

while (rows1 > 0) {
  console.log('*');
  rows1 --;
}

//2. Asterisk -Nested:
var rows2 = 7;
var asterisk = '';
let cols2 = rows2;

while (rows2 > 0) {
  for (var i = 0; i < cols2;  i++) {
    asterisk += '*';
  }
  console.log(asterisk);
  rows2 --;
  asterisk = '';
}

//3. Asterisk -Nested:
var rows3 = 7;
var asterisk = '';
var cols3 = 1;

while (rows3 > 0) {
  for (var i = 0; i < cols3; i ++) {
    asterisk += '*';
  }
  console.log(asterisk);
  rows3 --;
  cols3 ++;
  asterisk = '';
}