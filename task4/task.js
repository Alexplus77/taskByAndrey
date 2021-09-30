/**
 * Нужно написать функию, которая проверяет правильно ли расставлены скобки (то есть если есть незакрытая или лишняя, false)


 "()"              =>  true
 ")(()))"          =>  false
 "("               =>  false
 "(())((()())())"  =>  true
 **/
const validateBracket = (bracket) => {
    const openBracket = '('
    const closeBracket = ')'

    const arrBracket = bracket.split('')

    if (arrBracket[0] !== openBracket || arrBracket.length < 2) {
        return false
    }

    const countOpenBracket = arrBracket.filter(elem => elem === openBracket).length
    const countCloseBracket = arrBracket.filter(elem => elem === closeBracket).length

    return countOpenBracket === countCloseBracket
}

console.log(validateBracket("()"))//true
console.log(validateBracket(")(()))"))//false
console.log(validateBracket("(())((()())())"))//true
console.log(validateBracket("("))//false
