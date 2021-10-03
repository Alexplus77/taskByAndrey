/**
 * Мужчина и его зонтики
 Каждое утро мужчина ходит на работу и каждый день возвращается домой.

 Если утром идет дождь и у него дома есть зонтик, он берет его в дорогу, чтобы не промокнуть, и хранит его на работе. Точно так же, если днем ​​идет дождь и у него на работе зонтик, он берет зонтик в дорогу домой.

 Учитывая множество погодных условий, ваша задача состоит в том, чтобы выработать минимальное количество зонтов, которое ему нужно для начала, чтобы он никогда не промок. Он может начать с некоторых зонтиков дома и некоторых на работе, но на выходе будет одно целое число, минимальное общее количество.

 Входными данными является массив / список последовательных прогнозов погоды на полдня. Так, например, первое значение - это утренняя погода 1-го дня, а второе значение - дневная погода 1-го дня. Возможные варианты: «ясно», «солнечно», «облачно», «дождливо», «ветрено» или «гроза».

 например на три дня, 6 значений:

 weather = ["rainy", "cloudy", "sunny", "sunny", "cloudy", "thunderstorms"]

 N.B. Он никогда не берет зонт если не идет дождь

 minUmbrellas(["rainy", "clear", "rainy", "cloudy"])
 // should return 2
 // Because on the first morning, he needs an umbrella to take, and he leaves it at work.
 // So on the second morning, he needs a second umbrella.

 minUmbrellas(["sunny", "windy", "sunny", "clear"])
 // should return 0
 // Because it doesn't rain at all

 minUmbrellas(["rainy", "rainy", "rainy", "rainy", "thunderstorms", "rainy"])
 // should return 1
 // Because he only needs 1 umbrella which he takes on every journey.

 **/
const minUmbrellas = (weather) => {
    const rain = ['rainy', "thunderstorms"];
    const noRain = ["sunny", "windy", "clear", "cloudy"];

    let home = 0
    let work = 0
    if (weather.every(elem => noRain.includes(elem))) {
        return 0
    }
    const findRain = weather.filter(elem => rain.includes(elem))
    if (findRain.length === weather.length) {
        return 1
    }
    weather.forEach((elem, i) => {
        if (i % 2 === 0) {
            console.log(elem)
            if (rain.includes(elem)) {
                home--
                work++
            }
        }
        if (i % 2 > 0) {
            if (rain.includes(elem)) {
                if (work > 1) {
                    work--
                    home++
                } else {
                    work++
                    home--
                }
            }
        }


    })

    return home + work
};
console.log(minUmbrellas(['rainy', 'windy', 'clear', 'clear', 'clear', 'thunderstorms', 'rainy', 'clear', 'rainy', 'clear']))//2
//console.log(minUmbrellas(['sunny','windy','sunny','sunny','thunderstorms','cloudy','sunny','thunderstorms','clear','windy' ]))//2
//console.log(minUmbrellas(["sunny", "windy", "sunny", "clear"]))
//console.log(minUmbrellas(["rainy", "clear", "rainy", "cloudy"]))//2
//console.log(minUmbrellas(["sunny", "windy", "sunny", "clear"]))//0
//console.log(minUmbrellas(["rainy", "rainy", "rainy", "rainy", "thunderstorms", "rainy"]))//1