// method overriding

class CoffeeMachine {
    makeCoffee() {
        console.log('making coffee....!');
    }
}

class SpecialCoffeeMachine extends CoffeeMachine {
    makeCoffee(cb) {
        console.log('making coffee and do somthing .... overriding !');
        cb();
    }
}

const coffeeMachine  = new SpecialCoffeeMachine();
coffeeMachine.makeCoffee(function() {
    console.log('call Boss ...!')
});