/**Задача Higher-Order Functions Series - Is the meetup age-diverse?
 * Вам будет предоставлен массив объектов (ассоциативные массивы в PHP), представляющих данные о разработчиках,
 * которые зарегистрировались для участия в следующем совещании по кодированию, которое вы организуете.
 Ваша задача - вернуться:

 true, если зарегистрировались разработчики из всех следующих возрастных групп: подростки, двадцатые, тридцатые,
 сороковые, пятидесятые, шестидесятые, семидесятые, восьмидесятые, девяностые, столетние (моложе не менее 100 лет).
 в противном случае false.
 Например, учитывая следующий входной массив:
 var list1 = [
 { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
 { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
 { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
 { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
 { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
 { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
 { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
 { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
 { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
 { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
 ];
 ваша функция должна возвращать значение true, так как есть по крайней мере один разработчик из каждой возрастной группы.
 Записи:
 Входной массив всегда будет действительным и отформатированным, как в приведенном выше примере.
 Возраст представлен числом, которое может быть любым положительным целым числом до 199.
 * **/
const isAgeDiverse = (list) => [...new Set(list.reduce((acc, {age})=>{
    age>=10 && age<100 && acc.push(Math.floor(age/10))
    age>=100 && acc.push(10)
    return acc
},[]))].length===10


console.log(isAgeDiverse([
    {firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age:9, language: 'Python'},
    {firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python'},
    {firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript'},
    {firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby'},
    {firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 10, language: 'Ruby'},
    {firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby'},
    {firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C'},
    {firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C'},
    {firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python'},
    {firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby'},
    {firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP'},
   {firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript'},
   // {firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 199, language: 'JavaScript'}
]))