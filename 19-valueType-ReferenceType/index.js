// value type - reference type
let a1 = 1;
let a2 = 1;
console.log(a1 === a2);

let b1 = { a: 1 }; //reference type - tham chieu!
let b2 = { a: 1 };
console.log(b1 === b2);

let a3 = a2;
a3 = 100;
console.log(a2);

let b3 = b1;
b1.a = 30000;

console.log(b3);
console.log(b1);

console.log('a3 == a2', a3 == a2);

function log(x) {
  x.b = 200;
}
log(b1);
console.log(b1); //warning