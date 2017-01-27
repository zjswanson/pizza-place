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

// method for adding and removing pizza elements
Pizza.prototype.addToPizza =function(category,element) {
  this[category].push(element);
};

Pizza.prototype.removeFromPizza = function (category,element) {
  var elementIndex = this[category].indexOf(element);
  this[category].splice(elementIndex,1);
};
