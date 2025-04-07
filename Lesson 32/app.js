// const p = document.getElementById("title");
// // p.innerText = "<i>SALAM DOM!</i>";
// p.innerHTML = "<i>SALAM DOM!</i> <br/>";
// p.innerHTML += "<b style='color:green'>aleykum!</b>";

// p.style.color = "red";

// const pTags = document.getElementsByClassName("title");

// for (let element of pTags) {
//   element.style.backgroundColor = "green";
//   element.style.color = "#fff";
// }

// id-ne gore elementi tutub arxa fon rengini qara,oz rengini ag edin!

// document.body.style.backgroundColor = "red";

// const qutular = document.getElementsByClassName("box");

// for (let qutu of qutular) {
//   const reng = qutu.innerText;

//   qutu.onclick = () => {
//     document.body.style.backgroundColor = reng;
//   };
// }

let mode = "light";
const modeChangerBtn = document.getElementById("modeChangerBtn");

const modeChanger = (mode) => {
  if (mode === "light") {
    document.body.style.color = "#333";
    document.body.style.backgroundColor = "#fff";
    modeChangerBtn.innerText = "🌙";
  } else if (mode === "dark") {
    document.body.style.color = "#fff";
    document.body.style.backgroundColor = "#333";
    modeChangerBtn.innerText = "🌞";
  }
};
modeChanger(mode);

modeChangerBtn.onclick = () => {
  if (mode === "light") {
    mode = "dark";
  } else if (mode === "dark") {
    mode = "light";
  }
  modeChanger(mode);
};

const data = [
  {
    id: "5t4yghu4322",
    title: "İnteraktiv Öyrənmə",
    description:
      "Uşaqların marağını artıran interaktiv dərslərimiz, praktiki layihələr və oyunlar vasitəsilə öyrənmə prosesini əyləncəli və dinamik hala gətirir, bilikləri əyləncə ilə birləşdirir.",
  },
  {
    id: "f3g4hjkl23",
    title: "Təcrübəli Müəllimlər",
    description:
      "Müxtəlif sahələrdə geniş təcrübəyə malik peşəkar müəllimlərimiz, uşaqlara müasir texnologiyalarla tanış olma imkanı təqdim edərək, öyrənmələrini daha dərin və faydalı edir.",
  },
  {
    id: "u2ui3j2nkwm",
    title: "Fərdi Yanaşma",
    description:
      "Hər bir uşağın öyrənmə sürətinə uyğun fərdi yanaşma tətbiq edərək, onların unikal bacarıq və maraqlarını inkişaf etdirmək üçün xüsusi proqramlar hazırlayırıq.",
  },
  {
    id: "kjgf3w",
    title: "Gələcək Uğurlar",
    description:
      "Proqramlarımız, uşaqların problem həll etmə, əməkdaşlıq və yaradıcılıq bacarıqlarını artıraraq, gələcək karyeraları üçün güclü bir təməl yaradır və onlara uğur qazanmaq üçün lazım olan resursları təqdim edir.",
  },
];
const parent = document.getElementById("cardContainer");
const addNewBtn = document.getElementById("addNewBtn");

const showData = () => {
  parent.innerHTML = "";
  data.forEach((elem, index) => {
    parent.innerHTML += `<div class="card">
              <div class="count">${index + 1}</div>
              <div class="content">
                <h2>${elem.title}</h2>
                <p>${elem.description}</p>
              </div>
            </div>`;
  });
};

showData();

addNewBtn.onclick = () => {
  const title = prompt("enter title");
  const desciprtion = prompt("enter desciprtion");

  const newData = {
    id: data.length + "qweryuio",
    title: title,
    description: desciprtion,
  };
  data.push(newData);
  showData();
};
