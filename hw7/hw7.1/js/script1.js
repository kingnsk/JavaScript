var products = [
    {name : "Sprite", price : 90},
    {name : "Fanta", price : 85},
    {name : "Juice", price : 110},
    {name : "Water", price : 25},
]

var deletedPrefix = "deleted";

var basket = {
    goods: [
    ],
    countBasketPrice: function() {
        var price = 0;
        for (let good of this.goods)
        {
            price += good.price;
        }
        return price;
    },
    addProduct: function(newProduct) {                     
        this.goods.push(newProduct);
    },
    removeProduct(index) {
        if (index == 0) {
            this.goods.shift();
        } else {
            this.goods.splice(index, index);
        }
    },
    updateBasket: function() {
        var basket =document.getElementById("basket");
        basket.innerHTML = '';
        for (var i = 0; i < this.goods.length; i++) {
            var item = document.createElement("ul");
            item.innerHTML = this.goods[i].name + " " + this.goods[i].price + " ";
            var button = document.createElement("button");
            button.innerHTML = "-";
            button.id = deletedPrefix + i;
            button.addEventListener("click", deleteFromBasket)
            item.appendChild(button);
            basket.appendChild(item);
        }
        var sum = this.countBasketPrice();
        var totalSum = document.getElementById("totalSum");
        totalSum.innerHTML = sum;
    }



}

function addToBasket(event) {
    const targetButton = event.target;
    let index = targetButton.id;
    basket.addProduct(products[index]);
    basket.updateBasket();
}

function deleteFromBasket(event) {
    const targetButton = event.target;
    const li = targetButton.parentNode;
    const ul = li.parentNode;
    ul.removeChild(li);
    let indexStr = targetButton.id;
    indexStr = indexStr.slice(deletedPrefix.length);
    let index = parseInt(indexStr);
    basket.removeProduct(index);
    basket.updateBasket();
}



function init() {

    var list = document.getElementById("productList");
    for (var i = 0; i < products.length; i++) {
        var item = document.createElement("li");
        var buttonAdd = document.createElement("button");
        buttonAdd.innerHTML = "+";
	buttonAdd.style.width = "20px";
	buttonAdd.style.height = "20px";
        buttonAdd.id = i;
        buttonAdd.addEventListener("click", addToBasket)

        item.innerHTML = products[i].name + "&nbsp(" + products[i].price + ")&nbsp&nbsp&nbsp";
        list.appendChild(item);
        item.appendChild(buttonAdd);
	
    }
	var totalSum = document.getElementById("totalSum");
	totalSum.innerText = 0;

}

window.onload = init;



