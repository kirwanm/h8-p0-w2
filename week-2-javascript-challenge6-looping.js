//Week-2, Javascript, Challenge 6 -Looping:
//1a. Looping Pertama -Hitung Maju:
var numCacah = 2;

console.log('LOOPING PERTAMA');
while (numCacah < 21) {
  console.log(numCacah + ' - I love coding');
  numCacah += 2
}

//1b. Looping Kedua -Hitung Mundur:
var numCacah = 20;

console.log('LOOPING KEDUA');
while (numCacah > 1) {
  console.log(numCacah + ' - I will become fullstack developer');
  numCacah -= 2
}

//2a. For -Hitung Maju:
console.log('LOOPING PERTAMA');
for (var numCacah = 2; numCacah < 21; numCacah += 2) {
  console.log(numCacah + ' - I love coding');
}

//2b. For -Hitung Mundur;
console.log('LOOPING KEDUA');
for (var numCacah = 20; numCacah > 1; numCacah -= 2) {
  console.log(numCacah + ' - I will become fullstack developer');
}

//3a. Ganjil Genap:
for (var numCacah = 1; numCacah < 101; numCacah += 1) {
  if (numCacah % 2 == 0) {
    console.log(numCacah + ' - GENAP');
  } else {
    console.log(numCacah + ' - GANJIL');
  }
}

//3b1. Kelipatan 3:
var numCounter3 = 0;
for (var numCacah = 1; numCacah < 101; numCacah += 1) {
  numCounter3 = numCacah + 1;
  if (numCounter3 % 3 == 0) {
    console.log(numCounter3 + ' kelipatan 3');
  }
}

//3b2. Kelipatan 6:
var numCounter6 = 0;
for (var numCacah = 1; numCacah < 101; numCacah += 1) {
  numCounter6 = numCacah + 5
  if (numCounter6 % 6 == 0) {
    console.log (numCounter6 + ' kelipatan 6');
  }
}

//3b3. Kelipatan 10:
var numCounter10 = 0;
for (var numCacah = 1; numCacah < 101; numCacah += 1) {
  numCounter10 = numCacah + 9
  if (numCounter10 % 10 == 0) {
    console.log(numCounter10 + ' kelipatan 10');
  }
}