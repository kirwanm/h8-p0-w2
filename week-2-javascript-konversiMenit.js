function konversiMenit(bilanganMenit) {
    var numJam = 0;
    var numMenit = 0;
    var strMenit = '';

    numJam = Math.trunc(bilanganMenit / 60);
    numMenit = bilanganMenit - (numJam * 60);
    strMenit = numMenit.toString();
    if (strMenit.length === 1) {
        strMenit = '0' + strMenit;
    }
    return numJam + ':' + strMenit;
}
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00