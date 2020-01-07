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