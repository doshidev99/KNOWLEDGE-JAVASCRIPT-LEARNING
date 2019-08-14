// const fetch = require('node-fetch');

// const firstUrl = 'https://pokeapi.co/api/v2/pokemon/ditto/';
// const secondUrl = 'https://randomuser.me/api';

// const fetchAPI = url => {
//   return fetch(url);
// };

// const cvJson = res => {
//   return res.json();
// };
// const onDone = url => {
//   console.log(url);
// };

// const onErr = err => {
//   console.log(err);
// };

// fetchAPI(firstUrl)
//   .then(cvJson)
//   .then(onDone)
//   .then(() => {
//     return fetchAPI(secondUrl);
//   })
//   .then(cvJson)
//   .then(onDone)
//   .catch(onErr);

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

readFilePromise('txt.txt')
  .then(song => {
    console.log(song);
    return readFilePromise('txt2.txt');
  })
  .then(song => {
    console.log(song);
  })
  .catch(err => console.log(err));
