function Foo() {
  this.bar = 10;
}
Foo.prototype.bar = 42;
var foo = new Foo();
console.log('1', foo.bar);
console.log(foo.bar);

delete foo.bar;

console.log(foo.bar);


console.log('2', foo.bar);
