//Week-2 Javascript Challenge 4 Switch-Case
//Input: Hari(1-31) Bulan(1-12) Tahun(1900-2200) (number)
//Output: DD MMMMMM YYYY
//contoh: Hari=1 Bulan=1 Tahun=1945
//        1 Januari 1945

var hari = 16;
var bulan = 9;
var tahun = 2019;
var hariTeks = ''; //tampung Tanggal yang valid
var bulanTeks = ''; //tampung nama Bulan
var tahunTeks = ''; //tampung Tahun yang valid

if (hari < 1 || hari > 31) {
  hariTeks = 'salah tanggal';
} else {
  hariTeks = hari;
}

if (tahun < 1900 || tahun > 2200) {
  tahunTeks = 'salah tahun';
} else {
  tahunTeks = tahun;
}

switch (bulan) {
  case 1:
    bulanTeks = 'Januari';
    break;
  case 2:
    bulanTeks = 'Februari';
    break;
  case 3:
    bulanTeks = 'Maret';
    break;
  case 4:
    bulanTeks = 'April';
    break;
  case 5:
    bulanTeks = 'Mei';
    break;
  case 6:
    bulanTeks = 'Juni';
    break;
  case 7:
    bulanTeks = 'Juli';
    break;
  case 8:
    bulanTeks = 'Agustus';
    break;
  case 9:
    bulanTeks = 'September';
    break;
  case 10:
    bulanTeks = 'Oktober';
    break;
  case 11:
    bulanTeks = 'November';
    break;
  case 12:
    bulanTeks = 'Desember';
    break;
  default:
    bulanTeks = 'salah bulan';
    break;
}

console.log(hariTeks + ' ' + bulanTeks + ' ' + tahunTeks);