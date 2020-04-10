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

axios
    .get("https://unpkg.com/axios/dist/axios.min.js")
    .then((response) => {
        let data = response.data
        headerC.appendChild(header(data))
        
    })

// HEADER FUNCTION

const headerC = document.querySelector('.header-container')

function header(data) {
    const heading = document.createElement('div')
    const date = document.createElement('span')
    const title = document.createElement('h1')
    const temp = document.createElement('span')

    heading.appendChild(date)
    heading.appendChild(title)
    heading.appendChild(temp)

    heading.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    date.textContent = `${data.date}`
    temp.textContent = `${data.temp}`
    title.textContent = 'Lambda Times'


    return heading

    

}