/**Задача  Count the number of JavaScript developers coming from Europe
 * Вам будет предоставлен массив объектов (хэши в ruby), представляющих данные о разработчиках,
 * которые зарегистрировались для участия в совещании по кодированию, которое вы организуете в первый раз.

 Ваша задача - вернуть количество разработчиков JavaScript, приезжающих из Европы.

 Например, учитывая следующий список:
 var list1 = [
 { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
 { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
 { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
 { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
 ];
 ваша функция должна возвращать число 1.

 Если нет разработчиков JavaScript из Европы, то ваша функция должна возвращать 0.

 Записи:

 Формат строк всегда будет европейским и JavaScript.
 Все данные всегда будут действительными и единообразными, как в приведенном выше примере.
 **/

function countDevelopers(list) {
   return list.reduce((acc, {continent, language})=>{
       continent==='Europe' && language==='JavaScript' ? acc.push(continent) :  null
       return acc
   },[]).length || 0
}

console.log(countDevelopers([
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
]))

console.log(countDevelopers([
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
    { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
]))