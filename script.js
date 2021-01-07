document.getElementById('button-id').addEventListener('click', checkNumber)
document.getElementById('button-new').addEventListener('click', newNumber)
const output = document.getElementById('output-id')
let number = Math.floor((Math.random() * 10) + 1)
console.log(number)

function checkNumber () {
  const a = document.getElementById('input-id').value
  if (isNaN(a)) {
    output.innerHTML = 'please input a valid intiger'
  } else if (a > number) {
    output.innerHTML = 'lower'
  } else if (a < number) {
    output.innerHTML = 'higher'
  } else if (parseInt(a) === number) {
    output.innerHTML = 'YOU FOUND IT!'
  }
}

function newNumber () {
  number = Math.floor((Math.random() * 10) + 1)
  console.log(number)
}
