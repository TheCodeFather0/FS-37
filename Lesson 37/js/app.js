// const modeBtn = document.querySelector("#modeBtn");

// const setMode = () => {
//   let mode = localStorage.getItem("mode") || "light";

//   if (mode === "dark") {
//     modeBtn.innerText = "🌞";
//     document.body.classList.remove("light");
//     document.body.classList.add("dark");
//   } else {
//     modeBtn.innerText = "🌛";
//     document.body.classList.remove("dark");
//     document.body.classList.add("light");
//   }
// };

// setMode();

// modeBtn.addEventListener("click", () => {
//   let mode = localStorage.getItem("mode");

//   if (mode === "dark") {
//     localStorage.setItem("mode", "light");
//   } else {
//     localStorage.setItem("mode", "dark");
//   }

//   setMode();
// });

// localStorage.clear();

/*
    1. setItem("key","value")
    2. getItem("key")
    3. removeItem("key")
    4. clear()

*/

// const usersJSON = localStorage.getItem("users");
// const users = JSON.parse(usersJSON);
// console.log(users);

const title = document.querySelector("#title");

// setTimeOut
// setInterval

// setTimeout(() => {
//   title.style.display = "none";
// }, 3000);

// const clock = document.querySelector("#clock");

// const setTime = () => {
//   const date = new Date();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();

//   hours = hours < 10 ? "0" + hours : hours;
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   seconds = seconds < 10 ? "0" + seconds : seconds;

//   clock.innerText = `${hours}:${minutes}:${seconds}`;
// };
// setTime();

// setInterval(() => {
//   setTime();
// }, 1000);

const carousel = document.querySelector("#carousel");
const preBtn = document.querySelector("#preBtn");
const nextBtn = document.querySelector("#nextBtn");

const images = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.jpg",
];

let index = 0;
carousel.style.backgroundImage = `url(${images[index]})`;

setInterval(() => {
  if (index !== images.length - 1) {
    index++;
  }
  carousel.style.backgroundImage = `url(${images[index]})`;
}, 2000);

nextBtn.addEventListener("click", (e) => {
  index++;

  if (index === images.length - 1) {
    e.target.setAttribute("disabled", true);
  }
  carousel.style.backgroundImage = `url(${images[index]})`;
});
