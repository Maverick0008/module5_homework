let arr = [1,168,null,null,4,9,'4',true,1,false,6,-6,undefined,-0,0,10];
let sumOdd = 0;
let sumPar = 0;
let str = 0;
let undefinedNum = 0;
let nul = 0;
let booleanType = 0;
let nullNum = 0;
for(i = 0; i < arr.length; i++) {
  let num = arr[i];
  if(typeof num === 'number' && num % 2 === 0 && num != 0) {
    sumPar++
  }else if (typeof num === 'number' && num % 2 != 0 && num !=0) {
    sumOdd++
  }else if (typeof num === 'string') {
    str++
  }else if (typeof num === 'undefined') {
      undefinedNum++
  }else if (typeof num === 'boolean') {
    booleanType++
  }else if (typeof num === 'object') {
    nullNum++
  }
  else if (num == 0) {
    nul++
  }
}
console.log(`Четных: ${sumPar}, Нечетных: ${sumOdd}, Строки: ${str}, Ноль: ${nul}, Неопределен: ${undefinedNum}, Логический тип: ${booleanType}, Null: ${nullNum}`)