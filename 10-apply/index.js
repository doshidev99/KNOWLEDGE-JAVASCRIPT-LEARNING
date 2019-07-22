//apply
// call: function.call(this, param1, param2....)
// apply: function.apply(this, [param1, param2....])

function sum() {
    const numbers = Array.from(arguments);
    return numbers.reduce((a, b) => a + b, 0);
}

function average() {
    const x = sum.apply(null, arguments);
    return x / arguments.length;
}

console.log(average(1, 2, 3, 5));