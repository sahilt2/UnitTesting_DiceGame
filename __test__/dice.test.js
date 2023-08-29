'use strict'

const Dice = require('../dice');

describe('Create a dice with no upper bound given',()=>{
    const dice = new Dice();

    test('maximumValue is 6',()=>{
        expect(dice.maximumValue).toBe(6);
    });

    test('minimumValue is 1',()=>{
        expect(dice.minimumValue).toBe(1);
    });

    test('dots is zero', ()=>{
        expect(dice.dots).toBe(0);
    })
});

describe('Create a dice with upper bounds 2-20',()=>{
    const testValues = new Array(19).fill(2).map((value,ind)=>[value+ind]);

    test.each(testValues)('test upper bound %s', upperbound=>{
        const dice = new Dice(upperbound);
        expect(dice.dots).toBe(0)
        expect(dice.minimumValue).toBe(1);
        expect(dice.maximumValue).toBe(upperbound);
    })
});

describe('Test the exceptions',()=>{
    const testValues = [
        [0 , `upper bound too small`],
        [1 , `upper bound too small`],
        [-1 , `upper bound too small`],
        [-10 , `upper bound too small`],
        [21 , `upper bound too big`],
        ['a' , `upper bound must be an integer`],
        [2.5 , `upper bound must be an integer`]
    ];

    test.each(testValues)('upper bound %s throws an exception %s',(ub,text)=>{
        expect(()=>new Dice(ub)).toThrow(text);
    });
});

describe('Test the dice roll',()=>{
    
    describe('create dice with no upper bound given',()=>{
        const dice = new Dice();
        test('rolls dice and updates dot counts between 1 and 6',()=>{
            dice.roll();
            expect(dice.dots).toBeGreaterThanOrEqual(1);
            expect(dice.dots).toBeLessThanOrEqual(6);
    });

    });
    describe('create dice with upper bound 20',()=>{
        const dice = new Dice(20);
        test('rolls dice and updates dot counts between 1 and upper bound 20',()=>{
            dice.roll();
            expect(dice.dots).toBeGreaterThanOrEqual(1);
            expect(dice.dots).toBeLessThanOrEqual(20);
    });

    });
    describe('create dice with upper bound 2-20',()=>{
        const testValues = new Array(19).fill(2).map((value,ind)=>[value+ind]);
        test.each(testValues)('test upper bound %s',upperbound=>{
            const dice = new Dice(upperbound)
            dice.roll();
            expect(dice.dots).toBeGreaterThanOrEqual(1);
            expect(dice.dots).toBeLessThanOrEqual(upperbound);
        
        })
    })

});

describe('Testing toString',()=>{
    let dice;

    beforeEach(()=>{
        dice = new Dice();
    });

    test('Dice rolled',()=>{
        dice.roll()
        expect(dice.toString()).toBe(`${dice.dots}`);
    });

    test('Dice not rolled',()=>{
        expect(dice.toString()).toBe('Not rolled yet')
    });

});