var mouse = {
    name:'mickey',
    sayHi: function() {
        console.log('hi, my name is', this.name);
    }
}

var cat = {
    name: 'tom'
};
 
var say = mouse.sayHi.bind(cat);
say();