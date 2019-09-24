//Week-2 Javascript Challenge 4 Switch-Case
//Input: Hari Bulan Tahun (number)
//Output: DD MMMMMM YYYY
//contoh: Hari=1 Bulan=1 Tahun=1945
//        1 Januari 1945

var hari = 16;
var bulan = 9;
var tahun = 2019;
var bulanTeks = ''; //tampung nama Bulan

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

console.log(hari + ' ' + bulanTeks + ' ' + tahun);