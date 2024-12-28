// 1. Variable declarations with different scopes
let x = 10
const y = 20
var z = 30

if (true) {
    let x2 = 40
    const y2 = 50
    var z2 = 60
}

console.log('Variable z2 from if block:', z2)

// 2. Fruit array function
const fruits = ['apple', 'banana', 'orange', 'grape', 'mango']
console.log('Second fruit:', fruits[1])

// 3. Array manipulation function
function manipulateArray(arr) {
    arr.push('kiwi')
    console.log('After push:', arr)
    arr.pop()
    console.log('After pop:', arr)
    return arr
}
console.log('Array manipulation:', manipulateArray(['pear', 'plum', 'berry']))

// 4. Square numbers using map
const numbers = [1, 2, 3, 4, 5]
const squared = numbers.map(num => num * num)
console.log('Original numbers:', numbers)
console.log('Squared numbers:', squared)

// 5. Filter odd numbers
const numberSet = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const oddNumbers = numberSet.filter(num => num % 2 !== 0)
console.log('Odd numbers only:', oddNumbers)

// 6. Person object and greeting
const person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
}
console.log('Greeting:', `Hello, my name is ${person.name}. I am ${person.age} years old and work as a ${person.occupation}.`)

// 7. Rectangle area calculator
const rectangle = {
    width: 10,
    height: 5
}
console.log('Rectangle area:', rectangle.width * rectangle.height)

// 8. Object keys function
console.log('Person object keys:', Object.keys(person))

// 9. Merge objects function
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
console.log('Merged objects:', Object.assign({}, obj1, obj2))

// 10. Sum array using reduce
const numbersToSum = [1, 2, 3, 4, 5]
const sum = numbersToSum.reduce((acc, curr) => acc + curr, 0)
console.log('Sum of array:', sum)