﻿// Урок2. Домашнее задание 1 
//  Дан код
//  Почему код даёт именно такие результаты?


var a = 1, b = 1, c, d;

c = ++a; alert(c);           // 2
// префиксная запись 
// a=a+1
// c=a
// alert (c)

d = b++; alert(d);           // 1
// постфиксная запись 
// d=b
// b=b+1
// d=b
// alert(d)

c = (2+ ++a); alert(c);      // 5
// вычисление внутри выражения:
//  a=a+1  			//3
//  c=a+2                       //5

d = (2+ b++); alert(d);      // 4 
// вычисление внутри выражения
// d=b+2			//3
// b=b+1
// d=b 				//4

alert(a);                    // 3
alert(b);                    // 3
