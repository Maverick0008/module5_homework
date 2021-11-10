let value = +prompt("Enter the number: ")
if(Number.isNaN(value)){
    console.log('Упс, кажется вы ошиблись')
}else if (value %2 === 0) {
    console.log(value + ' является четным числом')
} else {
    console.log(value + ' является нечетным числом')
}
