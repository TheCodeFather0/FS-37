/*
    1. split
    2. join
    3. reverse
    4. shift (evvelden silme)
    5. unshift (evvele elave etme)
    6. pop (sondan silme)
    7. push (sondan elave eleme)
    8. slice
    9. splice 
    10.flat
*/

// students.shift();
// students.shift();
// students.unshift("Rza");

// students.pop();
// students.pop();
// students.push("Elchin muellim!");

// console.log(students);

// const students = ["Əli", "Fərid", "Aqşin", "Ümid", "Murad"];
// const newUserr = students.splice(1, 0, "admin");
// console.log(students);

// 2 ölçülü
// const matris = [
//   [1, 2, 3, 3434, 34, 34, 32],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matris.flat());

const a = "banana";
let newA = "";

for (let i = 0; i < a.length; i++) {
  if (a[i] === "a") {
    newA += "b";
  } else if (a[i] === "b") {
    newA += "a";
  } else {
    newA += a[i];
  }
}
console.log(newA);
