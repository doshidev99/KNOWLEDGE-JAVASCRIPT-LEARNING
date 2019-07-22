// // ...spread

const a = [1, 2, 3, 5];
// const b = [0, ...a, 4];
// console.log(b);

const b = [0, ...a]
console.log(b);

function sum(...x) {
  console.log(typeof x);
}

sum(...a)

//rest gather elements into an array ! 

function reduce(...x) {
  console.log(x[0]);
  
  return x.reduce((a, b) => a + b, 0);
}

console.log(reduce(...b));

// spread advanced !
// spread an object 

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    e: 10
  }
}
console.log(obj1);

const obj2 = {};

for (let key in obj1) {
    obj2[key] = obj1[key]
}
obj2.d.e = 5;
//deep cloning 
console.log({ obj2, obj1 });


let obj3 = {
  ...obj1,
  z: 1000
}
console.log(obj3);

//shallow cloning