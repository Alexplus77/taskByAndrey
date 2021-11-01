/**
 * Вам будет предоставлена последовательность объектов, представляющих данные о разработчиках,
 * которые зарегистрировались для участия в следующем совещании по кодированию, которое вы организуете.
 Ваша задача - вернуть последовательность, в которую входит разработчик, который является самым старым.
 В случае равенства, включите всех старших разработчиков того же возраста, перечисленных в том же порядке,
 в каком они появились в исходном входном массиве.
 Например, учитывая следующий входной массив:

 var list1 = [
 { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
 { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
 { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
 { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
 ];
 ваша функция должна возвращать следующий массив:
 [
 { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
 { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
 ]
 * **/
const findSenior = (list) =>  list.filter(({age}) => age === Math.max(...list.map(({age})=>age)))



console.log(findSenior([
    {firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP'},
    {firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python'},
    {firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python'},
    {firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP'},
]))

