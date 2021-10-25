/**Задача Sum The Tree
 * Задан объект узла, представляющий двоичное дерево:
 * Node:
 value: <int>,
 left: <Node> or null,
 right: <Node> or null
 напишите функцию, которая возвращает сумму всех значений, включая корень.
 Отсутствие узла будет обозначено нулевым значением.
 10
 | \
 1  2
 => 13

 1
 | \
 0  0
 \
 2
 => 3
 * **/

const sumTheTreeValues = (root) => {
    let valuesObjects = 0
    Object.values(root).forEach(elem => {
        elem = elem || 0
        typeof elem !== "object" ? valuesObjects +=elem : valuesObjects +=sumTheTreeValues(elem)
    })
    return valuesObjects
}


console.log(sumTheTreeValues({
    value: 10,
    left: {value: 1, left: null, right: null},
    right: {value: 2, left: null, right: null}
}))


