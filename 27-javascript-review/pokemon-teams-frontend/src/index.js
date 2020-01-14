const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

// render stuff to the DOM
// fetch to the trainers endpoint DONE
// get data back DONE
// use that data to make HTML DONE
// slap that HTML on the DOM DONE

let trainers = []
let trainersContainer = document.querySelector("main")
//caveat, creating local variables means that you have to
//maintain your local variables

const fetchTrainers = fetch(TRAINERS_URL)
.then(res => res.json())
.then(trainerData => {
  // console.log(trainerData)
  trainers = trainerData
  //iterate through this array and make some HTML
  let trainersHTML = renderTrainers(trainers)//end of trainer map
  // console.log(trainersHTML)
  trainersContainer.innerHTML = trainersHTML
}) //end of 2nd .then

function renderTrainers(trainers){
  return trainers.map(trainer => {
    return `
    <div class="card" data-id="${trainer.id}"><p>${trainer.name}</p>
      <button class="add-btn" data-trainer-id="${trainer.id}">Add Pokemon</button>
      <ul class="trainer_${trainer.id}">
        ${renderPoke(trainer.pokemons)}
      </ul>
    </div>
    `
  }).join('')
}

function renderPoke(pokemons){
  return pokemons.map(poke => {
    return `
      <li class="pokemon-${poke.id}">${poke.nickname} (${poke.species})<button class="release" data-pokemon-id="${poke.id}">Release</button></li>
    `
  }).join('')
}

// we need an event listener on the ADD POKEMON button DONE
// that button will trigger a fetch (POST) DONE
// that RESPONSE is going to be the pokemon that was created
// with that response DONE
// slap it on the DOM DONE

trainersContainer.addEventListener('click', (event) => {
  // console.log(event.target)
  if(event.target.className === "add-btn"){
    console.log('look i hit the right btn')
    let trainerID = event.target.dataset.trainerId
    let trainerList = document.querySelector(`.trainer_${trainerID}`)
    makeAPokemon(trainerID, trainerList)
  }// this is the end of my if
  if(event.target.className === "release"){
    // console.log('boop')
    let pokeId = event.target.dataset.pokemonId
    let poke_li = document.querySelector(`.pokemon-${pokeId}`)
    deleteAPokemon(pokeId, poke_li)
  } // end of second if stmt
})//end of the event listener

//we need another event listener on the RELEASE POKEMON btn DONE
// that button will trigger a fetch (DELETE) DONE
// that RESPONSE will be the deleted pokemon DONE
// with that response remove it from the DOM DONE


function makeAPokemon(trainerID, trainerList){
  fetch(POKEMONS_URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      "trainer_id": trainerID
    })
  })// this is the end of my fetch
  .then(res => res.json())
  .then(poke => {
    console.log(poke)
    if(!poke.error){
      let pokeHTML = `
        <li class="pokemon-${poke.id}">${poke.nickname} (${poke.species})<button class="release" data-pokemon-id="${poke.id}">Release</button></li>
      `
      // console.log(pokeHTML)
      trainerList.innerHTML += pokeHTML
    }
  })//end of my .then
}// end of make a pokemon

function deleteAPokemon(pokeId, poke_li){
  fetch(`${POKEMONS_URL}/${pokeId}`, {
    method: "DELETE"
  })
  .then(res => res.json())
  .then(poke => {
    // console.log(poke)
    poke_li.remove()
  })//second .then
}




























// <div class="card" data-id="1"><p>Prince</p>
//   <button data-trainer-id="1">Add Pokemon</button>
//   <ul>
//     <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
//     <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
//     <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
//     <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
//     <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
//   </ul>
// </div>
