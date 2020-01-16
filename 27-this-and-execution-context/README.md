
# `this` and Execution Context

## Learning Goals

- [ ] discuss execution context
- [ ] explore `this` in different contexts
- [ ] use `apply` and `call` to pass in a thisArg to a function
- [ ] use `bind` to explicitly bind a `this` to a method

## Lecture Hook

* execution context
    * global execution context is created before any functions are invoked
    * when a function is invoked a new execution context is created
    * every execution context provides its own `this`, , which points to an object to which the current code that’s being executed belongs.
* `this`
    * `this` depends are where a function is invoked, not where it is defined
* arrow functions and `this`
* using `this` will make more sense when we talk about OOJS

## Lecture Flow

### 1. Execution Context

> In JavaScript, execution context is an abstract concept that holds information about the environment within which the current code is being executed.

1. The **global execution context** is created *before* any code is executed.
2. Whenever a function is *executed* (or called/invoked, these are all synonyms), a **new execution context** gets created.
3. Every execution context provides `this` keyword, which points to an **object** to which the current code that’s being executed belongs.

### 2. `this`

> Every execution context also has a special variable this. It points to an object to which the current code that’s being executed belongs.


```javascript
function printThis(){
    console.log("My `this` is: ", this)
}
```

* scope and execution context aren't quite the same
* in this example this is the same inside and outside the function

```javascript
var globalThis = this

function myFunc () {  
  console.log('globalThis: ', globalThis)
  console.log('this inside: ', this)
  console.log(globalThis === this)
}

myFunc()

// globalThis: Window {...}
// this inside: Window {...}
// true
```

* unlike scope, this doesn't depend on where it is defined, instead this varies on where its function is invoked
* `this` gets set to a leading parent object of a function call
    * in the case where we invoke a function from an object `this` is set to the object **at the time of execution**
    * in the case where we invoke a function in the absense of an explicit leading parent object, the LPO - and the `this` - is the window at the time of invocation
* `this` gets set to a leading parent object of a function **at the time of execution** - even if its embedded within an object

```javascript
console.log(this)

function whatIsThis() {
    return function(){
        console.log('what is this?', this)
    }
}

let obj = {
    name: 'first object',
    whatIsThis: whatIsThis
}


let obj2 = {
    name: 'second object',
    whatIsThis: whatIsThis()
}

// `this` in the following contexts

obj.whatIsThis()()

obj2.whatIsThis()
```

* sometimes you might have to preserve `this` for some reason in a variable

```javascript

var myObj = {
  name: "Susan",
  myMethod: function () {
    var that = this
    myFunc()
    
    function myFunc () {
      console.log('this: ', this)
      console.log('that: ', that)
    }
  }
}

myObj.myMethod()

// this: Window { ... }
// self: { myMethod: f }
```

### 3. `call`, `apply`, and `bind`

* each of these does essentially the same thing - accepts an argument and sets it as the parent object of the function
* `call` and `apply` set the parent object and immediately invoke the function - they vary by how you pass in arguments
* `bind` returns a new function that wraps the original function - thus you have to explicitly invoke it after you use `bind`

```javascript

var greet = 'Hello!'

function showGreet () {
  console.log(this.greet)
}

var casualGreet = { greet: 'Hey!' }

showGreet()                    // Hello!
showGreet.bind(casualGreet)()  // Hey!
showGreet.call(casualGreet)    // Hey!
showGreet.apply(casualGreet)   // Hey!
```

### 4. Arrow Functions

* arrow functions don't have `this` property
* this will be important in React

```javascript
let obj = {
    a: 'string',
    b: function(){
        console.log(this.a)
    }
}

obj.b() // prints 'string' to the console
```

```javascript
let obj = {
    a: 'string',
    b: () => console.log(this.a)
}

obj.b() // prints 'undefined' to the console
```