// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: 
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topicsDiv = document.querySelector('.topics')

function tabMaker(arr){
    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.textContent = arr;
    return tabDiv
    
}


axios
    .get("https://lambda-times-backend.herokuapp.com/topics")

    .then(res => {
        res.data.topics.map(item => 
            topicsDiv.appendChild(tabMaker(item)))
    })