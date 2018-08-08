/*Создать переменную num со значением 33721*/
let num = 33721;

/*Вывести в консоль произведение (умножение) цифр этого числа*/

let	output = [],
    sNumber = num.toString();

for (let i = 0, len = sNumber.length; i < len; i++) {
    output.push(+sNumber.charAt(i));
}

//Сложение 
for (var i = 0, sum = 0; i < output.length; sum += output[i++]);
//Умножение
for (var i = 0, mult = 0; i < output.length; mult *= output[i++]);


console.log(output);
console.log(`Сумма цифр числа ${num} равна ${sum}`);
console.log(`Произведение цифр числа ${num} равна ${mult}`);