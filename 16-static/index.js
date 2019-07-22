//static
// instance = a method have create from class 
class Foo {
    static someMethod() { // foo.someMethod()
        console.log('some method .... !');
    }

    anotherMethod() {
        console.log('Another method ....!');
    }
}

const foo = new Foo();

console.log(foo);
