/**
 * Array.prototype.length даст вам количество элементов верхнего уровня в массиве.
 Ваша задача - создать функцию deepCount, которая возвращает количество ВСЕХ элементов
 в массиве, включая любые из массивов внутреннего уровня.
 Например:
 deepCount([1, 2, 3]);
 //>>>>> 3
 deepCount(["x", "y", ["z"]]);
 //>>>>> 4
 deepCount([1, 2, [3, 4, [5]]]);
 //>>>>> 7
 Входными данными всегда будет массив.
 * **/
const deepCount = (a) => {
        let count = 0
        a.forEach(elem => !Array.isArray(elem) ? count++ : count += 1+deepCount(elem))
        return count
    }
;
console.log(deepCount(["x", "y", ["z"]]))
console.log(deepCount([1, 2, [3, 4, [5]]]))