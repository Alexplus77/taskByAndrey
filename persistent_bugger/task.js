/**Задача Persistent Bugger
 * Напишите функцию "постоянство", которая принимает положительное значение параметра num
 * и возвращает его мультипликативное постоянство, то есть количество раз, когда вы должны
 * умножать цифры в num, пока не достигнете одной цифры.
 * For example:
 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
 // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
 // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
 * **/

const persistent = (num) => {
    let count = 0
    while (num>9){
      num=String(num).split('').reduce((acc, digit) => acc * Number(digit), 1)
        count++
    }
    return count

}

console.log(persistent(39))
console.log(persistent(999))
