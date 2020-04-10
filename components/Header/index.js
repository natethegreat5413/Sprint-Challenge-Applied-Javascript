// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container



// HEADER FUNCTION

const headerC = document.querySelector('.header-container')

function header(date, temp) {
    const heading = document.createElement('div')
    const dates = document.createElement('span')
    const title = document.createElement('h1')
    const temperature = document.createElement('span')

    headerC.appendChild(heading)
    heading.appendChild(dates)
    heading.appendChild(title)
    heading.appendChild(temperature)

    heading.classList.add('header')
    dates.classList.add('date')
    temperature.classList.add('temp')

    dates.textContent = date
    temperature.textContent = temp
    title.textContent = 'Lambda Times'


    return heading

}
header('March 28, 2019', '98°')