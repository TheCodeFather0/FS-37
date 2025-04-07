// // Adınız, cinsiniz və doğum tarixiniz olan user obyekti yaradın
// //  (name, gender, birthday).
// // Konsola doğum tarixini çıxarın.

// const user = {
//   name: "Ramin",
//   gender: "male",
//   birthday: "09.05.1992",
// };

// const birthday = user.birthday;
// document.write(birthday);

// Task-02
// Obyektə yaş (age) əlavə edin və doğum tarixini silin.
// İstifadəçi məlumatları olan bir obyekt verilib.
// // Bu obyektə yaş (age) əlavə edin və doğum tarixini silin.
// // Alınmış obyekti konsola çıxarın.

// const user = {
//   name: "Ramin",
//   gender: "male",
//   birthday: "09.05.1992",
// };
// user.age = 33;
// delete user.birthday;
// console.log(user);

// const user = {
//   name: "Ramin",
//   gender: "male",
//   age: 16,
//   setAge: function (yas) {
//     this.age = yas;
//   },

//   getYearsBeforeRetirement: function () {
//     const RetirementAge = 65;
//     const YearsBeforeRetirement = RetirementAge - this.age;
//     const message =
//       "Sizin pensiyaya qeder olan yasiniz: " + YearsBeforeRetirement;

//     return message;
//   },
// };

// const result = user.getYearsBeforeRetirement();
// console.log(result);

// const calculator = {
//   a: 5,
//   b: 6,
//   toplama: function () {
//     return this.a + this.b;
//   },
//   cixma: function () {
//     return this.a - this.b;
//   },
//   bolme: function () {
//     return this.a / this.b;
//   },
// };

// const card = {
//   balance: 1000,
//   currency: "AZN",
//   getMoney: function (x) {
//     if (x > this.balance) {
//       const msg = `Pulun çatmır ay kasıb!🚬 balans: ${this.balance}`;
//       console.log(msg);
//     } else {
//       this.balance -= x;
//       const msg = `Pulları götürün🤑💰. Sizin balansınız: ${this.balance}`;
//       console.log(msg);
//     }
//   },
//   deposit: function (x) {
//     this.balance += x;
//     console.log(`balansınız: ${this.balance}`);
//   },
// };

// card.getMoney(250);
// card.getMoney(325);
// card.getMoney(425);
// card.getMoney(1);
// card.deposit(10);

// 1. getMoney metodu,bu metodu cagirib arqument olaraq ne qeder pul cekmek istediyimizi yaziriq. Eger balansda varsa pulu verir ve hemin pulu balansdan cixir,icaze vermemelisenki balans menfiye dussun

// 2. deposite metoduna arqument olaraq mebleg gonderirsiniz ve hemin meblegi balansa elave edir.

// 1. bind
// 2. call
// 3. apply

// const person = {
//   ad: "Ümid",
// };

// function sayHello(mesaj, mesaj2) {
//   console.log(mesaj + this.ad + mesaj2);
// }

// sayHello.apply(person, ["salam deyerli ", " Sen yaxsi oglansan!"]);

// const user = {
//   firstName: "Ramin",
//   lastName: "Mammadzada",
//   message: "Mən senior html developerəm!",
// };

// function tanitim() {
//   const mesaj = `salam! mən ${this.firstName} ${this.lastName}. ${this.message}`;

//   document.write(`<h1>${mesaj}</h1>`);
// }

// tanitim.call(user);

// const user1 = {
//   name: "Ali",
//   surname: "Asadzade",
//   age: 66,
// };

// const user2 = {
//   name: "Umid",
//   surname: "Sirinov",
//   age: 36,
// };

// constructor function

// function Person(ad, soyad, yas) {
//   this.name = ad;
//   this.surname = soyad;
//   this.age = yas;
// }
// t;

// class Person {
//   constructor(ad, soyad, yas) {
//     this.name = ad;
//     this.surname = soyad;
//     this.age = yas;
//   }
// }

// const user1 = new Person(0, "1234");
// const user2 = new Person("Umid", "Sirinov", 55);

// console.log(user1);
// console.log(user2);

// class Card {
//     constructor(pinkod, balance, yas) {
//         this.pinkod = pinkod;
//         this.balance = balance;
//         this.age = yas;
//       }
// }

// constructor func yaradin adi card olsun,icersinde ,pinkod,balance,getMoney,deposie func olsun
class Card {
  constructor(pin) {
    this.balance = 0;
    this.currency = "AZN";
    this.pin = pin;
  }
}

const card1 = new Card("1234");
console.log(card1);

// card1.getMoney(560);
// getter setter
// const card = {
//   balance: 1000,
//   get pulumuGoster() {
//     console.log(`sizin balansiniz: ${this.balance} AZN`);
//   },

//   set pulYukle(x) {
//     this.balance += x;
//     console.log(`sizin balansiniz: ${this.balance} AZN`);
//   },

//   set pulCixar(x) {
//     this.balance -= x;
//     console.log(`sizin balansiniz: ${this.balance} AZN`);
//   },
// };
// card.pulumuGoster;
// card.pulYukle = 5;
// card.pulCixar = 150;
