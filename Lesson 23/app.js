// funksiya

// function SayHello() {
//   console.log("salam dostlar!");
// }

// SayHello();
// SayHello();
// SayHello();
// SayHello();

// function salamFatime() {
//   console.log("salam Fatime");
// }
// function salamGulnare() {
//   console.log("salam Gulnare");
// }
// function salamYaqut() {
//   console.log("salam Yaqut");
// }

// salamFatime();
// salamGulnare();
// salamYaqut();

// parameter
// function sayHello(ad, soyad, yas) {
//   console.log(`salam ${ad} ${soyad}. Men bilirem senin ${yas} yasin var`);
// }

// // argument
// sayHello("Ramin", "Mammadzada", 22);
// sayHello();

// 1den 100e qeder ededlerin cemi

// function hesabla(startIndex, endIndex) {
//   let cem = 0;
//   for (let i = startIndex; i <= endIndex; i++) {
//     cem += i;
//   }
//   console.log(cem);
// }

// hesabla(1, 100);
// hesabla(10, 1000);
// hesabla(5, 20);

// default parameter
// function salamla(name = "Admin") {
//   console.log(`salam ${name}`);
// }

// salamla("admin");
// salamla();

// calcualtor
// 1. birinci reqemi,operatoru,ikinci reqemi ardicilliqla parametr olaraq qebul eden calculate adinda funksiya yazirsiz
// funksiya daxilinde operatoru yoxlayirsiz
// eger + dursa birinci ve ikinci reqemi toplayirsiz
// eger - dursa birinci reqemden ikinci reqemi cixirsiz
// 10 - 20 = -10
// function calculate(n1, o, n2) {
//   let result = "";
//   switch (o) {
//     case "+":
//       result = `${n1} + ${n2} = ${n1 + n2}`;
//       break;
//     case "-":
//       result = `${n1} - ${n2} = ${n1 - n2}`;
//       break;
//     case "*":
//       result = `${n1} * ${n2} = ${n1 * n2}`;
//       break;
//     case "/":
//       result = `${n1} / ${n2} = ${n1 / n2}`;
//       break;
//     default:
//       result = "duzgun operator daxil edin!";
//   }
//   return result;
// }

// const a = calculate(10, "+", 20);
// console.log(a);

// function salamla() {
//   console.log("salam");
// }

// const a = salamla();
// console.log(a);

// function cemle(a, b) {
//   const mesaj = `${a} + ${b} = ${a + b}`;
//   return mesaj;
// }

// const result = cemle(5, 6);
// console.log(result);

/*
    1. bir funksiya bir defe return ede bilir!



*/

function setAge(age) {
  let mesaj = "";
  if (age > 18) {
    mesaj = "yetkin";
  } else {
    mesaj = "yeniyetme";
  }
  return mesaj;
  console.log("salam");
}

const b = setAge(2);
console.log(b);
