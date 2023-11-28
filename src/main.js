import './scss/styles.scss'

const Main = document.querySelector('main')
const totalPoltronas = 46

let seats = ''

for (let i = 1; i <= totalPoltronas; i++) {
  seats += `<div class="seat-grid"><div class="seat" title="livre"><span></span>
  <svg class="icon"><use xlink:href="/imgs/icons.svg#seat"></use></svg>
</div></div>`
}
console.log('seats :>> ', seats)
Main.querySelector('div.bus-schema').innerHTML = seats

Main.addEventListener('click', (e) => {
  const clickedElement = e.target
  if (clickedElement.matches('.bus-schema svg.icon') || clickedElement.matches('.bus-schema use')) {
    var svgElement = clickedElement.matches('svg') ? clickedElement : clickedElement.parentNode

    svgElement.classList.remove('warning', 'secondary')
    svgElement.classList.toggle('success')
  }
})
