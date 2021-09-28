//Задача 1
const bills={
    25:0,
    50:0,
    100:0
}
const tickets = (arr) => {

 for (let i=0; i<arr.length; i++) {
     let bill=arr[i]

      if (bill === 50) {
         if (bills[25]) {
             bills[25]--
             bills[bill]++
         } else {
             return 'No'
         }
     }
     console.log(bills)
     if (bill === 100) {
         if (bills[50] && bills[25]) {
             bills[50]--
             bills[25]--
         } else if (bills[25] >= 3) {
             bills[25] -= 3
         } else {
             return 'No'
         }
     }
     bills[bill]++
 }
    return 'Yes'
}





//console.log(tickets([25, 25, 50]))// Yes
//console.log(tickets([25, 100]))// No
 console.log(tickets([25, 25, 50, 50, 100]))// У меня "Yes".Почему у тебя "No"? Ведь он дает 100, а в кассе 150, 75 сдачи есть.

