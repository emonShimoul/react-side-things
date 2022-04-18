
function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function substract(num1, num2){
    return num1 - num2;
}

// reduce
const numbers = [34, 56, 78, 92];
let sum = 0;
for(const num of numbers){
    sum = sum + num;
}

const reducer = (previous, current) => previous + current;
numbers.reduce(reducer, 0);

const jinis = [
    {id: 1, name: 'Alta', price: 25},
    {id: 1, name: 'Nail Polish', price: 500},
    {id: 1, name: 'Face Mask', price: 255},
    {id: 1, name: 'Maskara', price: 590}
]
let total = 0;
for(const jin of jinis){
    total = total + jin.price;
}

const jinisReducer = (previous, current) => previous + current.price;
const jinisTotal = jinis.reduce(jinisReducer, 0);

export {add, multiply, substract};