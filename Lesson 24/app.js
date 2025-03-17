/*
    1. function declaration
    2. function expression
    3. arrow function
*/

// hoisting

// const isPerfect = (n) => {
//   let cem = 0;
//   for (let i = n - 1; i >= 1; i--) {
//     if (!(n % i)) {
//       cem += i;
//     }
//   }

//   if (cem === n) {
//     return "mukemmel ededdir";
//   } else {
//     return "mukemmel eded deyil";
//   }
// };

// const a = isPerfect(28);
// console.log(a);

// const reverseString = (word) => {
//   let reversedString = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     reversedString += word[i];
//   }

//   return reversedString;
// };

// const word1 = reverseString("Yaqut");
// const word2 = reverseString("Əli");
// const word3 = reverseString("Fatimə");
// const word4 = reverseString("Gülnarə");
// const word5 = reverseString("Fərid");
// const word6 = reverseString("Lalə");
// const word7 = reverseString("Murad");
// const word8 = reverseString("Ümid");
// const word9 = reverseString("Ramin");

// const a = () => {}
/*
    --1. arqument olaraq eded alan funksiya yazin,ozunden sonra hemin edede qaliqsiz bolunen en kicik ededi geriye qaytarsin
    --2. iki arqument alsin,birincini ikinci qeder quvvete yukseltsin
    meselen pow(2,5) -> cavab cixmalidir 32
    --3. kvadrat kok alan funksiya yazin,icerisine reqem yazaq hemin reqemden cixan koku geriye qaytarsin -> n **  0.5

    --4. funksiya yazin arqument olaraq soz alsin,geriye herflerin sayini qaytarsin
    
    --5. isnotanumber adinda funksiya yazin,1 arqumentin alsin,eger arqument reqemdirse false, NaN-dirsa true qaytarsin.Amma bu funksiyada isNaN() isletmek olmaz

*/

const isnotanumber = (n) => {
  if (n * 1) {
    return false;
  } else {
    return true;
  }
};
const a = isnotanumber("15");
console.log(a);
