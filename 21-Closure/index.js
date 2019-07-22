function sum(a, b) { //garbage collector
  const c = a + b;
  return function () {
    console.log(c);
  };
}

console.log(sum(3, 5)());
