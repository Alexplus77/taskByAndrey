/**
 * Вам будет предоставлен массив объектов, представляющих данные о разработчиках,
 * которые зарегистрировались для участия в следующем совещании по кодированию, которое вы организуете.
 *
 * var list1 = [
 { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
 { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
 ];
 напишите функцию, которая при выполнении как findOddNames(список 1) возвращает только разработчикам, где,
 если вы добавите представление ASCII всех символов в их именах, результатом будет нечетное число:
 [
 { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
 ]
 Объяснение вышеизложенного:
 Сумма ASCII-кодов букв в "Aba" равна: 65 + 98 + 97 = 260, что является четным числом
 Сумма ASCII-кодов букв в "Abb" равна: 65 + 98 + 98 = 261, что является нечетным числом
 Сохраните порядок исходного списка.
 Возвращает пустой массив [], если нет разработчика с "нечетным" именем.
 * **/
const findOddNames = (list) =>
    list.filter(({firstName}) => [...firstName].reduce((acc, letter) => acc + letter.charCodeAt(0), 0) % 2 !== 0 && firstName)

console.log(findOddNames([
    {firstName: 'Abb', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python'},
    {firstName: 'Aba', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java'}
]))