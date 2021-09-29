/**
 * В банкоматах достаточно денег номиналом 10, 20, 50, 100, 200 и 500 долларов.

 Вам выдаются деньги номиналом n с 1 <= n <= 1500.

 Попробуйте найти минимальное количество банкнот, которое необходимо использовать для выплаты в долларах, или выведите -1, если это невозможно.

 770 - должно вернуть 4
 500 + 200 + 50 + 20
 125 - 1 банкомат не может выдать такую сумму
 1250 - 4 500 + 500 + 200 + 500
 * **/

// const bills={
//     10:0,
//     20:0,
//     50:0,
//     100:0,
//     200:0,
//     500:0
// }

const bills=[10, 20, 50, 100, 200, 500]
let bill =500
let count = 0

const issuanceBills = (needSum) =>{
if(needSum<10 || needSum===0){
  return
}else{
    count++
    const i= bills.indexOf(bill)
    needSum= needSum-bill
    if(needSum<bill ){bill=bills[i-1]}
    console.log(needSum, count)
   return  issuanceBills(needSum)
}
}

issuanceBills(890)