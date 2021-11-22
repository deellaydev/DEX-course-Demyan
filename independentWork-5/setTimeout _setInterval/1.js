// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

// function printNumbers(from, to){
//   let temp = from;

//   let timer = setInterval(() => {
//     console.log(temp);
//     if (temp===to){
//       clearInterval(timer)
//     }
//     temp++;
//   }, 1000)
// }

function printNumbers(from, to){
  let temp = from;

  setTimeout(function timer() {
    console.log(temp);
    if (temp<to){
      setTimeout(timer, 1000)
    }
    temp++;
  }, 1000)
}

printNumbers(1, 10);