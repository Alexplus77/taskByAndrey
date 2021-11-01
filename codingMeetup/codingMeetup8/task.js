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
const allContinents=(list)=>{
    const continentList=['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    list.map(({continent})=> continentList.splice(continentList.indexOf(continent),1))
    console.log(continentList)
    return continentList.length===0
}
console.log(allContinents([{"firstName":"Nareh","lastName":"Q.","country":"Armenia","continent":"Europe","age":30,"language":"Clojure"},
    {"firstName":"Mariami","lastName":"G.","country":"Georgia","continent":"Europe","age":29,"language":"Python"},
    {"firstName":"Rimas","lastName":"C.","country":"Jordan","continent":"Asia","age":44,"language":"Java"},
    {"firstName":"George","lastName":"B.","country":"England","continent":"Europe","age":21,"language":"C"},
    {"firstName":"Krishna","lastName":"G.","country":"Nepal","continent":"Asia","age":22,"language":"Java"},
    {"firstName":"Maria","lastName":"I.","country":"Greece","continent":"Europe","age":32,"language":"C"},
    {"firstName":"Manuel","lastName":"C.","country":"Equatorial Guinea","continent":"Africa","age":22,"language":"Ruby"},
    {"firstName":"Jing","lastName":"X.","country":"China","continent":"Asia","age":39,"language":"Ruby"},
    {"firstName":"Gabriel","lastName":"T.","country":"Luxembourg","continent":"Europe","age":28,"language":"Java"},
    {"firstName":"Sofia","lastName":"A.","country":"Denmark","continent":"Europe","age":19,"language":"Python"},
    {"firstName":"Viktoria","lastName":"W.","country":"Bulgaria","continent":"Europe","age":28,"language":"PHP"},
    {"firstName":"Chloe","lastName":"K.","country":"Guernsey","continent":"Europe","age":28,"language":"Ruby"},
    {"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"JavaScript"},
    {"firstName":"Lukas","lastName":"R.","country":"Austria","continent":"Europe","age":89,"language":"C"},
    {"firstName":"Agustin","lastName":"V.","country":"Uruguay","continent":"Americas","age":89,"language":"JavaScript"},
    {"firstName":"Luke","lastName":"V.","country":"Malta","continent":"Europe","age":29,"language":"PHP"},
    {"firstName":"Joao","lastName":"D.","country":"Portugal","continent":"Europe","age":35,"language":"JavaScript"},
    {"firstName":"Harry","lastName":"K.","country":"Brazil","continent":"Americas","age":19,"language":"Python"},
    {"firstName":"Amar","lastName":"V.","country":"Bosnia and Herzegovina","continent":"Europe","age":32,"language":"Ruby"},
    {"firstName":"Zahra","lastName":"S.","country":"Azerbaijan","continent":"Europe","age":22,"language":"Java"},
    {"firstName":"Fatima","lastName":"A.","country":"Algeria","continent":"Africa","age":25,"language":"JavaScript"},
    {"firstName":"Alexander","lastName":"F.","country":"Russia","continent":"Europe","age":89,"language":"Java"},
    {"firstName":"Ximena","lastName":"Q.","country":"Mexico","continent":"Americas","age":28,"language":"Java"},
    {"firstName":"Yusuf","lastName":"N.","country":"Turkey","continent":"Europe","age":22,"language":"Python"},
    {"firstName":"Laia","lastName":"P.","country":"Andorra","continent":"Europe","age":55,"language":"Ruby"},
    {"firstName":"Mamadou","lastName":"E.","country":"Mali","continent":"Africa","age":22,"language":"Python"},
    {"firstName":"Nor","lastName":"E.","country":"Malaysia","continent":"Asia","age":21,"language":"Clojure"},
    {"firstName":"Thomas","lastName":"L.","country":"Canada","continent":"Americas","age":38,"language":"Java"},
    {"firstName":"Sebastian","lastName":"W.","country":"Venezuela","continent":"Americas","age":28,"language":"Python"},
    {"firstName":"Anna","lastName":"R.","country":"Liechtenstein","continent":"Europe","age":32,"language":"JavaScript"}]))