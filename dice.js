'use strict';

module.exports = class Dice{
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
        this.upperbound = upperBound;
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
        return this.upperBound;
    }

    roll(){
        this.dotCount = Math.floor(Math.random()*this.upperBound)+1;
    }
    
    toString(){
        if(this.dotCount===0){
            return 'Not rolled yet'
        }
        return `${this.dotCount}`;
        // return this.dotCount === 0 ? 'Not rolled yet' : `${this.dotCount}`;
    }
}