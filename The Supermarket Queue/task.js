/** Задача The Supermarket Queue
 * В супермаркете есть очередь на кассы самообслуживания. Ваша задача - написать функцию для расчета общего времени,
 * необходимого всем клиентам для выезда!
 * input
 * 1. клиенты: массив положительных целых чисел, представляющих очередь. Каждое целое число представляет клиента,
 * и его значение - это количество времени, которое им требуется для проверки.
 * 2. n: положительное целое число, количество кассовых сборов.
 *
 * output
 * Функция должна возвращать целое число, общее требуемое время.
 *
 * Пример.
 * queueTime([5,3,4], 1)
 // should return 12
 // because when there is 1 till, the total time is just the sum of the times

 queueTime([10,2,3,3], 2)
 // should return 10
 // because here n=2 and the 2nd, 3rd, and 4th people in the
 // queue finish before the 1st person has finished.

 queueTime([2,3,10], 2)
 // should return 12

 Разъяснения
 Существует только ОДНА очередь, обслуживающая множество касс, и
 Порядок очереди НИКОГДА не меняется, и
 Первый человек в очереди (т.е. первый элемент в массиве / списке) переходит к кассе, как только она становится свободной.
 N.B. Вы должны предположить, что все тестовые входные данные будут действительными, как указано выше.

 P.S. Ситуацию в этом ката можно сравнить с идеей пула потоков, связанной с более компьютерными науками,
 в отношении одновременного запуска нескольких процессов: https://en.wikipedia.org/wiki/Thread_pool
 * **/
function queueTime(customers, n) {
    if (customers.length === 0) {
        return 0
    }
    const queue = customers.splice(0, n)
    while (customers.length > 0) {
        const idx = queue.indexOf(Math.min(...queue))
        queue[idx] += Number(customers.splice(0, 1))
    }
    return Math.max(...queue)
}

console.log(queueTime([2, 3, 10], 2))