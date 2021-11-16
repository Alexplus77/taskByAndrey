/**
 * Пит сейчас смешивает смесь для торта. У него есть рецепт, содержащий необходимые
 * ингредиенты для одного торта. Он также мог бы уже добавить некоторые ингредиенты,
 * но чего-то не хватает. Можете ли вы помочь ему выяснить, что он должен добавить в смесь?

 Требования:
 /Пит хочет печь только целые торты. И ингредиенты, которые были добавлены один раз в смесь, не могут быть удалены из нее.
 Это означает: если он уже добавил количество муки для 2,8 пирожных, ему нужно добавить как минимум количество муки
 для 0,2 пирожных, чтобы муки хватило на 3 пирожных.
 /Если Пит уже добавил все ингредиенты для целого количества пирожных,
 вам не нужно ничего добавлять, просто верните пустой хэш.
 /Если Пит вообще не добавлял никаких ингредиентов, вам нужно добавить все ингредиенты ровно для одного торта.
 /Для простоты мы игнорируем все единицы измерения и просто концентрируемся на числах.
 Например, 250 г муки - это просто 250 (единиц) муки, а 1 фунт сахара - это также просто 1 (единица) сахара.
 Ингредиенты, которые не нужно добавлять в смесь (недостающее количество = 0), не должны присутствовать в результате.

 var recipe = {flour: 200, eggs: 1, sugar: 100};
 getMissingIngredients(recipe, {flour: 50, eggs: 1}); // must return {flour: 150, sugar: 100}
 getMissingIngredients(recipe, {}); // must return {flour: 200, eggs: 1, sugar: 100}
 getMissingIngredients(recipe, {flour: 500, sugar: 200}); // must return {flour: 100, eggs: 3, sugar: 100}
 **/
const getMissingIngredients = (recipe, added) => {
    const maxCakes = Math.max(...Object.keys(recipe).map(el=> Math.ceil(added[el] / recipe[el] )|| 0))
    return Object.keys(added).length===0 ? recipe :
     Object.keys(recipe).reduce((acc, el) => {
        if(maxCakes !== added[el] / recipe[el] ){
        acc[el] = added[el] / recipe[el] || 0
       acc[el] = Math.round((maxCakes - acc[el]) * recipe[el])
        }
        return acc
    }, {})
}
console.log(getMissingIngredients({flour: 200, eggs: 1, sugar: 100}, {flour: 500, sugar: 200}))
