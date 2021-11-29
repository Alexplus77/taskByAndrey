/**
 * Вам будет предоставлен массив объектов, представляющих данные о разработчиках, которые зарегистрировались
 * для участия в следующем совещании по веб-разработке, которое вы организуете. Будут представлены
 * три языка программирования: Python, Ruby и JavaScript.
 * /верно, если количество участников собрания, представляющих любой из трех языков программирования,
 * ** не более чем в 2 раза превышает количество разработчиков, представляющих любой из оставшихся языков программирования**;
 * /в противном случае ложно.
 * var list1 = [
 { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
 { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
 { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
 { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
 { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
 { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
 ];
 ваша функция должна возвращать значение false, так как число разработчиков JavaScript (3) в 3 раза превышает
 число разработчиков Python (1). Он не может быть более чем в 2 раза выше, чтобы считаться языковым разнообразием.
 * **/
const isLanguageDiverse = (list) => {
    const countLang = Object.values(list.reduce((acc, {language}) => {
        acc[language] = acc[language] + 1 || 1
        return acc
    }, {}))
    return Math.max(...countLang) / Math.min(...countLang) <= 2
    }



console.log(isLanguageDiverse([{
    "firstName": "Daniel",
    "lastName": "J.",
    "country": "Aruba",
    "continent": "Americas",
    "age": 42,
    "language": "Python"
}, {
    "firstName": "Kseniya",
    "lastName": "T.",
    "country": "Belarus",
    "continent": "Europe",
    "age": 22,
    "language": "Ruby"
}, {
    "firstName": "Sou",
    "lastName": "B.",
    "country": "Japan",
    "continent": "Asia",
    "age": 43,
    "language": "Ruby"
}, {
    "firstName": "Hanna",
    "lastName": "L.",
    "country": "Hungary",
    "continent": "Europe",
    "age": 95,
    "language": "JavaScript"
}, {
    "firstName": "Jayden",
    "lastName": "P.",
    "country": "Jamaica",
    "continent": "Americas",
    "age": 18,
    "language": "JavaScript"
}, {
    "firstName": "Joao",
    "lastName": "D.",
    "country": "Portugal",
    "continent": "Europe",
    "age": 25,
    "language": "JavaScript"
}]))

const word='silver laptop on brown wooden table'

console.log(word[0].toUpperCase()+word.slice(1))