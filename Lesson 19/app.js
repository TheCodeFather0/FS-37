/*
    Data Types

    1. number
    2. string
    3. boolean
    4. null
    5. undefined
    6. object
*/

// numbers

// let a = 5.9 / 0;
// NaN -> Not a Number
// console.log(typeof a);

// const car = "null"

// '' -> quote
// "" -> double quote
// `` -> backtick

// Fatima's car is vaz 2107
// Fatime deyirki: "Eli kod yaza bilmir!"

// const ad = "Eli"
// const mesaj = "Fatime kod yaza bilmir!"

// const cumle = ad + ' deyirki: ' + mesaj;
// console.log(cumle);




// const name = "Ramin";
// const surname = "Mammadzada";
// const age = 67;
// const job = "Jet Academy";
// const department = "Muellim";

// Salam! Men Ramin Mammadzada,67 yasim var.Jet Academy-de Muellim kimi calisiram

// const cumle = 'Salam! Men ' + name + ' ' + surname + ', ' + age + ' yasim var.' + job + '-de ' + department + ' kimi calisiram';

// const cumle2 = `Salam! Men ${name} ${surname}, ${age} yasim var. ${job}-de ${department} kimi calisiram`;

// alert(cumle2);






// let name = "Dan";

// console.log(`Eli ${name}-nin "dostudur.Amma '${name} bunu bilmir'"`);

// Eli Dan-nin "dostudur.Amma 'Dan bunu bilmir'" * 4



// console.log('a' > 'A');

// const isAgree = confirm("axsam gelirsen?")
// console.log(isAgree);


// const firstName = prompt("salam,adivi yaz!")
// console.log(firstName);





// let a;
// console.log(a);


/*
    Number return 0:
        "", " ", null, false
    Number return 1:
        true
    Number return NaN:
        sozler ve cumleler,undefined
*/


/*
    truthy
    butun reqemler,1,true

    falsy (şikəst)
    null, false, 0, NaN, undefined, ""
*/
// let a = Boolean(" ")
// console.log(a);



// istifadeciden pulu sorus,ve ona masinlar teklif ele
// eger pulu 6000dirse ona 07 sat
// yox 15 mindirse - 4 fara sat

// const money =  Number(prompt("yetim neqede pulun var?"));


const name = prompt("adinizi yazin!");
const gender = prompt("kisisen yoxsa qadin?! (k/q)");

if(gender === 'k') {
    console.log(`salam cenab ${name}`);
}else if(gender === 'q') {
    console.log(`salam xanim ${name}`);
}else {
    console.log(`basin gedmesin ${name}!`);
}






