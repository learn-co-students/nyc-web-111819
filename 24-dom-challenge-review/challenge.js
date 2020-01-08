// √1. create listener for page load
// √2. create some kind of interval thing that increments the number every second
// √3. add listeners to + and - buttons to change the number on click
// √4. put click listener on like to "heart" a number
// √5. stop interval when pause is clicked - disable buttons
// √6. resume interval when resume is click - reenable buttons
// √7. submit listener on form, add comment to DOM

window.addEventListener("DOMContentLoaded", function(){
  let counter = document.getElementById('counter')
  let timer = setInterval(function(){
    incrementCounter(1)
  }, 1000)
  let likeTracker = {}


  function clickHandler(e) {
    switch (e.target.id) {
      case '-':
        incrementCounter(-1)
        break
      case '+':
        incrementCounter(1)
        break
      case '<3':
        let likedNums = Object.keys(likeTracker)
        let num = counter.innerText

        if (likedNums.includes(num)){
          console.log('already been liked')
          likeTracker[num]++
          let li = document.querySelector(`li[data-id="${num}"]`)
          li.innerText = `${num} has been liked ${likeTracker[num]} times`
        } else {
          console.log('has not been liked')
          likeTracker[num] = 1
          let ul = document.querySelector('.likes')
          let li = document.createElement('li')
          li.dataset.id = num
          li.innerText = `${num} has been liked 1 time`
          ul.append(li)
        }  
        break
      case 'pause':
        document.getElementById('+').disabled = true
        document.getElementById('-').disabled = true
        document.getElementById('<3').disabled = true
        document.getElementById('submit').disabled = true

        clearInterval(timer)

        e.target.innerText = 'resume'
        e.target.id = 'resume'
        break
      case 'resume':
        console.log('resume')
        document.getElementById('+').disabled = false
        document.getElementById('-').disabled = false
        document.getElementById('<3').disabled = false
        document.getElementById('submit').disabled = false

        timer = setInterval(function(){
          incrementCounter(1)
        }, 1000)

        e.target.innerText = 'pause'
        e.target.id = 'pause'

        break
      default:
        break
    }
  }

  function incrementCounter(n) {
    let number = counter.innerText
    counter.innerText = parseInt(number) + n
  }
  
  function submitHandler(e) {
    e.preventDefault()
    let comment = e.target[0].value
    // let comment = e.target.comment.value <= preferable
    let p = document.createElement('p')
    let list = document.getElementById('list')
    p.innerText = comment

    list.append(p)

    e.target.reset()
  }
  
  document.addEventListener('click', clickHandler)
  document.addEventListener('submit', submitHandler)


})