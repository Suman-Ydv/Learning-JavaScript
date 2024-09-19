let greetUser = function(){
    console.log('welcome');
}
greetUser()

let square = function(num){  // name an argument inside function(...)
    let result = num * num;
    return result;
}
let value = square(3); // let num =3, Square(num)
let valueTwo = square(10);  // it will pass 3 first then 10
console.log(value);
console.log(valueTwo);

// Challenge area
// convert fahrenhietToCelsius
// all a copule of times 
// print the converted values

let temfahrenheitToCelsiuspConvertor = function(temp){
    let celsius = (temp-32) * (5/9);
    return celsius;
}
let tempConvertor = temfahrenheitToCelsiuspConvertor(68);
let tempConvertorTwo = temfahrenheitToCelsiuspConvertor(32);
console.log(tempConvertor);
console.log(tempConvertor);
console.log(tempConvertorTwo);