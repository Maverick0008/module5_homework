/* Задание 1 

let value = +prompt("Enter the number: ")
if(Number.isNaN(value)){
    console.log('Упс, кажется вы ошиблись')
}else if (value %2 === 0) {
    console.log(value + ' является четным числом')
} else {
    console.log(value + ' является нечетным числом')
}

*/


/* Задание 2.

let x = prompt('Enter X');
if (typeof(+x) === 'number' && !isNaN(x)) {
  console.log('x is a number');
} else if (x ==='true' || x ==='false') {
  console.log('x is a boolean');
} else if (typeof(x)==='string'){
  console.log('x is a string')
}
else {
    console.log('x is not defined');
}
*/

/* Задание 3

let string = "Hello";
let reverse = string.split("").reverse().join("");
console.log(reverse);
*/


/* Задание 4.
let randomNum = (Math.floor(Math.random() * 100) + 1);
console.log(randomNum);
*/

/* Задание 5.
let arr = [1,5,6,3,1,2,3,5,78,9];
let arrLength = arr.map(function(item) {
  return item;
});
console.log(arrLength);
*/


/*  Задание 6.
let arr  = [1,1,1,1];
let arrEvery = arr.every((val,ind,arr) => val === arr[0])
console.log(arrEvery)
*/

/* Задание 7
let arr = [1,2,3,4,5,6,7,8,9,0,2,'bla bla bla'];
let sumOdd = 0;
let sumPar = 0;
let nul = 0;
let str = 0;
for(i = 0; i < arr.length; i++) {
  let num = arr[i];
  if(typeof num === 'number' && num % 2 === 0 && num != 0) {
    sumPar++
  }else if (typeof num === 'number' && num % 2 != 0 && num !=0) {
    sumOdd++
  }else if (typeof num === 'string') {
    str++
  }
  else if (num == 0) {
    nul++
  }
}
console.log(`Четных: ${sumPar}, Нечетных: ${sumOdd}, Строки: ${str}, Ноль: ${nul} `)
*/


/* Задание 8
let books = new Map([
  ["Набоков","Ада"],
  ["Ремарк", "Три товарища"],
  ["Драйзер", "Финансист"],
  ["Хэммингуэй","Старик и море"]
]);

for(let book of books) {
  console.log(`Автор(Key) - ${book[0]}, Книга(value) - ${book[1]}`)
}

*/