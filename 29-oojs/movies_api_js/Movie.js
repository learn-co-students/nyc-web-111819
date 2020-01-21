// let matrixObj = {
//   title: "The Matrix",
//   year: 1999,
//   imageUrl: "https://imgc.allpostersimages.com/img/print/u-g-F4S5W20.jpg?w=550&h=550&p=0",
//   score: 9
// }

// let jawsObj = {
//   title: "Jaws",
//   year: 1975,
//   imageUrl: "https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA",
//   score: 10
// }

class Movie {
  constructor(obj) {
    this.title = obj.title
    this.year = obj.year
    this.imageUrl = obj.imageUrl
    this.score = obj.score
  }

  prettyPrint(){
    return `${this.title} - ${this.year}`
  }

  createLi() {
    let li = document.createElement('li')
  
    li.innerHTML = `
      <h3>${this.title}</h3>
      <img alt=""
          src="${this.imageUrl}" />
      <h4>Year: </h4>
      <p>${this.year}</p>
      <h4>Score: <span>${this.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button data-purpose='down'>Down Vote</button>
      <button data-purpose="delete">&times;</button>
    `
  
    li.className = 'movie'
    li.dataset.beef = 'stuff'
    return li
  }
  
  render(el) {
    let li = this.createLi()
    el.append(li)
  }
}