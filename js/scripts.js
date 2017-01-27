var currentPizza = new Pizza;
var myOrder = new Order;
var menu = new Menu;
var testpizza = new Pizza;
testpizza.sauce = ["pesto"];
testpizza.cheese= ["ricotta", "parmesean"];
testpizza.meat = ["sausage"];
testpizza.veggies = ["spinach", "olives"]

// defines the objects used by the page
function Pizza (){
  this.pizzaName = "";
  this.pizzaSize=[];
  this.sauce=[];
  this.cheese=[];
  this.meat=[];
  this.veggies=[];
  this.cost=0;
};

function Order (){
};

function Menu (){
  this.sizes = ["small","medium","large"];
  this.sauces = ["marinara","pesto","oil and garlic"];
  this.cheeses = ["mozzarella","ricotta","parmesean"];
  this.meats = ["sausage","pepperoni","grilled chicken","canadian bacon"]
  this.veggies = ["olives","bell pepper","hot pepper","spinach","pineapple","zucchini","mushroom"]
}
// method for adding and removing pizza elements
Pizza.prototype.addToPizza =function(category,element) {
  this[category].push(element);
};

Pizza.prototype.removeFromPizza = function (category,element) {
  var elementIndex = this[category].indexOf(element);
  this[category].splice(elementIndex,1);
};

Pizza.prototype.changePizzaSize = function (size) {
  this.pizzaSize = size;
};

// method to calculate costs:
// small: $10, includes 1 sauce, 1 cheese, 2 toppings(0-1 meat). Extra meat or cheese $1.5, extra sauce or topping $0.75.
// medium: $15, includes 1 sauce, 1 cheese, 2 toppings(0-1 meat). Extra meat or cheese $2, extra sauce or topping $1.
// large: $20, includes 1 sauce, 1 cheese, 2 toppings(0-1 meat). Extra meat or cheese $3, extra sauce or topping $1.50.

Pizza.prototype.pizzaCost = function () {
  var cost=0;
  var expensiveTopping;
  var cheapTopping;
  if (this.pizzaSize === "small") {
    cost = 10;
    expensiveTopping = 1.5;
    cheapTopping = 0.75;
  } else if (this.pizzaSize === "medium") {
    cost = 15;
    expensiveTopping = 2;
    cheapTopping = 1;
  } else if (this.pizzaSize === "large") {
    cost = 20;
    expensiveTopping = 3;
    cheapTopping = 1.50;
  }
  if (this.sauce.length > 1) {
    cost += (this.sauce.length-1)*cheapTopping;
  }
  if (this.cheese.length > 1) {
    cost += (this.cheese.length-1)*expensiveTopping;
  }
  if (this.meat.length > 1) {
    cost += (this.meat.length-1)*expensiveTopping;
  }
  if (this.veggies.length > 1) {
    if (this.meat.length>0){
      cost += (this.sauce.length-2)*cheapTopping;
    } else {
      cost += (this.sauce.length-1)*cheapTopping;
    }
  }
  this.cost = cost;
};

// method to populate menu in display
Menu.prototype.displayMenu = function () {
  for (i=0;i<Object.keys(this).length;i++){
    var category = Object.getOwnPropertyNames(this)[i];
    var menuSection = "";
    menuSection = menuSection + "<div class='" + category + "'><h4>" + category + "</h4><ul>";
    for (n=0;n<this[category].length;n++){
      menuSection = menuSection + "<li>" +this[category][n]+ "</li>"
    };
    menuSection = menuSection +"</ul>";
    $("#menu").append(menuSection);
  };
};

$(document).ready(function() {
  menu.displayMenu();
  // $("#menu li").click() {
  //   this.addClass(.onPizza);
  // }


});
