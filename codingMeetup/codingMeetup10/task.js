/**
 * Учитывая следующий входной массив:
 * var list1 = [
 { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
 { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
 ];
 напишите функцию, которая добавляет свойство username к каждому объекту во входном массиве:
 [
 { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
    username: 'emilyn1990' },
 { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
    username: 'nore2000' }
 ]
 Значение свойства username составляется путем объединения:

 Имя в нижнем регистре;
 первая буква фамилии в нижнем регистре; и год
 рождения, который для целей этого ката рассчитывается просто путем вычитания возраста из
 текущего года. Пожалуйста, убедитесь, что ваша функция предоставляет правильный год рождения
 независимо от того, когда она будет выполнена, например, она также должна работать правильно
 для встречи, организованной через 10 лет. В приведенном выше примере предполагается,
 что функция будет запущена в 2020 году.
 Входной массив всегда будет действительным и отформатированным, как в приведенном выше примере.
 Возраст представлен числом, которое может быть любым положительным целым числом.
 Фамилия всегда будет состоять из одной заглавной буквы, за которой следует точка, например "N.".
 Порядок объектов в массиве должен быть сохранен, но порядок свойств в отдельных объектах не имеет значения.
 * **/
const addUsername = (list) =>  list.map(elem => (elem.username = (`${elem.firstName.toLowerCase()}${elem.lastName[0].toLowerCase()}${new Date().getFullYear() - elem.age}`),elem))


console.log(addUsername([
    {firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby'},
    {firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure'}
]))