/* 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….). */
for (let i = 20; i <= 30; i += 0.5) {
   console.log(i);
}


/* 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів. */
let exchangeRate = 27;
for (let n = 10; n <= 100; n += 10) {
   console.log(exchangeRate * n)
}


/* 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N. */
const n = +prompt('Введіть число');
for (let i = 1; Math.pow(i, 2) <= n; i++) {
   console.log(i);
}


/* 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе). */
const num = +prompt('Введіть число');
if (Number.isInteger(num) && (num > 1)) {
   let i = 1, primeNumber = true;
   while (i < num) {
      if (num % i === 0 && i != num && i != 1) {
         primeNumber = false;
         break;
      }
      i++;
   }
   let answer = (primeNumber === true) ? `${num} - Просте число` : `${num} - Не просте число`;
   alert(answer);
} else {

}


/* 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).*/
const anyNum = +prompt('Введіть число');
let isTrue = false;
if (Number.isInteger(anyNum) && (anyNum > 0)) {
   for (let i = 0, exp = 1; exp <= anyNum; i++) {
      exp = Math.pow(3, i);
      if (exp === anyNum) {
         isTrue = true;
         break;
      }
   }
   let answer = (isTrue === true) ? `${anyNum} можна отримати шляхом зведення 3 у ступінь.` : `${anyNum} неможливо отримати шляхом зведення 3 у ступінь.`;
   alert(answer);
} else {

}