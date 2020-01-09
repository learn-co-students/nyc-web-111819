console.log("Movie Rating Application")

let ul = document.querySelector('ul')

// movies.forEach(function(movie){
//   let li = createLi(movie)
//   ul.appendChild(li)
// })

function getMovies(){
  fetch("http://localhost:4000/movies")
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

createMovie(movie){
  fetch("http://localhost:4000/movies",{
    method: "POST",
    headers: {
        "content-type": "application/json",
        accepts: "application/json"
    },
    body: JSON.stringify(movie)
  })
}

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
// let div = document.getElementById('image-container')
// div.parentNode.insertBefore(formButton, div)

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

    console.log(e.target)

    let title = e.target.title.value
    let imageUrl = e.target.imageUrl.value
    let year = e.target.year.value

    let movie = { title , imageUrl, year }
    
    ul.append(createLi(movie))

    newForm.reset()

    document.body.replaceChild(formButton, newForm)
  })

})

// 1. add a button that says "Add Movie" underneath the welcome image that when clicked removes the button and in its place 
// renders a form for adding a new movie (year, title, imageUrl, submit)
// 2. on submission of the form, add a new movie thing to the DOM, and remove the form and put the button back

// let upVotes = document.getElementsByClassName('up-vote')
// let upVotesArray = Array.from(upVotes)

// upVotesArray.forEach(function(button){
//   button.addEventListener('click', function(e){
//     let parentLi = e.target.parentNode
//     let span = parentLi.querySelector('span')
//     span.innerText = parseInt(span.innerText) + 1
//   })
// })