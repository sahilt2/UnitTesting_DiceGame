'use strict';

const Dice = require("./dice");

const diceA=new Dice();
const diceB=new Dice();

// console.log(diceA.dots);
// console.log(diceA.minimum);
// console.log(diceA.upperBound); //can't access private field => undefined
// console.log(diceA.maximumValue);
// diceA.minimum=-19
// diceA.dotCount=20;
// console.log(diceA.dots)
// console.log(diceA.minimumValue)
// diceA.maximumValue=123;

// console.log(diceA);
// console.log('DiceA: ',diceA);
// console.log('DiceB: '+diceB);
// console.log(diceA.toString());
console.log(`DiceA: ${diceA}, DiceB: ${diceB}`);
diceA.roll();
diceB.roll();
console.log(`DiceA: ${diceA}, DiceB: ${diceB}`);
if(diceA.dots>diceB.dots){
    console.log('A wins');
}
else if(diceB.dots>diceA.dots){
    console.log('B wins');
}
else{
    console.log('nobody wins');
}

const diceArray = [new Dice(), new Dice(), new Dice()];

diceArray.forEach(dice=>console.log(dice.toString()));
diceArray.forEach(dice=>dice.roll());
// diceArray.forEach(dice=>)