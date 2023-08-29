'use strict';

const Dice = require("./dice");

const diceA=new Dice();

console.log(diceA.dots);
console.log(diceA.minimum);
console.log(diceA.upperBound); //can't access private field => undefined
console.log(diceA.maximumValue);
diceA.minimum=-19
diceA.dotCount=20;
console.log(diceA.dots)
console.log(diceA.minimumValue)
diceA.maximumValue=123;