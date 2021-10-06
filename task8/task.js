/**
 * Задача Who likes it?
 * Вы, наверное, знаете систему "нравится" из Facebook и других страниц.
 * Люди могут "лайкать" сообщения в блоге, фотографии или другие материалы.
 * Мы хотим создать текст, который должен отображаться рядом с таким элементом.

 Реализуйте функцию, которая принимает массив, содержащий имена людей,
 которым нравится элемент. Он должен возвращать отображаемый текст,
 как показано в примерах:
 []                                -->  "no one likes this"
 ["Peter"]                         -->  "Peter likes this"
 ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
 ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
 ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

 Примечание: Для 4 или более имен число в "и 2 других" просто увеличивается.
 **/
function likes(names) {
   const answer=['and', 'others','like this']

    if(names.length===0){
        answer.splice(0, answer.length, 'no one likes this')
    }else if(names.length===1){
        answer.splice(0, answer.length, 'likes this')
    }
    if(names.length>1 && names.length<4){
        const lastName=names.splice(names.length-1, 1)[0]
         answer.splice(answer.length-2, 1, lastName)
        names.reverse()
    }else if(names.length>3){
        const othersNamesLength= names.splice(2, names.length-2).length
        answer.splice(answer.length-2, 0, String(othersNamesLength))
        names.reverse()
         }
    names.forEach(name=>answer.unshift(name))
    if (names.length>1){
        answer[0] = answer[0]+','
    }
return answer.join(' ')
}


console.log(likes(["Max", "John", "Mark", "Alex", "Jacob", "Mark", "Max"]))