/* 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
	Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
   3. Товары в корзине хранятся в массиве. Задачи:
     a) Организовать такой массив для хранения товаров в корзине;
     b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/


var basket = [["Sprite",5],["Fanta",2],["Juice",1],["Water",1]];
/*var basket = [
	{product: "Sprite", count: 5},
	{product: "Fanta", count: 2},
	{product: "Juice", count: 1},
	{product: "Water", count: 1},	
		];
*/
var price = [["Sprite",90],["Fanta",85],["Juice",110],["Water",25]]

var summBasket = countBasketPrice(basket);

function countBasketPrice(items) {
	var summ = 0;
	var index = 0;
	for(let product of items) {
		switch (product[0]) {
			case "Sprite":
				index = price.findIndex(item=>item[0]=="Sprite")
				summ += price[index][1] * product[1];
				break;

			case "Fanta":
				index = price.findIndex(item=>item[0]=="Fanta")
				summ += price[index][1] * product[1];
				break;

			case "Juice":
				index = price.findIndex(item=>item[0]=="Juice")
				summ += price[index][1] * product[1];
				break;

			case "Water":
				index = price.findIndex(item=>item[0]=="Water")
				summ += price[index][1] * product[1];
				break;
		}

	}

}
