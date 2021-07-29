var products = [
	{name : "Sprite", price : 90},
    {name : "Fanta", price : 85},
    {name : "Juice", price : 110},
    {name : "Water", price : 25},
]

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
        var sum = this.countBasketPrice();
        var basket = document.getElementById("basket");
        var item = document.createElement("ul");
        item.innerHTML = newProduct.name + " " + newProduct.price;
        basket.appendChild(item);
        var totalSum = document.getElementById("totalSum");
        totalSum.innerHTML = sum;
    }
}

function addToBasket(event) {
    const targetButton = event.target;
    let index = targetButton.id;
    basket.addProduct(products[index]);
}

function init() {

    var list = document.getElementById("productList");
    for (var i = 0; i < products.length; i++) {
        var item = document.createElement("li");
        var button = document.createElement("button");
        button.innerHTML = "Добавить в корзину";
        button.id = i;
        button.addEventListener("click", addToBasket)
        item.innerHTML = products[i].name + "&nbsp(" + products[i].price + ")&nbsp&nbsp&nbsp";
        list.appendChild(item);
        item.appendChild(button);
    }
	var totalSum = document.getElementById("totalSum");
	totalSum.innerText = 0;

}

window.onload = init;



