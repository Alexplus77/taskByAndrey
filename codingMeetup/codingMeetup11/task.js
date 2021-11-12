/**
 * Вам будет предоставлена последовательность объектов, представляющих данные о разработчиках,
 * которые зарегистрировались для участия в следующем совещании по кодированию, которое вы организуете.

 Учитывая следующий входной массив:
 var list1 = [
 { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
 { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
 ];
 напишите функцию, которая возвращает средний возраст разработчиков (округленный до ближайшего целого числа).
 В приведенном выше примере ваша функция должна возвращать 50 (число).
 *
 * **/

const getAverageAge=(list)=>Math.round( list.reduce((acc, {age})=>(acc+age), 0)/list.length)

console.log(getAverageAge([
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
]))