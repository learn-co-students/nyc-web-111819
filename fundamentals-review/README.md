If you get asked this in a coding interview, and can't answer it's an immediate NO.

1. What are the basic JS data types?


2. List some common JS data structures (at least 3).


3. Higher-Order Function
 - What is it?
 - What does it accept as a parameter (if anything)?
 - What does it return?
 - What is an example of a HOF?
 - What is the value of implementing a HOF?

4. Higher-Order Component
 - What is it?
 - What does it accept as a parameter (if anything)?
 - What does it return?
 - What is an example of a HOC?
 - What is the value of implementing a HOC?


4. Closures
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

5. Logic / Problem Solving Skills


6. Domain model Twitter for me


7. Posting to a join table


8. Can you explain `this`? Do [these quizzes](https://dev.to/liaowow/take-this-quiz-understand-how-this-works-in-javascript-44dj) without looking at the answers, check yourself and then explain why the correct answers are correct.



*** If you're rocky you need to go back to the previous mod labs and take responsbility for your own success!!!!!
