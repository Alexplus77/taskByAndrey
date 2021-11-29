/**
 * Вам будет предоставлен массив объектов, представляющих данные о разработчиках, которые зарегистрировались
 * для участия в следующем совещании по кодированию, которое вы организуете.
 Ваша задача - вернуть объект, который включает в себя количество вариантов питания,
 выбранных разработчиками в форме регистрации на встречу..
 var list1 = [
 { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
    meal: 'vegetarian' },
 { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
    meal: 'standard' },
 { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
    meal: 'vegan' },
 { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
    meal: 'vegetarian' },
 ];
 ваша функция должна возвращать следующий объект (порядок свойств не имеет значения):
 { vegetarian: 2, standard: 1, vegan: 1 }

 * **/
const orderFood = (list) => list.reduce((acc, {meal}) => {acc[meal] = acc[meal] + 1 || 1;
    return acc
}, {})

console.log(orderFood([
    {
        firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
        meal: 'vegetarian'
    },
    {
        firstName: 'Anna',
        lastName: 'R.',
        country: 'Liechtenstein',
        continent: 'Europe',
        age: 52,
        language: 'JavaScript',
        meal: 'standard'
    },
    {
        firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
        meal: 'vegan'
    },
    {
        firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
        meal: 'vegetarian'
    },
]))