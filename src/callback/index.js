function sum(a,b) {
    return a+b;
}
function calc(num1, num2, callback) {
    return callback(num1,num2);
}
console.log(calc(2,3,sum));


setTimeout(function () {
    console.log('Hola JS');
}, 2000);


function gretting(name){
    console.log(`Hola ${name}`);
}
setTimeout(gretting, 2000, 'Oscar');