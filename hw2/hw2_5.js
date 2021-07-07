// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. 
var a=10;
var b=2;

alert(add(a,b));
alert(mult(a,b));
alert(div(a,b));
alert(subtr(a,b));

function add(x,y) {
			return (x+y);
}

function mult(x,y) {
			return (x*y);
}

function div(x,y) {
			return (x/y);
} 

function subtr(x,y) {
			return (x-y);
}

