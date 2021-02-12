document.getElementById('hello')
.addEventListener('click', buttonOn)

function buttonOn() {
  alert('Hello')
  document.getElementById('background')
  .style.backgroundcolor = 'red'
}