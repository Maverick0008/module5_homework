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