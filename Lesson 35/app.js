// event hadise
/*
    1. click
    2. mouseenter
    3. mouseleave
    4. mouseover
    5. mouseout
    6. mousedown
    7. mouseup
    8. dblclick
    9. contextmenu
    10.keydown
    11.keyup
    12.whel
    13.input
    14.change
    15.submit


*/
// const btn = document.querySelector("#btn");

// btn.onclick = (e) => {
//   if (e.target.innerText.toLowerCase() === "show") {
//     e.target.innerText = "hide";
//     e.target.style.background = "red";
//   } else {
//     e.target.innerText = "show";
//     e.target.style.background = "green";
//   }
// };

const box = document.querySelector("#box");

// box.onmouseover = (e) => {
//   e.target.style.background = "green";
//   console.log("elementin uzerindeyik");
// };

// box.onmouseout = (e) => {
//   e.target.style.background = "red";
//   console.log("elementin uzerinde deyilik");
// };

// box.onmouseup = () => {
//   console.log("mouse up");
// };

// box.onmousedown = () => {
//   console.log("mosuse down");
// };

// box.ondblclick = () => {
//   console.log("double click");
// };

// document.body.oncontextmenu = (e) => {
//   e.preventDefault();
//   alert("senin orda ne isin var?");
// };

// const userError = (e) => {
//   e.preventDefault();
//   alert("orda ne isin var?");
// };

// const closeInspect = (e) => {
//   if (e.key === "F12") {
//     userError(e);
//   } else if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") {
//     userError(e);
//   } else if (e.ctrlKey && e.key.toLowerCase() === "u") {
//     userError(e);
//   }
// };
// let a = "";
// document.onkeyup = (e) => {
//   closeInspect(e);
//   a += e.key;
// };
// document.onkeydown = (e) => closeInspect(e);
// document.oncontextmenu = (e) => e.preventDefault();
// // document.onwheel = (e) => alert("tekerle isin olmasin!");
// document.onmousemove = (e) => {
//   console.log(e.clientX);
// };
// box.onclick = () => {
//   console.log(a);
// };

// box.onmousedown = (event) => {
//   document.onmousemove = (e) => {
//     event.target.style.left = e.clientX + "px";
//     event.target.style.top = e.clientY + "px";
//     event.target.style.transform = "translate(-50%, -50%)";
//   };
// };

// box.onmouseup = (event) => {
//   document.onmousemove = (e) => e.preventDefault();
// };

const nameInp = document.querySelector("#nameInp");
const surNameInp = document.querySelector("#surNameInp");
const userform = document.querySelector("#userform");

const userData = {
  name: "",
  surname: "",
};

nameInp.addEventListener("input", (e) => {
  userData.name = e.target.value;
});

surNameInp.addEventListener("input", (e) => {
  userData.surname = e.target.value;
});

userform.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(userData);
  nameInp.value = "";
  nameInp.focus();
  surNameInp.value = "";
});
