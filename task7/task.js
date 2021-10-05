/**
 * digital_root(n) - это рекурсивная сумма всех цифр в числе.

 Учитывая n, возьмите сумму цифр n. Если это значение содержит более одной цифры, продолжайте уменьшать таким образом, пока не будет получено однозначное число. Входные данные будут представлять собой неотрицательное целое число.

 Примеры
 16 --> 1 + 6 = 7
 942 --> 9 + 4 + 2 = 15 --> 1 + 5 = 6
 132189 --> 1 + 3 + 2 + 1 + 8 + 9 = 24 --> 2 + 4 = 6
 493193 --> 4 + 9 + 3 + 1 + 9 + 3 = 29 --> 2 + 9 = 11 --> 1 + 1 = 2
 **/


function digital_root(n) {
    const arrDigits = n.toString().split('')

    if (arrDigits.length === 1) {
        return n
    } else {
        n = arrDigits.reduce((acc, digit) => {
            return acc + Number(digit)
        }, 0)
        return digital_root(n)
    }
}
//return (n-1)%9+1
console.log(digital_root(493193))
