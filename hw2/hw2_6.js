//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
//где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
//В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) 
//и вернуть полученное значение (использовать switch). 

var a = 6;
var b = 12;
var result = mathOperation(a,b,"add");
alert(result);
result = mathOperation(a,b,"mult");
alert(result);
result = mathOperation(a,b,"div");
alert(result);
result = mathOperation(a,b,"subtr");
alert(result);

function mathOperation(arg1, arg2, operation) {
	switch(operation) {
		case "add":
			return(arg1+arg2);
		case "mult":
			return(arg1*arg2);
		case "div":
			return(arg1-arg2);
		case "subtr":
			return(arg1/arg2);
	}
}
