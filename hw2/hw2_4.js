// Урок2. Домашнее задание 4
// Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
var a=0;
switch(a) {
	case 0:
	case 1:
		print_Numbers_from_A_to_15(a);
		break;
	case 2:
		print_Numbers_from_A_to_15(a);
		break;
	case 3:
		print_Numbers_from_A_to_15(a);
		break;
	case 4:
		print_Numbers_from_A_to_15(a);
		break;
	case 5:
		print_Numbers_from_A_to_15(a);
		break;
	case 6:
		print_Numbers_from_A_to_15(a);
		break;
	case 7:
		print_Numbers_from_A_to_15(a);
		break;
	case 8:
		print_Numbers_from_A_to_15(a);
		break;
	case 9:
		print_Numbers_from_A_to_15(a);
		break;
	case 10:
		print_Numbers_from_A_to_15(a);
		break;
	case 11:
		print_Numbers_from_A_to_15(a);
		break;
	case 12:
		print_Numbers_from_A_to_15(a);
		break;
	case 13:
		print_Numbers_from_A_to_15(a);
		break;
	case 14:
		print_Numbers_from_A_to_15(a);
		break;
	case 15:
		print_Numbers_from_A_to_15(a);
		break;

function print_Numbers_from_A_to_15(a) {
	var msg = "";
	for(var i=a; i<=15; i++) msg = msg + (i+" ");
	alert(msg);	
}  

}

