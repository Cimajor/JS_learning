// function nameIterator(names){
//     let nextIndex = 0;

//     return {
//         next: function(){
//             return nextIndex < names.length ? 
//             {value: names[nextIndex++], done:false} :
//             {done : true}
//         }
//     }
// }

// const namesArr = ['illia', 'Diana', 'Kate']
// const names = nameIterator(namesArr)

// console.log(names.next().value)
// console.log(names.next().value)
// console.log(names.next().value)

//Generator example
// function* sayNames(){
//     yield "Illia"
//     yield "Diana"
//     yield "Kate"

// }
// const name = sayNames()
// console.log(name.next())
// console.log(name.next())
// console.log(name.next())

// //ID creator
// function* createIDs(){
//     let index = 0

//     while(true){
//         yield index++
//     }
// }

// const gen = createIDs()

// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)