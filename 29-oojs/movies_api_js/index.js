console.log("Movie Rating Application")

document.addEventListener("DOMContentLoaded", function(){
  getMovies()
})

let ul = document.querySelector('ul')
let baseUrl = "http://localhost:3000/api/v1/movies"

function getMovies(){
  Adapter.getMovies(baseUrl)
  .then(movies => {
    movies.forEach(function(movie){
      let newMovie = new Movie(movie)
      newMovie.render(ul)
    })
  })
}

ul.addEventListener('click', function(e){
  console.log(e.target.dataset.purpose)

  if (e.target.className === 'up-vote'){
    let parentLi = e.target.parentNode
    let span = parentLi.querySelector('span')

    span.innerText = parseInt(span.innerText) + 1 
    
  } else if (e.target.dataset.purpose === 'delete'){
    e.target.parentNode.remove()
  }
})

let formButton = document.createElement('button')
formButton.innerText = 'Add Movie'

let welcome = document.querySelector('img')
welcome.insertAdjacentElement('afterend', formButton)


formButton.addEventListener('click', function(e){
  let newForm = document.createElement('form')

  newForm.innerHTML = `
    <input type="text" name="title">
    <input type="text" name="imageUrl">
    <input type="number" name="year">
    <input type="submit" value="submit">
  `

  document.body.replaceChild(newForm, formButton)

  newForm.addEventListener('submit', function(e){
    e.preventDefault()

    let title = e.target.title.value
    let imageUrl = e.target.imageUrl.value
    let year = e.target.year.value
    let score = 0

    let movieObj = { title , imageUrl, year, score }

    Adapter.createMovie(baseUrl, movieObj)
    .then(function(movie){
      console.log(movie)
      // pessimistic rendering
      let newMovie = new Movie(movie)
      newMovie.render(ul)
    })
       
    // optimistic rendering
    // ul.append(createLi(movie))

    newForm.reset()

    document.body.replaceChild(formButton, newForm)
  })

})
