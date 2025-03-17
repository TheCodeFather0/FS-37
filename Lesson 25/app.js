// const isEven = (n) => (n % 2 === 0 ? true : false);
/*
    1. return yazacaqsiz
    2. polindrom => her iki terefden eyni oxunan
    ana,ata
    3. sozu tersine cevirmelis ve yoxlamalisiz sozun ozune beraberdirmi
    salam === malas
*/

const isPolindrom = (soz) => {
  let tersineSoz = "";
  for (let i = soz.length - 1; i >= 0; i--) {
    tersineSoz += soz[i];
  }

  if (tersineSoz === soz) {
    return true;
  } else {
    return false;
  }
};
isPolindrom("salam");

// // const isEven = (n) => n % 2 === 0;
// const a = isEven(10);
// console.log(a);

// // ternary operator

const b = (c) => c.lent;

const count = (w) => {
  let say = 0;
  for (let i = 0; i < w.length; i++) {
    say++;
  }
  return say;
};
const a = count("salam");
// console.log(a);
