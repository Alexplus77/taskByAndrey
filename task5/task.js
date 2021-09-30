/**
 * Кто вспоминает времена, когда они были на школьном дворе, когда девочки брали цветок и рвали его лепестки, произнося
 * каждую из следующих фраз каждый раз, когда лепесток рвался:
 ы
 I love you
 a little
 a lot
 passionately
 madly
 not at all
 Когда был сорван последний лепесток, раздались крики возбуждения, мечты, нахлынувшие мысли и эмоции.
 Ваша цель в этом ката - определить, какую фразу девушки сказали бы для цветка с заданным количеством лепестков,
 где nb_petals> 0.

 howMuchILoveYou(7),"I love you")
 howMuchILoveYou(3),"a lot")
 howMuchILoveYou(6),"not at all")
 Числа могут быть разные и 1000 и 500, надо правильно расчитать, какая фраза выпадет на определенное число
 **/

const howMuchILoveYou = (petals) => {

    const setWords = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']

    while (petals > setWords.length) {
        petals -=  setWords.length
    }
    return setWords[petals - 1]
}

console.log(howMuchILoveYou(7))//"I love you"
console.log(howMuchILoveYou(6))//"not at all"
console.log(howMuchILoveYou(3))//"a lot"
console.log(howMuchILoveYou(1000))//"passionately"