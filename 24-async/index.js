const sum = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello setTimeOut');
    }, 3000);
  });
};

const main = async () => {
  console.log('hello 01');
  const getSum = await sum();
  console.log(getSum);
  console.log('hello end');
};

main();
