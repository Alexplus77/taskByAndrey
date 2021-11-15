/**
 * Пит любит печь пирожные. У него есть несколько рецептов и ингредиентов. К сожалению, он не силен в математике.
 * Можете ли вы помочь ему выяснить, сколько пирожных он мог бы испечь, учитывая его рецепты?

 Напишите функцию cakes(), которая принимает рецепт (объект) и доступные ингредиенты (также объект)
 и возвращает максимальное количество пирожных, которые может испечь Пит (целое число).
 Для простоты нет единиц измерения количества (например, 1 фунт муки или 200 г сахара - это просто 1 или 200).
 Ингредиенты, которых нет в объектах, можно считать равными 0.
 Например:
 // must return 2
 cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
 // must return 0
 cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
 * **/
const cakes = (recipe, available) =>{
 const cakesMade= Object.keys(available).reduce((acc, elem)=>{
        available[elem]/recipe[elem] && acc.push(Math.floor(available[elem]/recipe[elem]))
        return acc
    },[])
    return Object.keys(recipe).length===cakesMade.length ? Math.min(...cakesMade)  : 0
}


console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}))