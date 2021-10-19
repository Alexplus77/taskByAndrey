let finde=[]
const a = (num, itteration)=>{
    const arrNum=String(num).split('')

  const countNum= arrNum.map((elem, i)=>{
     return  arrNum.find(el=>elem===el)
   })

    console.log( countNum)
    console.log(arrNum)
}

console.log(a(2234, 5))