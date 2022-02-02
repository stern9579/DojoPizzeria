function pizzaOven(crust, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven ("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
console.log(pizza1);

var pizza2 = pizzaOven ("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(pizza2);

// var pizza = {
//     crustType: ["deep dish",]
//     sauceType:
//     cheeses:
//     toppings:
// }


var crust = ["hand tossed", "deep dish", "thick"];
var sauceType= ["presto", "marinara", "white", "bbq"];
var cheeses= ["mozzarella", "goat", "vegan", "mixed", "moz pearls"];
var toppings= ["pepparoni", "italian sausage", "green peppers", "onions", "pepperoncini", "chicken", "none"];


function randomPizza() {
    var newPizza = {};

    newPizza.crust = crust[Math.floor(Math.random()*crust.length)];
    newPizza.sauceType = sauceType[Math.floor(Math.random()*crust.length)];
    newPizza.cheeses = cheeses[Math.floor(Math.random()*crust.length)];
    newPizza.toppings = toppings[Math.floor(Math.random()*crust.length)];
    
    newPizza.details= function() {
        console.log("crust:" + newPizza.crust);
        console.log("sauceType:" + newPizza.sauceType);
        console.log("cheese:" + newPizza.cheeses);
        console.log("toppings:" + newPizza.toppings);
    }
    return newPizza;
}

var pizza1 = randomPizza();

pizza1.details(); 

var order17 = randomPizza();

order17.details();