// Создать функцию обёртку
// которая в начало каждой строки будет добавлять слово "Hello"


// function funcContainer(word){
//   return function funcChild(str){return word + str};
// }

// const funcChild = funcContainer("Hello ");


// console.log(funcChild("word"));
// console.log(funcChild("Ben"));

// Создать функцию, которая будет выполняться как func(1)(2)(3)

// const funcСurrying = el1 => (el2) => (el3) => el1 + el2 +el3;

// console.log("funcСurrying(1)(3)(4) ", funcСurrying(1)(3)(4));

// Создать функцию, которая будет выполняться
// при вызове func(1,2,3), func(1,2)(3),func(1)(2,3), func(1)(2)(3)
// и возвращать их сумму

function funcСurryingArgs(...elems){
  let sum = 0;
  if (elems.length >= 3){
    sum = elems.reduce((sum,item) => sum+=item,0);
    return sum;
  } else {
    return (...elems2) => funcСurryingArgs(...elems,...elems2); 
  }
}

console.log("funcСurryingArgs(1,3,4) ", funcСurryingArgs(1, 3, 4));
console.log("funcСurryingArgs(1,3)(4) ", funcСurryingArgs(1, 3)(4));
console.log("funcСurryingArgs(1)(3,4) ", funcСurryingArgs(1)(3, 4));
console.log("funcСurryingArgs(1)(3)(4) ", funcСurryingArgs(1)(3)(4));

// Создать функцию обёртку
// которая будет принимать количество аргументов
// и считать сумму передаваемых чисел , после того как кол-во аргументов
// будет равнятся передаваемому значению

const funcCurrent = funcСurryingCount(3);

function funcСurryingCount(num){
  return function funcCurrent(...elems){
    let sum = 0;
    if (elems.length>=num){
      for(let i = 0;i<elems.length;i++){
        sum+=elems[i];
        --num;
        if (num==0){
          break;
        }
      }
      return sum;
    } else {
      return (...elems2) => funcСurryingArgs(...elems,...elems2); 
    }
  }
}

console.log("funcCurrent(1,3,4) ", funcCurrent(1,3,4));
console.log("funcCurrent(1,3)(4) ", funcCurrent(1,3)(4));
console.log("funcCurrent(1)(3,4) ", funcCurrent(1)(3, 4));
console.log("funcCurrent(1)(3)(4) ", funcCurrent(1)(3)(4));

// const func1 = () => {
//   console.log(func2());
// };

// const func2 = () => {
//   console.trace();
//   return "func2!!!!!!!";
// };

// func1();
