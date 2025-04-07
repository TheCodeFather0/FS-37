// const comp = {
//   marka: "Asus",
//   model: "Tuff gaming",
//   year: 2024,
//   ram: "32 GB",
//   hdd: null,
//   sdd: "1 TB",
//   forWhat: ["Game", "Work", "Office", "Programming"],
// };

// const user = {
//   name: "Ali",
//   surname: "Azadzadeh",
//   username: "CodeYazanVahsi",
//   getFullName: function () {
//     console.log(this.name);
//   },
// };
// user.getFullName();

// 1. primitive,immutable,value       -> string,number,boolean,null,undefined
// 2. nonprimitive,mutable,referance  -> object

const user = {
  name: "Ali",
  surname: "Azadzadeh",
  username: "CodeYazanVahsi",
};
const user2 = { ...user };

user.name = "ramin";
user2.surname = "Mammadzada";

console.log(user);
console.log(user2);
