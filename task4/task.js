/**
 * Нужно написать функию, которая проверяет правильно ли расставлены скобки (то есть если есть незакрытая или лишняя, false)


 "()"              =>  true
 ")(()))"          =>  false
 "("               =>  false
 "(())((()())())"  =>  true
 **/
let count=0
const validateBracket = (bracket) => {
           const arrBracket = bracket.split('')
    if(arrBracket[0] !== '('){return false}

for (let i=0; i<arrBracket.length; i++){
    const bracketOne=arrBracket[i]
    if( bracketOne==='(' ){ count++ }else if(bracketOne===')'){ count--}
    if(count===-1){return  false}
    console.log(count)
}
    return count === 0
}

// console.log(validateBracket("()"))//true
 //console.log(validateBracket(")(()))"))//false
 //console.log(validateBracket("(())((()())())"))//true
// console.log(validateBracket("("))//false
//console.log(validateBracket("())(()"))//false!!!
console.log(validateBracket("())("))//false!!!
