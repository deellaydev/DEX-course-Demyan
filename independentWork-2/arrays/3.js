// Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

arr[2](); // Выведет 3 элемента, а третьим элементом будет - function. В нашем случае анониманая

