// .. rest

function a(x, ...rest) {
  console.log(x);
  console.log(rest);
  console.log(arguments); //arrLineObject
}

a(1, 2, 3, 4)

function concat(separator, ...strings) {
  return strings.join(separator);
}
console.log(concat('.', 'a', 'b', 'c'));