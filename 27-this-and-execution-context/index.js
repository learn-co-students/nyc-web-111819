console.log("Movie Rating Application")

const movies = [
  {
    title: 'Jaws',
    imageUrl: 'https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA',
    year: 1975
  },
  { 
    title: 'The Matrix',
    imageUrl: 'https://imgc.allpostersimages.com/img/print/u-g-F4S5W20.jpg?w=550&h=550&p=0',
    year: 1999  
  },
  {
    title: 'The Goonies',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/515DYf99zfL.jpg',
    year: 1985
  },
  { 
    title: 'Free Willy',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Free_willy.jpg/220px-Free_willy.jpg',
    year: 1993  
  },
  { 
    title: 'Top Gun',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
    year: 1986  
  },
  { 
    title: 'Mean Girls',
    imageUrl: 'https://img01.mgo-images.com/image/thumbnail?id=1MV270609a1c6c89af5538a6d63cea71ed4&ql=70&sizes=310x465',
    year: 2004  
  }
]

let ul = document.querySelector('ul')

movies.forEach(function(movie){
  let li = createLi(movie)
  ul.appendChild(li)
})

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

    console.log('only prints when an upvote button is clicked')
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