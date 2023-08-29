'use strict';

module.exports = class Dice{
    #upperBound
    constructor(upperBound=6){
        if(!Number.isInteger(upperBound)){
            throw new Error('upper bound must be an integer')
        }
        if(upperBound>20){
            throw new Error('upper bound too big');
        }
        if(upperBound<2){
            throw new Error('upper bound too small')
        }
        this.#upperBound = upperBound;
        this.dotCount=0;
        this.minimum=1

    }
    get dots(){
        return this.dotCount;
    }
    get minimumValue(){
        return this.minimum;
    }
    get maximumValue(){
        return this.#upperBound;
    }
    //no setters in this class. This is just an example how to write a setter
    // set maximumValue(newValue){
    //     return this.#upperBound;
    // }

    roll(){
        this.dotCount = Math.floor(Math.random()*this.#upperBound)+1;
    }
    
    toString(){
        // if(this.dotCount===0){
        //     return 'Not rolled yet'
        // }
        // return `${this.dotCount}`;
        return this.dotCount === 0 ? 'Not rolled yet' : `${this.dotCount}`;
    }
}