/**
 * Вам будет предоставлен массив объектов (ассоциативные массивы в PHP),
 * представляющих данные о разработчиках, которые зарегистрировались для участия в следующем совещании по кодированию,
 * которое вы организуете.

 Ваша задача - вернуть либо:

 значение true, если все разработчики в списке пишут код на одном языке; или значение
 false в противном случае.
 Например, учитывая следующий входной массив:
 var list1 = [
 { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
 { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
 { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
 ];
 ваша функция должна возвращать значение true.

 Записи:

 Строки, представляющие данный язык, всегда будут отформатированы одинаково (например, "JavaScript"
 всегда будет отформатирован в верхнем регистре "J" и "S"
 Входной массив всегда будет действительным и отформатированным, как в приведенном выше примере.
 * **/
const isSameLanguage=(list)=>list.every(({language})=>language===list[0].language)

console.log(isSameLanguage([
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
]))