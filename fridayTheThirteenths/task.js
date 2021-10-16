/** Задача Friday the 13ths
 * Создайте функцию FRIDAYTHIRTEENTHS, которая принимает начальный год и
 * конечный год (включительно) и возвращает все даты, когда 13-е число месяца выпадает на пятницу в заданном диапазоне лет.

 Возвращаемое значение должно быть строкой, в которой каждая дата разделена пробелом.
 Дата должна быть отформатирована как 9/13/2014, где месяцы не имеют начальных нулей и
 разделены косыми чертами.
 Если конечный год не указан, возвращайте только в пятницу тринадцатые числа в течение начального года.
 Examples
 fridayTheThirteenths(1999, 2000)
 // returns "8/13/1999 10/13/2000"

 fridayTheThirteenths(2014, 2015)
 // returns "6/13/2014 2/13/2015 3/13/2015 11/13/2015"

 fridayTheThirteenths(2000)
 // returns "10/13/2000"

 **/
function fridayTheThirteenths(start, end) {
    let arr = []
    let month = 0

    if (!end) {
        end = start
    }
    if (start % 4 === 0 || end % 4 === 0) {
        month--
    }
    while (new Date(start, month, 13) - new Date(end, 11, 13) < 0) {

        if (new Date(start, month, 13).toLocaleString('en-En', {weekday: 'long'}) === 'Friday') {
            arr.push(new Intl.DateTimeFormat('en-Us').format(new Date(start, month, 13)))
        }
        month++
    }
    return arr.join(' ')
}


console.log(fridayTheThirteenths(1905, 1915))