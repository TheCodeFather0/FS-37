// let arr = ["New Hope", "The Empire Strikes Back", "Return of the Jdi"];

// let i = 4;
// for (let user of arr) {
//   const mesaj = `<h2>Episode ${i}: ${user}</h2>`;
//   document.write(mesaj);
//   i++;
// }

// const numbers = prompt("vergün ilə ayrılmış 5 ədəd daxil et!");
// const arr = numbers.split(",");

// let enKicik = arr[0];
// for (let number of arr) {
//   if (+enKicik > +number) {
//     enKicik = +number;
//   }
// }
// console.log(enKicik);

// callback

/*
    funksiyaya arqument olaraq hansi tipde data gondere bilerik?

    1. string
    2. number
    3. boolean
    4. null
    5. undefined
    6. function


*/

// const sayHello = (ad) => {
//   return "salam " + ad;
// };

// const result = sayHello("Murad");
// console.log(result);
// bir funksiyaya arqument olaraq gonderilen funksiyaya callBack function deyilir
// const isAgree = (age, gender, success, error) => {
//   if (gender.toLowerCase() === "k" && age >= 18) {
//     return success();
//   } else {
//     return error();
//   }
// };
// const a = () => "bu adam esger getmelidir!";
// const b = () => "bu adam esger getmemelidir!";
// const result = isAgree(19, "k", a, b);
/*
    funksiya yaziriq,namizedi ise goturmek ucun
    1ci arqumenti namizedin adi
    2ci arqument namizedin yasi
    3cu arqument namizedin is tecrubesi
    4cu arqument ise qebul olundugunu testiq eden funksiya
    5ci arqument ise qebul olunmadigini testiq eden funksiya
    eger adamin yasi boyukdurse 25den ve is tecrubesi boyukdurse 3 ilden,success funk islesin, eks halda error funk!
*/

// ES6

/*
    1. forEach -> sadece dovr
    2. map -> deyisdirmek
    3. every
    4. some
    5. find
    6. filter
    7. sort

*/

// ... -> spread,rest
// const users = ["Murad", "Farid", "Gulnara", "Fatima"];
// const newArray = ["ramin", ...users];
// console.log(newArray);

// const numbers = [2, 5, 9, 11, 18, 15, 7, 23, 25, 30];
// // 2,5,7,9,11,15
// const a = numbers.sort((x, y) => {
//   return x - y;
// });

// console.log(a);

const a = (numbers) => {
  console.log(numbers);
};

a([1, 2, 3, 24, 3, 4, 34, 2, 4, 6, 57, 6, 4, 3, 4, 32, 32, 32, 3, 2, 12, 1]);
