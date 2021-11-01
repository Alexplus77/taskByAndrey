/**Задача  Higher-Order Functions Series - Will all continents be represented?
 * Вам будет предоставлена последовательность объектов (ассоциативные массивы в PHP),
 * представляющих данные о разработчиках, которые зарегистрировались для участия в следующем
 * совещании по кодированию, которое вы организуете.
 Ваша задача - вернуть:
 true, если все следующие континенты/географические зоны будут представлены по крайней
 мере одним разработчиком: "Африка", "Америка", "Азия", "Европа", "Океания".
 в противном случае false.
 Например, учитывая следующий входной массив:
 var list1 = [
 { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
 { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
 { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
 { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
 { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
 ];
 ваша функция должна возвращать значение true, так как есть по крайней мере один разработчик
 из требуемых 5 географических зон.
 * **/
const allContinents = (list) =>list.map(({continent})=>continent).includes('Africa'&& 'Americas'&&'Asia'&&'Europe'&&'Oceania')

//const allContinents = (list) =>[ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(elem=>(list.some(({continent})=>continent===elem)))

console.log(allContinents([
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' }
]))