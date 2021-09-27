//Задача 1
let sum = 0
const tickets = (arr) => {
    const lastPay = arr.pop()
    sum = arr.reduce((elem, acc) => {
        return elem + acc
    }, 0)
    if (lastPay > sum) {
        return 'No. Сдачи нет.'
    } else {
        return 'Yes. Сдача есть.'
    }
}
console.log(tickets([25, 25, 50]))// Yes
console.log(tickets([25, 100]))// No
console.log(tickets([25, 25, 50, 50, 100]))// У меня "Yes".Почему у тебя "No"? Ведь он дает 100, а в кассе 150, 75 сдачи есть.

