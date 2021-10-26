/**Задача Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
 *
 *Вам будет предоставлен массив объектов (ассоциативные массивы в PHP),
 *  представляющих данные о разработчиках, которые зарегистрировались для участия
 *  в следующем совещании по кодированию, которое вы организуете.
 *  Ваша задача - вернуть:
 значение true, если зарегистрировался хотя бы один разработчик Ruby;
 или значение false, если разработчиков Ruby не будет.
 Например, учитывая следующий входной массив:
 var list1 = [
 { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
 { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
 { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
 ];
 ваша функция должна возвращать значение true.

 Записи:
 Входной массив всегда будет действительным и отформатированным,
 как в приведенном выше примере.
 * **/
const isRubyComing=(list)=>list.some(({language})=>language==='Ruby')

console.log(isRubyComing([
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
]))
