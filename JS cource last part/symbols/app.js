//Create a Symbol
// const sym1 = Symbol();
// const sym1 = Symbol('sym2');

const KEY1 = Symbol()
const KEY2 = Symbol('sym2')

const myObj = {}
myObj[KEY1] = 'Prop1'
myObj[KEY2] = 'Prop2'
myObj.key3 = 'Prop3'
myObj.key4 = 'Prop4'



//Symbols are not enumerable

// for(let i in myObj){
//     console.log(`${i}: ${myObj[i]}`)
// }

//Symbols are ignored by JSON.stringify

console.log(JSON.stringify({key: 'prop'}))
console.log(JSON.stringify({[Symbol('sym2')]: 'prop'}))