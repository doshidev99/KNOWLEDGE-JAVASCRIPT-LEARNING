// Array-like object $ arguments

const names = ['ngan', 'trang', 'ha'];

for(let i = 0; i< names.length; i++) {
    console.log(names[i]);
}

const obj = { // array-like object
    0: 'x1',
    1: 'x2',
    2: 'x3',
    length: 3
}
for(let i = 0; i< obj.length; i++) {
    console.log(obj[i]);
}

function sum() {
   const arr = Array.from(arguments);
   return arr.reduce((a, b) => {
       return a + b;
   }, 0)
}

console.log(sum(1, 24, 5, 55, 663, 443, 22));
