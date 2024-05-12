/*const hummus = function(factor) {
const ingredient = function(amount, unit, name) {
let ingredientAmount = amount * factor;
if (ingredientAmount > 1) {
unit += "s";
}
console.log(`${ingredientAmount} ${unit} ${name}`);
};
ingredient(1, "can", "chickpeas");
ingredient(0.25, "cup", "tahini");
ingredient(0.25, "cup", "lemon juice");
ingredient(1, "clove", "garlic");
ingredient(2, "tablespoon", "olive oil");
ingredient(0.5, "teaspoon", "cumin");
};
hummus(2);*/
/*
function multiplier(factor) {
    return number => number * factor;
    }
let twice = multiplier(2);
console.log(twice(53));*/

let p = new Promise((resolve, reject) => {
    let isTrue = true;
    if (isTrue) {
      resolve('Success');
    } else {
      reject('Error');
    }
  });
  
  p
  .then(message => console.log(`Promise resolved: ${message}`))
  .catch(message => console.log(`Promise rejected: ${message}`));