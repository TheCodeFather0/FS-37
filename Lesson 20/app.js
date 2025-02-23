// // riyazi operatorlar
// // shert operatorlari
// // mentiqi operatorlar (logical)

// // Elinin ad gunune gedirik
// // Amma Eli deyibki 300 manatdan asagi pulun varsa ve yasinda 18den asagidirsa gelme

// const ad = prompt("adin nedir?");
// const yas = prompt("yasin necedir?");
// const pul = prompt("pulun nqederdir?");

// // // nested if
// if (yas >= 18 && pul >= 300) {
//   console.log("Tedbire devetlisiniz!");
// } else {
//   console.log("gelme");
// }

// // ==   !=
// // ===  !==

// // 1. and
// // 2. or
// // 3. not

// //  || ve ya
// //  && and

// let model = "mercedess";
// let color = "black";

// if (model === "mercedess") {
//   if (color === "black" || color === "white") {
//     console.log("xeyirli olsun!");
//   } else {
//     console.log("rengi xosuma gelmedi!");
//   }
// } else {
//   console.log("men ancaq mercedess aliram");
// }

// const username = prompt("enter your username");
// const gender = prompt("enter your gender (k/q)");

// if (gender === "k" || gender === "K") {
//   console.log(`salam cenab ${username}`);
// } else if (gender === "q" || gender === "Q") {
//   console.log(`salam xanim ${username}`);
// } else {
//   console.log("sene salam dusmur!");
// }

// switch (gender) {
//   case "k":
//   case "K":
//     console.log(`salam cenab ${username}`);
//     break;
//   case "q":
//   case "Q":
//     console.log(`salam xanim ${username}`);
//     break;
//   default:
//     console.log("sene salam dusmur!");
// }

// const a = isNaN(5 * "salam");
// console.log(a);

// const a = null;

// console.log(Number(null));

// if (!isNaN(a)) {
//   console.log("reqemdir");
// } else {
//   console.log("reqem deyil");
// }

// increment
// decrement

// prefix -> ++a,--a
// postfix-> a++,a--

// let a = 5;
// let b = ++a;
// let c = b++;
// let d = a--;
// let e = --d;

// a - 5
// b - 7
// c - 6
// d - 5
// e - 5

// console.log("a: ", a);
// console.log("b: ", b);
// console.log("c: ", c);
// console.log("d: ", d);
// console.log("e: ", e);
