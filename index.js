//Example output 1:
//<<Please enter first topping: skittles
// <<Please enter second topping: lettuce
// <<Please enter third topping: tomato
// >>Your toppings cost $1.55
// >>You saved $0.15!
// >>Your total is $1.40

//Example Output 2:
// <<Please enter first topping: sand
// <<Please enter second topping: lettuce
// <<Please enter third topping: sprinkles
// >>Your toppings cost $0.30


//declaring variables
let yogurt = 1;
let tomatoes = 0.50;
let lettuce = 0.30;
let skittles = 0.75;
let total = 0;

console.log("Topping choices are: yogurt, tomatoes, lettuce, or skittles.");

//getting toppings from user and adding those values into total
let firsttopping = (prompt('Please enter first topping:'));
  if (firsttopping == 'yogurt'){
    total += yogurt;
  }
  else if (firsttopping == 'tomatoes'){
    total += tomatoes;
  }  
  else if (firsttopping == 'lettuce'){
    total += lettuce;
  }
  else if (firsttopping == 'skittles'){
    total += skittles;
  }



let secondtopping = (prompt('Please enter second topping:'));
  if (secondtopping == 'yogurt'){
    total += yogurt;
  }
  else if (secondtopping == 'tomatoes'){
    total += tomatoes;
  }  
  else if (secondtopping == 'lettuce'){
    total += lettuce;
  }
  else if (secondtopping == 'skittles'){
    total += skittles;
  }




let thirdtopping = (prompt('Please enter third topping:'));
  if (thirdtopping == 'yogurt'){
    total += yogurt;
  }
  else if (thirdtopping == 'tomatoes'){
    total += tomatoes;
  }  
  else if (thirdtopping == 'lettuce'){
    total += lettuce;
  }
  else if (thirdtopping == 'skittles'){
    total += skittles;
  }

//toppings cost, savings amount, and total cost outputted
console.log('Your toppings cost $' + total.toFixed(2));


if (total >= 1){
  let savings = total*.1;
  console.log('You saved $' + savings.toFixed(2) + '!');
  total = total*.9;
  console.log('Your total is $' + total.toFixed(2));
}


