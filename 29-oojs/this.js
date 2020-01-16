let globalThis = this

function myFunc() {
  console.log('global this: ', globalThis)
  console.log('this inside: ', this)
}


function whatIsThis() {
  // console.log("outer - this is: ", this)
  // let that = this
  return function(animal, song){
    // console.log("Inner - That is: ", that)
    console.log(this)
    console.log("Inner - Fav Color: ", this.favColor)
    console.log("Inner - Fav Animal: ", animal)
    console.log("Inner - Fav Song: ", song)
  }
}


let sean = {
  name: 'Sean T',
  favColor: 'blue',
  favMethod: whatIsThis(),
  otherMethod: () => console.log(this)
}

let susan = {
  name: "Susan",
  favColor: 'yellow',
  favMethod: whatIsThis('cat')
}




// sean.favMethod.call(susan, 'cat', 'No Scrubs')
// sean.favMethod.apply(susan, ['cat', 'No Scrubs'])

// Inner - Fav Color:  yellow
// this.js:16 Inner - Fav Animal:  cat
// this.js:17 Inner - Fav Song:  No Scrubs



