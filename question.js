/*What is the differences between SVG and PNG files?
    Mô tả những nhân tố của cấu trúc nhiều lớp và công dụng của chúng là gì.
    Sử dụng SASS và SCSS có điểm gì khác biệt so với CSS thông thường ?
    What is a Queue, how it is different from stack and how is it implemented?
    Why is the river rich(IQ question)?
    Sự khác nhau giữa document.ready() và document.load(). Sự khác nhau giữa $(document).ready() và $(windown).ready()
    Hàm anonymous là gì và khi nào nên sử dụng nó?
    What is the difference between anonymous and named functions?
    What is difference between analog and digital data???
    What is a recent technical challenge you experienced and how did you solve it?
    Can you give an example for destructuring an object or an array?
    Điểm khác biệt giữa “visibility:hidden” và “display:none”?

*/

function findMaxDiff(arr) {
  if (arr.length === 1 || arr.length === 0) {
    return 0;
  } else {
    var max = Math.abs(arr[1] - arr[0]); ///
    for (let i = 1; i < arr.length; i++) {
      if (Math.abs(arr[i] - arr[i + 1]) > max) {
        max = Math.abs(arr[i] - arr[i + 1]);
      }
    }
    return max;
  }
}

console.log(findMaxDiff([1, -10, 5, 18, -9, 34, 5]));

// Promise

const promise1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('hello 02');
    }, 3000);
  });
};

const main = async () => {
  console.log('hello 01');
  const value = await promise1();
  console.log(value);
  console.log('hello 03');
};

main();
