
## JS Fetch and Async

## Learning Goals

- [ ] Implement Fetch functionality against an external datasource
- [ ] Set up an API backend using `json-server`
- [ ] Describe how to interact with an external datasource using RESTful conventions
- [ ] Understand asynchronous behavior in JavaScript
- [ ] Utilize Fetch and Promises to implement async API calls

## JSON Server

* install using `npm install json-server`
* provides a quick-and-dirty way of setting up a backend API
* not production ready, used for prototyping and practice
* leverages JSON objects for persistance
* utilizes RESTful conventions to performs CRUD operations

## RESTful call to json-server

### GET: `http://localhost:3000/movies`

Example response:
```javascript
[
  {
    id: 1,
    title: 'Jaws',
    imageUrl: 'https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA',
    year: 1975,
    score: 0
  },
  { 
    id: 2,
    title: 'The Matrix',
    imageUrl: 'https://imgc.allpostersimages.com/img/print/u-g-F4S5W20.jpg?w=550&h=550&p=0',
    year: 1999  ,
    score: 0
  }...
]
```

### POST: `http://localhost:3000/movies`

Body: 
```javascript
{
  score: 0, 
  title: 'Jaws', 
  imageUrl: 'https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA', 
  year: 1975
}
```

Example response:
```javascript
  {
    id: 1,
    title: 'Jaws',
    imageUrl: 'https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA',
    year: 1975,
    score: 0
  }
```

### PATCH: `http://localhost:3000/movies/:id`

Body: 
```javascript
{
  year: 1980
}
```

Example response: 
```javascript
  {
    id: 1,
    title: 'Jaws',
    imageUrl: 'https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA',
    year: 1980,
    score: 0
  }
```

### DELETE: `http://localhost:3000/movies/:id`