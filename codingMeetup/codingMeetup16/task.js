/**
 * Вам будет предоставлен массив объектов, представляющих данные о разработчиках, которые зарегистрировались
 * для участия в следующем совещании по кодированию, которое вы организуете.
 * var list1 = [
 { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
 { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
 { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
 ]
 напишите функцию, которая

 1.добавляет свойство question к каждому объекту во входном массиве, где разработчик не предоставил соответствующие
 сведения (помечено нулевым значением). Значение свойства question должно быть следующей строкой:

 Здравствуйте, не могли бы вы, пожалуйста, указать свое <название объекта>.

 2.и возвращает только разработчикам недостающие детали:
 [
 { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
  question: 'Hi, could you please provide your firstName.' },
 { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
  }
 ]
 * **/
const askForMissingDetails = (list) =>
    list.filter(obj => Object.keys(obj).some(key => obj[key] === null &&
        (obj.question = `Hi, could you please provide your ${key}.`)))

console.log(askForMissingDetails([
    {firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java'},
    {firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null},
    {firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby'}
]))