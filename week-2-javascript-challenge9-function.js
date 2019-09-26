//Week-2, javascript, Challenge 9:
//1. Function 1:
function shoutOut() {
  return 'Halo Function!';
}
console.log(shoutOut());

//2. Function 2:
function calculateMultiply(numL1, numL2) {
  return numL1 * numL2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

//3. Function 3:
function processSentence(name, age, address, hobby) {
  return 'Nama saya ' + name + '. Umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!';
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 