console.log("Movie Rating Application")

function createLi() {
  let li = document.createElement('li')

  li.innerHTML = `
    <h3>The Goonies</h3>
    <img alt=""
        src="https://images-na.ssl-images-amazon.com/images/I/515DYf99zfL.jpg" />
    <h4>Year: </h4>
    <p>1985</p>
    <h4>Score: <span>0</span> </h4>
    <button>Up Vote</button>
    <button>Down Vote</button>
  `

  li.className = 'movie'

  return li
}

// ul.appendChild(li)
let ul = document.querySelector('ul')
ul.append(createLi())


let movies = [
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
  },
  
]