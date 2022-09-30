const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randonNumber = Math.round(Math.random()*10)

xAttempts = 1

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

document.addEventListener('keydown', function(e){
  if(e.key == 'Enter' && screen1.classList.contains("hide")){
    handleResetClick()
  }
})

function handleTryClick(event){
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randonNumber){
    toggleScreen()

    screen2.querySelector("h2").innerText = `Got it right in ${xAttempts} tries!`
  }else{
    screen1.querySelector("h2").innerText = "Wrong! Try again."
  }

  inputNumber.value = ""
  xAttempts++
}


function handleResetClick(){
  toggleScreen()
  xAttempts = 1
  randonNumber = Math.round(Math.random()*10)
  screen1.querySelector("h2").innerText = ""
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}