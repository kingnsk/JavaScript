﻿// Урок2. Домашнее задание 3
//Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
//
//    если a и b положительные, вывести их разность;
//    если а и b отрицательные, вывести их произведение;
//    если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом

var a = 15;
var b = -5;
if(a>=0 && b>=0) 
	alert("a = "+a+ " и b = "+b+" положительные, разность: " + (a-b)); 
if(a<0 &&  b<0) {
	alert("a = "+a+ " и b = "+b+" отрицательные, произведение: " + (a*b)); }
else 
	alert ("a = "+a+ " и b = "+b+" разного знака, сумма: " + (a+b));
       