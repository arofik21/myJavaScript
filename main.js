//alert("heyho");

let nama = "moh arofik";
let usia = 30;
let tinggiBadan = 170.5;
let beratBadan = 70;
let pacar = 2;
// if (pacar == null) {
//   pacar = "belum punya";
// } else {
//   pacar = "sudah punya";
// }
switch (pacar) {
  case 1:
    pacar = "punya 1 aja";
    break;
  case 2:
    pacar = "cukup playboy";
    break;
  default:
    pacar = "belum punya pacar";
    break;
}

alert(`nama saya ${nama} usia saya itu ${usia} tinggi badan saya adalah
  ${tinggiBadan} berat badan saya ${beratBadan} pacar saya ${pacar}`);
