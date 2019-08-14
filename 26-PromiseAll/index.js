const fs = require('fs');

const readFilePromise = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

Promise.all([readFilePromise('txt.txt'), readFilePromise('txt2.txt')])
  .then(value => console.log(value))
  .catch(err => console.log(err));
