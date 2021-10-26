/**
 * Вам будет предоставлен массив объектов (ассоциативные массивы в PHP),
 * представляющих данные о разработчиках, которые зарегистрировались для участия
 * в следующем совещании по кодированию, которое вы организуете.
 * Список упорядочен в соответствии с тем, кто зарегистрировался первым.

 Ваша задача - вернуть одну из следующих строк:

 <Имя здесь>, <страна здесь> первого разработчика Python, который зарегистрировался;
 или Разработчиков Python не будет, если ни один разработчик Python не зарегистрировался.
 Например, учитывая следующий входной массив:
 var list1 = [
 { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
 { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
 { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
 ];
 ваша функция должна вернуть Викторию, Пуэрто-Рико.

 Записи:

 Входной массив всегда будет действительным и отформатированным,
 как в приведенном выше примере.
 * **/

const getFirstPython = (list) => {
    const findDev = list.filter(({language}) => language === 'Python')[0]
    return findDev ? `${findDev.firstName}, ${findDev.country}` : `There will be no Python developers`

}
console.log(getFirstPython([
    {firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript'},
    {
        firstName: 'Victoria',
        lastName: 'T.',
        country: 'Puerto Rico',
        continent: 'Americas',
        age: 30,
        language: 'Python'
    },
    {firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure'}
]))