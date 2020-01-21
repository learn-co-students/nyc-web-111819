class Adapter {
  static getMovies(url){
     return fetch(url)
    .then(response => response.json())
  }

  static createMovie(url, movieObj){
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(movieObj)
    }

    return fetch(url, options).then(response => response.json())
  }
}