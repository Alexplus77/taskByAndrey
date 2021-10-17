/**
 Функция принимает объект и путь,
 если путь до свойства есть - выводим свойство
 если путь неправильный и в объекте нет таких ключей, выводим строку "не найдено"
 */

const obj1 = {
    b: {
        c: {
            d: {
                f: 'final'
            }
        }
    }
}


const obj2 = {
    pupa: {
        lupa: {
            beep: "boop",
        },
        foo: "bar",
    },
};

const getNestedProp = (obj, path) => {
    const arrPath=path.split('.')
    if(!obj[arrPath[0]]){return "Ошибка!!! Не найдено."}
     if(typeof obj[arrPath[0]]==="string"){
         return obj[arrPath[0]]
     } else{
         obj=obj[arrPath.splice(0, 1)]
         return getNestedProp(obj, arrPath.join('.'))
     }
}



// тесты
 console.log(getNestedProp(obj1, 'b.c.d.f')); // final
 console.log(getNestedProp(obj1, 'b.c.d.g')); // не найдено
   console.log(getNestedProp(obj2, "pupa.lupa.beep")) // 'boop'
console.log(getNestedProp(obj2, "pupa.foo")) // 'bar'
 console.log(getNestedProp(obj2, "pupa.ne.tuda")) // 'не найдено

