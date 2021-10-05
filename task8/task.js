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
   return names.map((elem, i)=>{
       if(names.length>1){
           return ``
       }

   })
}

likes(["Jacob", "Alex"]  )