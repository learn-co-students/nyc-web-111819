console.log("Movie Rating Application")

function createLi(movie) {
  let li = document.createElement('li')

  // li.innerHTML = `
  //   <h3>${movie.title}</h3>
  //   <img alt=""
  //       src="${movie.imageUrl}" />
  //   <h4>Year: </h4>
  //   <p>${movie.year}5</p>
  //   <h4>Score: <span>0</span> </h4>
  //   <button class="up-vote">Up Vote</button>
  //   <button>Down Vote</button>
  // `

  // li.className = 'movie'

  // return li
  console.log(movie.title)
}

// ul.appendChild(li)
let ul = document.querySelector('ul')
ul.append(createLi())


let upVotes = document.getElementsByClassName('up-vote')
let upVotesArray = Array.from(upVotes)

upVotesArray.forEach(function(button){
  button.addEventListener('click', function(e){
    let parentLi = e.target.parentNode
    let span = parentLi.querySelector('span')
    span.innerText = parseInt(span.innerText) + 1
  })
})


const movies = [
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

movies.forEach(function(movie){
  return createLi(movie)
})