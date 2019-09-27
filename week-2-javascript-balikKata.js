function balikKata(kata) {
  var tempKata = '';
  for (let i=kata.length; i>0; i--) {
    tempKata += kata.substr(i-1, 1);
  }
  return tempKata;
}
console.log(balikKata('Hello Worlds and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));