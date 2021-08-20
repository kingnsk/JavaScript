// Урок 5. Задание 2
// 2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, 
// например К – король, Ф – ферзь и т.п., 
//причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.


let chessPieces = ["R", "N", "B", "Q", "K", "B", "N", "R"];
let chessPawn = "P";
tab = document.getElementById("ChessTable");

for (var i = 0; i < 8; i++) {
    tab.rows[1].cells[i + 1].innerHTML = chessPieces[i];
    tab.rows[2].cells[i + 1].innerHTML = chessPawn;
    tab.rows[7].cells[i + 1].innerHTML = chessPawn;
    tab.rows[8].cells[i + 1].innerHTML = chessPieces[i];
} 