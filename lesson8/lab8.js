
/*
5. Wrap all three functions in a module so that we have only one module variable in the global
name space.
*/
var bicycleFactory = function(){
    /*
    6. Make use of 'use strict' at the top of your module.
    */
    "use strict";

    /* 
    1. Create a function expression named createBicyclePrototye which returns an object literal
    with one property speed set to value 0 and two methods
    a. applyBrake that takes a parameter and decrement the current speed of the object by
    that given value.
    b. speedup that takes a parameter increment current speed by given value.
    */
    const createBicyclePrototye = function () {
        let speedVal = 0;
        
        const speedValue = function() {
            return speedVal;
        }
        const applyBrake = function(decVal){
            speedVal -= decVal;
        }
        const speedup = function(incVal){
            speedVal += incVal;
        }
        return {
            get speed(){return speedVal;},
            applyBrake: applyBrake,
            speedup: speedup,
            
        };
    }

    /*
    2. Create another function expression named createMountainBikeProtoype that take a
    prototype parameter and returns an object created using Object.create (prototype) with
    one additional property gear set to value 1 and one additional method setGear which takes a
    parameter and sets gear value for the object.
    */
    const createMountainBikeProtoype = function (proto) {
        let gearVal = 1;
        return Object.create(proto, {
            gearVal: {value: function() {return gearVal;}},
            setGear: {
                value: function (gear) {
                    gearVal = gear;
                }
            }
        });
    }

    /*
    3. Write third function expression named start that first make bicyclePrototype object using
    first function and then mountainBikePrototype object using second function, passing
    bicyclePrototype as argument.
    */
    const start = function () {
        let bicyclePrototype = createBicyclePrototye();
        let mountainBikePrototype = createMountainBikeProtoype(createBicyclePrototye());

        /*
        4. Now create some objects from both bicyclePrototype and mountainBikePrototype
        using Object.create() and play with it. (do some console.log)
        */

        // playing with original bicycle
        console.log(bicyclePrototype.speed);
        bicyclePrototype.applyBrake(5);
        console.log(bicyclePrototype.speed);
        bicyclePrototype.speedup(20);
        console.log(bicyclePrototype.speed);

        // playing with mountain bicyle        
        console.log(mountainBikePrototype.speed);
        mountainBikePrototype.applyBrake(5);
        console.log(mountainBikePrototype.speed);
        mountainBikePrototype.speedup(20);
        console.log(mountainBikePrototype.speed);
        mountainBikePrototype.setGear(2);
        console.log(mountainBikePrototype.gearVal());

        // playing with others ...
    }
    return {
        createBicyclePrototye : createBicyclePrototye,
        createMountainBikeProtoype : createMountainBikeProtoype,
        start : start
    }
}();

bicycleFactory.start();



/*
7. Now, try to achieve above functionality, this time using ES6 class construct.
*/
class BicyclePrototye {
    speedVal; 
    constructor(){
        this.speedVal = 0;
    }
    speedValue() {
        return this.speedVal;
    }
    applyBrake(decVal) {
        this.speedVal -= decVal;
    }
    speedup(incVal) {
        this.speedVal += incVal;
    }
}

class MountainBikeProtoype extends BicyclePrototye {
    gearVal;
    constructor(){
        super();
        this.gearVal = 1;
    }
    setGear(gear){
        this.gearVal = gear;
    }
}

/*
8. Finally, do it using constructor function.
*/

// playing with bicyle prototype
var bicyclePrototype = new BicyclePrototye();
bicyclePrototype.applyBrake(5);
console.log(bicyclePrototype.speedValue());

// playing with mountain bicyle
var mouttainBicycle = new MountainBikeProtoype();
mouttainBicycle.applyBrake(5);
console.log(mouttainBicycle.speedValue());