// Урок 3. Задание 1
// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

var start_count = 0;
var end_count = 100;
var current_count = start_count;

if(start_count < 2) start_count = 2;

while (end_count >= start_count) {
      var current_count = 2;
      var simple = true;

      while (current_count <= end_count/2) 
        { 
          if (end_count % current_count == 0)
            {
              simple = false;
              break;
            }
          current_count++;
        }
      if (simple) 
        console.log(end_count);
      end_count--;
    }
