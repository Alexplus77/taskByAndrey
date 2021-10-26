/**
 * Вам будет предоставлен массив объектов (ассоциативные массивы в PHP), представляющих данные о разработчиках,
 * которые зарегистрировались для участия в следующем совещании по кодированию, которое вы организуете.

 Ваша задача - вернуть массив, в котором каждый объект будет иметь новое свойство "приветствие" со
 следующим строковым значением:

 Привет <Имя здесь>, что тебе больше всего нравится в <языке здесь>?

 Например, учитывая следующий входной массив:
 var list1 = [
 { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
 { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
 { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
 ];
 ваша функция должна возвращать следующий массив:
 [
 { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
 { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
 { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  }
 ];
 * **/
const greetDevelopers = (list) => {
    return list.map(obj => ({
            ...obj, ...{greeting: `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`}
        })
    )
}
console.log(greetDevelopers([
    {firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java'},
    {firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python'},
    {firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby'}
]))