Intro to React
=============================

## SWBATs
- [ ] Recognize declarative and imperative coding paradigms
      ===> declarative ==> make me a salmon pokebowl with seaweed salad
      ===> imperative ==> salmon, brown rice mixed with white rice, spicy mayo, slice the salmon, cook the rice, how many scoops  
- [ ] Visualize/identify Components on any website
- [ ] Explain what a Component is conceptually in the UI
- [ ] Briefly explain Babel's purpose in React ==> backwards compatibility && JSX 
- [ ] Explain what a React Component actually is in code
- [ ] Use JSX to build custom components and render them in the browser
- [ ] See how props are to components as arguments are to functions

### Review 

function makeCard(title, description, rating)
<Card title={title} description={description} rating={rating}>


JSX & Props
=============================

## SWBATs
- [ ] Understand how `create-react-app` works and what it offers a developer
- [ ] Organize code into files and use the import-export syntax to pass ddata between components
- [ ] Use props to make components more dynamic and reusable
- [ ] Setup a new React app and play around with building UIs
- [ ] **BONUS** Use the `children` prop 

### App Ideas
- Yelp for bathrooms of places ===> 3

Bathrooms ==> id, typeId, locationId
Location ===> id, name, lat, long
    ===> Stretch: LocationType 
User ===> id, name, gender ()
BathroomType ===> id, typeString (Woman, Man, Neutral) 
    ===> Stretch: Tags
UserPreferences ==> UserId, BathroomTypeId
Review ===> id, userId, bathroomId, rating, comment




- Kobe Bryant remembrance app. Rest in Power <3 ===> 2
- News Aggregator ===> 2 
- DogStagram ==> 2



State, Events, and Conditional Rendering
==============

## SWBATs
- [ ] Add event handlers to elements in React
- [ ] Explain why we have Synthetic Events
- [ ] Instantiate `state` inside and outside of the `constructor`
- [ ] Create event handler callbacks that manipulate `state`
- [ ] Trigger rerenders by calling `setState`
- [ ] Manipulate the DOM by changing values in `state` instead of using vanilla JS
- [ ] Correctly choose when to use `props` vs `state`, and explain why one would use one or the other

## Lecture Notes
- curlies ==> claw hands 

- state
- reinforces labs 
- props  ===> when props and state later
- events are synthetic (fakeish) vs native events 


- npx create-react-app
- start building your components ==> define it, export default, import wherever you want to use it/parent component
- decide if you need state in your component, define the default state, conditional render, and add callbacks to setState
- decide where you need to pass props and format appropriately
- ALWAYS USE GOOD NAMING 
- arrow functions 
- maybbbeeee default props 
- ternaries!!!! ==> show you an alternate later. get real hype at you guys about ES6
- 



### Using Events
1. Find piece of DOM 
  - `const beef = document.getElementById("beef")`
2. Add event listener to that piece 
  - `beef.addEventListener`
3. Give callback to event listener (remove, add, etc.)
  - `beef.addEventListener("click", () => {console.log("BEEF!")})`

In React, we don't have to do step 1, we can skip directly to step 2 by adding event handlers directly to our JSX. We still must supply the event handler with a callback.


### Events
Synthentic events ensure that you can use the `event` object in the same way regardless of browser or machine. This comes back to the `learn once, write anywhere` principle.

Otherwise, events are more or less the same as they are in vanilla JS.

Because the `event` object in React is a Synthetic Event that is pooled, the event loses its value after some time. This means that in asynchronous events (intervals, timeouts, fetches) events will lose their values. Must use `event.persist()` to keep values around.

### State
State is used for data that needs to be dynamic. Where props are passed down from parents to children and are static, values stored in state are meant to change, especially as the user interacts with the DOM. 

This is a key component of declarative programming in React: we tie our components to our state by integrating values in state into logic (e.g. conditional rendering). This way, changes in state eventually precipitate changes to the DOM

`setState` is a function inherited from `React.Component` and is used to change state. You MUST use `setState` if you wish to rerender your component - direct mutations to state will NOT trigger a rerender.

`setState` is asynchronous - this means that code written immediately after a `setState` will not see changes in your state. If you wish to call a function after state has been changed, you can pass a callback as the second argument to `setState`

`setState` can take an object OR a function as its first argument. Use the function when you intend to use the old state values when writing the new state values.

### Props

You can pass anything in `props`, even functions! We will often find ourselves passing functions down to children components - this is because while we might need state in one part of our application, our event listener might be attached to an entirely different component. To get around this, we define our state-changing functions in a component and then pass these functions downwards to be called by children components.


## Extras

- [React Events in Depth](https://www.youtube.com/watch?v=dRo_egw7tBc)
- [Function Binding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
- [Class Field Declarations](https://github.com/tc39/proposal-class-fields)
- [event.target vs event.currentTarget](https://github.com/facebook/react/issues/5733)
- [JavaScript Event Delegation, and event.target vs. event.currentTarget](https://medium.com/@florenceliang/javascript-event-delegation-and-event-target-vs-event-currenttarget-c9680c3a46d1)
- [super() vs super(props)](https://overreacted.io/why-do-we-write-super-props/)