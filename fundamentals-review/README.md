If you get asked this in a coding interview, and can't answer it's an immediate NO.

## 1. What are the basic JS data types?

## 2. List some common JS data structures (at least 3).

## 3. Higher-Order Functions
 - What is it?
 - What does it accept as a parameter (if anything)?
 - What does it return?
 - What is an example of a HOF?
 - What is the value of implementing a HOF?
 - What are the differences or similarities to First Class Functions?

## 4. Higher-Order Components
 - What is it?
 - What does it accept as a parameter (if anything)?
 - What does it return?
 - What is an example of a HOC?
 - What is the value of implementing a HOC?

## 5. Closures
 - What is a closure in plain English?
 - How do closures make use of lexical scoping?
 - What is the benefit of implementing closures?

```JS
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  /* logs 7 */
console.log(add10(2)); /* logs 12 */
```

 - In the above example, list the closure(s).
 - What is `x` in `add5`?
 - What is `x` in `add10`?

```JS
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
alert(counter1.value()); /* Alerts 2 */
counter1.decrement();
alert(counter1.value()); /* Alerts 1 */
alert(counter2.value()); /* Alerts 0 */
```

 - In the above example, list the closure(s).
 - What is the lexical environment?
 - What parts of the example have access to `privateCounter`?
 - What parts of the example have access to `changeBy`?
 - What does `increment` and `decrement` do and how do they work?

## 6. Hoisting
* Explain hoisting in plain English.
* What does the following code log? Why?
```JS
console.log(myName);
var myName = 'Caryn';
```
* Is there a difference between using `var`, `const`, and `let`?
  * Does the following code log the same output as the above example? Why or why not?
  ```JS
  console.log(myName);
  const myName = 'Caryn';
  ```
* How does an IIFE (immediately invoked function expression) affect hoisting, if at all?

## 7. Arrow Functions
* What version of JS introduced arrow functions?
* What does an arrow function replace?
* When does an arrow function require a parenthesis?
* How do arrow functions interact with `this`?
* What is the difference between the following:
```JS
const func = x => x * x;
```
```JS
const func = (x, y) => { return x + y; };
```
* What does the first console log? And the second? Why?
```JS
const adder = {
  base: 1,

  add: function(a) {
    const f = v => v + this.base;
    return f(a);
  },

  addThruCall: function(a) {
    const f = v => v + this.base;
    const b = {
      base: 2
    };

    return f.call(b, a);
  }
};

console.log(adder.add(1));         
console.log(adder.addThruCall(1));
```

## 8. Domain model Gmail for me
* What elements of Gmail do you want to model?
  * Include the relationship(s). How do they interact with each other, if at all.
  * Consider possible user stories.

## 9. Relationships
  * What is an example of a one-to-many relationship?
    * How do you model this relationship? (Draw it out)
    * How do you describe this relationship with **Active Record**?
  * What is an example of a many-to-many relationship?
    * How do you model this relationship? (Draw it out)
    * How do you describe this relationship with **Active Record**?
    * In what order do you create the relevant instances and relate them to each other?

## 10. `this`
- Describe `this` in plain English.
- Do [these quizzes](https://dev.to/liaowow/take-this-quiz-understand-how-this-works-in-javascript-44dj) without looking at the answers. Check yourself, then explain why the correct answers are correct.


### *** If you're rocky, you **need** to go back to the previous module labs and take **responsibility** for your own success!!!!! ***
