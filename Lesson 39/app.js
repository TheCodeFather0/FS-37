// destucture

// const students = ["Ali", "Umid", "Farid", "Aqshin"];
// const [tenbel, calisqan, extraCalisqan, xxCalisqan] = students;
// console.log(tenbel);

// const user = {
//   firstName: "Ramin",
//   lastName: "Mammmadzada",
//   age: 33,
//   department: "Development",
// };
// const { firstName, lastName, age, department } = user;
// // salam,men ramin m. 33 yasim var,development sahesindeyem
// const mesaj = `Salam, mən ${firstName} ${lastName}. Mənim ${age} yaşım var və mən ${department} sahəsindəyəm`;

// console.log(mesaj);

// const users = [
//   {
//     firstName: "Ramin",
//     lastName: "Mammmadzada",
//     age: 33,
//     department: "Development",
//   },
//   {
//     firstName: "Ali",
//     lastName: "Asadzade",
//     age: 45,
//     department: "Avaraciliq",
//   },
//   {
//     firstName: "Murad",
//     lastName: "Boksuyor",
//     age: 66,
//     department: "Boks",
//   },
// ];
// const title = document.querySelector("#title");

// users.forEach(({ firstName, lastName, age, department }, index, arr) => {
//   title.innerHTML += `Salam, mən ${firstName} ${lastName}. Mənim ${age} yaşım var və mən ${department} sahəsindəyəm, <br />`;
// });

// // closure
// const b = "samir";

// const a = () => {
//   console.log(b);
// };

// console.log(b);

// a();

// smart parameters
// const getUser = ({ ad, soyad, yas }) => {
//   const mesaj = `Salam,menim adim ${ad} ${soyad}, menim ${yas} yasim var`;

//   console.log(mesaj);
// };

// const user = {
//   ad: "Ramin",
//   soyad: "Mammadzada",
//   yas: 12,
// };

// getUser(user);

// IIFE -> immediately invoked function expression
// anonym

// try {
//     console.log("Alinin sherefine!");
//     (() => {
//         console.log("esq olsun!");
//     })();

// }catch(err) {
//     console.error('duzgun yazilmayib!');    
// }

// console.log("hi");

// try catch

// error handling






const title = document.querySelector("#title")

try {
    const user = {name:'admin'};
    if (user.name) {
        title.innerHTML = `salam deyerli ${user.name}!`    
    }else {
        throw new TypeError("ad tapilmadi!")
    }
}catch(err) {
    title.innerHTML = err.message
    title.style.color = 'red' 
    
}

