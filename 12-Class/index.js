class Person {
    constructor(name, level) {
        this.name = name,
        this.level = level
    }
    greet() {
        console.log(`${this.name} says hello.!`);
    }
}

const manager = new Person('david', 29);
manager.greet();