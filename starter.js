////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE

// Each math operation is the callback function: add, subtract, multiply, divide.

// Inline arrow function with implicit return
const add = (num1, num2) => num1 + num2;

// Regular arrow function
const subtract = (num1, num2) => {
  return num1 - num2;
}

// Function expression
const multiply = function(num1, num2){
  return num1 * num2;
}

//Function declaration
function divide(num1, num2){
  return num1 / num2;
}

// Now let's write the higher order function: calculator()
const calculator = (num1, num2, callback) => {
  if(+num1 && +num2){
    num1 = +num1;
    num2 = +num2;
    return callback(num1, num2);
  } else {
    console.log("Give me numbers!");
  }
}

console.log(calculator(5, 3, subtract));



///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE

const applyPercentDiscount = (product, discount) => {
  product.displyPrice = product.basePrice * (1 - discount);
}

const applyFlatRateDiscount = (product, discount) {
  product.displayPrice = product.basePrice - discount;
}


////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
