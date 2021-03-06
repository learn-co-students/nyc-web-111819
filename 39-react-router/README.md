React Router
============

## SWBAT

- [X] Create a multi-page SPA
- [X] Explain the advantages of using React Router
- [X] Utilize the most common `react-router` components to build a SPA: `BrowserRouter`, `Route`, `Switch`, `Link`, and `NavLink`
- [X] Use `push` and `history` to navigate pages
- [X] Create dynamic routes and use `params`
- [X] Make the distinction between `state` being one _Single Source of Truth_ and `react-router` being another _Single Source of Truth_
- [ ] **HOMEWORK** Use `Redirect` to navigate pages



## Movie Review Fullstack 
### Setup 
- Run frontend: `npm start` 
- Run backend: `rails s -p 3001`

### Features
- [MovieApp Wireframe and Component Hierarchy](https://awwapp.com/b/ui0yjws5o/)
- [ ] different routes for main movie view and login 
- [ ] dynamic routing for individual movie view

## Lecture Notes
- [Example with All of Ze Routes](https://github.com/sbal13/Project_Athena_client/blob/master/src/App.js)

## SPAs

### Benefits
- hotreloading (webpack)
- users are used to it 
- after initial load, you got everything. no additional frontend requests necessary

### Challenges 
- browser navigation ( we don't have specific urls to navigate through )
- no history 
- no sharing, no bookmarking 
- as it grows, gets infinitely more complex 
- that initial load might take minute 


## Dynamic Routing from Rails
SingleMovieView ==> /movies/:id
AllMovies ==> /movies
Login ==> /login
Signup ==> /signup




### Component Notation vs Render Notation
Component Notation just takes a component name and automatically adds the routerProps as props to it (history, location, match)

Render Notation takes a callback that returns a component, written as JSX. We do this so we can pass our own props.
if you need routerProps, need to explicitly pass to your component


## Parking Lot


### Using React Router
`npm install react-router-dom --save`

### Static vs Dynamic Routing

Server-side vs Client-side Routing.

- Client-side == no more request response.
- This results in a much faster/smoother feeling website.

**Why do we even need routes?**

- The user can use forward/back to navigate your app
- The user can navigate via urls
- We can make urls describe the action that the user might be taking
- Users can bookmark urls

**What are the drawbacks to client-side routing?**

- We're loading all of our frontend at once, so it might add to the initial load time
- We have to design all of our routes to be coupled with our component structure (which can be a good thing long-term)

### HTML5 History API

You can manipulate the URL in your browser with these:

```javascript
window.history.pushState({}, null, 'page');
window.history.back();
window.history.forward();
```

Combine that with `if/else` logic and tracking history and you get `react-router`.

### React Router API

> To get your intuition in line with React Router’s, think about components, not static routes. Think about how to solve the problem with React’s declarative composability because nearly every “React Router question” is probably a “React question”.
> [_source: React Router Philosophy_](https://reacttraining.com/react-router/web/guides/philosophy)

## Resources

- [HTML5 History API MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- [React Router Github](https://github.com/ReactTraining/react-router)
- [React Router Website](https://reacttraining.com/react-router/)




