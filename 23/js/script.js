"use strict"

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armour: 100,
    SayHello: function() {
        console.log("hello");
    } 
};

const john = Object.create(soldier); // джон прототипно наследуеться от солдата

// const john = {
//     health: 100
// };

// john.__proto__ = soldier; //старый прототип

// Object.setPrototypeOf(john, soldier); //новый метод прототипа

// console.log(john.armour);
john.SayHello();