/**
 * Вам будет предоставлен массив объектов, представляющих данные о разработчиках,
 * которые зарегистрировались для участия в следующем совещании по кодированию, которое вы организуете.
 * var list1 = [
 { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
 { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
 { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
 { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
 ];
 напишите функцию, которая при выполнении как findAdmin(list1, 'JavaScript') возвращает только разработчиков JavaScript,
 которые являются администраторами GitHub:
 [
 { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
 { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
 ]
 /Первоначальный порядок должен быть сохранен.
 /Если на данном языке нет разработчиков-администраторов GitHub, то верните пустой массив
 /Входной массив всегда будет действительным и отформатированным, как в приведенном выше примере.
 /Строки, представляющие, является ли кто-то администратором GitHub, всегда будут отформатированы
 как "да" и "нет" (все в нижнем регистре).
 /Строки, представляющие данный язык, всегда будут отформатированы одинаково (например, "JavaScript" всегда
 будет отформатирован с прописными буквами "J" и "S".
 * **/

const findAdmin=(list, lang)=>list.filter(({language, githubAdmin})=>language===lang && githubAdmin==='yes')

console.log(findAdmin([
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
], 'JavaScript'))