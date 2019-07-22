function greeting(name, age) {
    console.log(`hi! ${name}. i'm ${age}.`);
}

function get() {
    console.log(`hi! ${this.name}. i'm ${this.age}.`);
}

const cat = {
    name: 'Tom',
    age: '100'
};

greeting.call(null, 'david', 20); //ts1 = this or this if using
get.call(cat);