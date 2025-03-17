/*
    1. toLowerCase()
    2. toUpperCase()
    3. trim()
    4. replace(), replaceAll()
    5. startsWith()
    6. endsWith()
    7. charAt()
    8. charCodeAt()
    9. includes()
    10. concat()
    11. at()
    12. slice,substring,substr
    13. repeat()
*/

// const text = "salam dunya";
// const b = text
//   .replace("salam", "hello")
//   .replace("dunya", "world")
//   .replace("world", "mars");
// //   hello mars

// console.log(b.endsWith("mars"));

// const a = "salam olsun qızlara,salam olsun oğlanlara";
// const b = a.replaceAll("salam", "hello");
// console.log(b.charCodeAt());

// const a = "alma";
// const b = a.charCodeAt(0);
// console.log(b);

// const a = "Boksuyor Murad";
// const b = a.toLowerCase().includes("boks");
// console.log(b);

// const a = "salam";
// console.log(a.padStart(7, "*").padEnd(9, "*"));

const a = "salam dunya! javascript cox pis dildir!";
// const b = a[0].toUpperCase() + a.slice(1);
const b = a.substr(6, 5);
console.log(b);
