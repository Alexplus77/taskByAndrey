/*

Функция принимает число - в виде строки и вторым аргументом кол-во итераций

whatISee('1',5) - 1 число и пять итераций

Нужно вернуть, что ты видишь, на каждой итерации

первая итерация, перед тобой '1' - то есть, скажи, что ты видишь?  я вижу одну единицу '11';
вторая итерация у тебя уже не '1', а '11' то есть 2 единицы '21'
Третья итерация '21' ты видишь одну двойку и одну единицу '1211'
Четвертая итерация '1211' - видишь  одну единицу одну двойку две  единицы '111221'
Пятая итерация '111221' = три единицы две двойки одна единица '312211'
И так далее, если в функцию придет 100 итераций - нужно 100 раз вывести, что видишь. В примере пять

Вот тесты:

whatISee('1',5) // ['11','21','1211','111221','312211']

whatISee('1259',5)
// ['11121519', '311211151119', '13211231153119', '1113122112132115132119', '31131122211211131221151113122119']

если решишь, ты джедай рекурсии) Я помню мучался с ней год назад.

*/



let count=0
let arr=[]
const whatISee = (number, iterations) => {

    const arrNumber = String(number).split('')
    if(arr.length===iterations){
        return arr
    }else{
   const a= arrNumber.map((num, i)=>{
        count++
        if(num!==arrNumber[i+1]){
            number=`${count}${num}`
            count=0
            return number
        }
    })
        arr.push(a.join(''))
       return whatISee(a.join(''), iterations)
    }
}


console.log(whatISee('1', 5))
//console.log(whatISee('1259', 5))