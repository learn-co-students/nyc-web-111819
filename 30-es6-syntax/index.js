const originalObj = {beef: "steak", lamb: "chop", car: {make: "Ford", model: "F150"}}
const originalObj2 = {beef: "stroganof", lettuce: "salad", tomato: "ketchup"}

// SPREAD

// const notSoCopy = originalObj

// old way before es6 to copy objects
// const actualCopy = Object.assign({}, originalObj)

// new way!
// const es6Copy = {...originalObj} // pure copy
const es6Copy = {...originalObj, car: {...originalObj.car}} // pure copy
// const es6Copy = {peppers: "bell", ...originalObj} add some keys
// const es6Copy = {beef: "delish", ...originalObj} order matters when modifying keys
// const mergeCopy = {...originalObj, ...originalObj2}


const originalArray = ["Godzilla", "King Kong", "Mothra", "Ghidorah"]
const originalArray2 = ["Ferdinand Magellan", "Leif Erikson", "Christopher Columbus"]

// const arrayCopy = [...originalArray] copy an array
// const doubleArray = [...originalArray, ...originalArray] multiply array
// const mergeArray = [...originalArray2, ...originalArray] merge arrays (order matters)
// const addArray = [...originalArray, "Rodan", ...originalArray2 ]
// const insertArray = [...originalArray.slice(0,2), "Rodan", ...originalArray.slice(2)]






// DESTRUCTURING

// const originalObj = {beef: "steak", lamb: "chop"}
// const originalObj2 = {beef: "stroganof", lettuce: "salad", tomato: "ketchup"}

// old way
// const beef = originalObj.beef
// const lamb = originalObj.lamb

// new way! destructuring
// const { beef, lamb, car: { make } } = originalObj

// console.log(beef)
// console.log(lamb)
// console.log(make)


// const [a, b, c, d, e] = originalArray
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)


// STRUCTURING

const potato = "mashed"
const carrot = "boiled"
const beet = "fresh"

// const obj = {
//   potato: potato,
//   carrot: carrot,
//   beet: beet
// }

const obj = {
  potato,
  carrot,
  beet
}

// form.addEventListener("submit", (e) => {
//   const name = e.target[0].value
//   const username = e.target[1].value
//   const password = e.target[2].value

//   // const [ name, username, password ] = e.target

//   // const body = {
//   //   name: name.value,
//   //   username: username.value,
//   //   password: password.value
//   // }

//   const body = {
//     name,
//     username,
//     password
//   }


//   fetch(URL, {
//     method: "POST",
//     headers: {...},
//     body: JSON.stringify(body)
//   })
// })





