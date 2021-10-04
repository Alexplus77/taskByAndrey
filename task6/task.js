/**
 * Джейден Смит, сын Уилла Смита, является звездой таких фильмов, как "Малыш-каратист" (2010)
 * и "После Земли" (2013). Джейден также известен своей философией, которую он излагает
 * через Twitter. Когда он пишет в Твиттере, он известен тем, что почти всегда пишет каждое
 * слово с заглавной буквы. Для простоты вам придется писать каждое слово с заглавной буквы,
 * посмотрите, какими должны быть сокращения в приведенном ниже примере.

 Ваша задача - преобразовать строки так, как они были бы написаны Джейденом Смитом.
 Строки представляют собой настоящие цитаты из Джейдена Смита, но они написаны не с
 заглавной буквы так, как он их изначально набрал.
 Example:

 Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
 Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Rea**/

const wordUpperCase = (words) => {
    const wordsArr = words.split(' ')
   return wordsArr.reduce((acc, word) => {
        const arrLetters = word.split('')
        const firstLetter = arrLetters[0].toUpperCase()
        arrLetters.splice(0, 1, firstLetter)
        acc.push(arrLetters.join(''))
        return acc
    }, []).join(' ')

}

console.log(wordUpperCase("How can mirrors be real if our eyes aren't real"))