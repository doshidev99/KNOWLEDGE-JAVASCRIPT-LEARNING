// inheritance


class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log('eating ....');
    }
}

class Bird extends Animal {
    fly() {
        console.log('flying....');
    }
}

const bird = new Bird('luong');

bird.fly();

function Person(name) {
    this.name = name;
}

Person.prototype.eat = function () {
    console.log(` ${this.name} person eating ... !`);
  }
function Monster() {
    console.log(arguments);
    
    Person.apply(this, arguments);
}

Monster.prototype = new Person();

const monster = new Monster('ly');
console.log(monster.eat());
