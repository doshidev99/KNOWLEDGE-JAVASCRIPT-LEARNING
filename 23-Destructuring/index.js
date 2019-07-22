//Destructuring

const obj = {
  a: 1,
  b: 2,
  c: 3
}

const { a, ...c } = obj;
console.log(a, c);

const checkModel = ({model, year} = {}) => {
  if(model) console.log('>>>');
    if(year) console.log('<<<');
    
}
console.log(checkModel({model: 'david', year: 1999}));
