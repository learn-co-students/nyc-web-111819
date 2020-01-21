console.log("Movie Rating Application")

let ul = document.querySelector('ul')
let baseUrl = "http://localhost:3000/api/v1"

function getMovies(){
  fetch(`${baseUrl}/movies`)
  .then(response => response.json())
  .then(movies => {
    // console.log(movies) 

    movies.forEach(function(movie){
      let li = createLi(movie)
      ul.appendChild(li)
    })
  })
}

getMovies()


function createLi(movie) {
  let li = document.createElement('li')
  let deleteButton = document.createElement('button')
  // console.log('rendering movie', movie.title)

  li.innerHTML = `
    <h3>${movie.title}</h3>
    <img alt=""
        src="${movie.imageUrl}" />
    <h4>Year: </h4>
    <p>${movie.year}</p>
    <h4>Score: <span>0</span> </h4>
    <button class="up-vote">Up Vote</button>
    <button data-purpose='down'>Down Vote</button>
    <button data-purpose="delete">&times;</button>
  `

  li.className = 'movie'
  li.dataset.beef = 'stuff'
  return li
}

ul.addEventListener('click', function(e){
  // console.dir(e.target)
  console.log(e.target.dataset.purpose)

  if (e.target.className === 'up-vote'){

    // console.log('only prints when an upvote button is clicked')
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

    let movie = { title , imageUrl, year, score }

    fetch(`${baseUrl}/movies`, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
        body: JSON.stringify(movie)
    })
    .then(function(response) { return response.json() })
    .then(function(movie){
      console.log(movie)
      // pessimistic rendering
      // ul.append(createLi(movie))

      // newForm.reset()
  
      // document.body.replaceChild(formButton, newForm)
    })
       
    // optimistic rendering
    ul.append(createLi(movie))

    newForm.reset()

    document.body.replaceChild(formButton, newForm)
  })

})
