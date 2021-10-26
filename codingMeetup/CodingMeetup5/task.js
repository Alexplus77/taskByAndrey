/**
 * Вам будет предоставлен массив объектов (ассоциативные массивы в PHP),
 * представляющих данные о разработчиках, которые зарегистрировались для участия
 * в следующем совещании по кодированию, которое вы организуете.

 Ваша задача - вернуть объект (ассоциативный массив в PHP),
 который включает в себя количество каждого языка программирования, представленного на собрании.

 Например, учитывая следующий входной массив:
 var list1 = [
 { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
 { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
 { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
 { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
 ];
 ваша функция должна возвращать следующий объект (ассоциативный массив в PHP):
 { C: 2, JavaScript: 1, Ruby: 1 }
 Записи:
 Порядок языков в объекте не имеет значения.
 Значение счетчика должно быть допустимым числом.
 Входной массив всегда будет действительным и отформатированным, как в приведенном выше примере.
 * **/
const countLanguages = (list) => list.reduce((acc, {language}) => {
    acc[language] = acc[language] + 1 || 1
    return acc
}, {})


console.log(countLanguages([
    {firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C'},
    {firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript'},
    {firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby'},
    {firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C'},
]))