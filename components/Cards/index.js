// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')

    .then(response => {
         
    
        


const cardsContainer = document.querySelector('.cards-container')

function cardMaker(article){
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imgDiv = document.createElement('div')
    const authorImg = document.createElement('img')
    const bySpan = document.createElement('span')

    card.append(headline)
    card.append(authorDiv)
    authorDiv.append(imgDiv)
    imgDiv.append(authorImg)
    authorDiv.append(bySpan)

    card.classList.add('card')
    headline.classList.add('headline')
    authorDiv.classList.add('author')
    imgDiv.classList.add('img-container')

    headline.textContent = article.headline
    authorImg.src = article.authorPhoto
    bySpan.textContent = `By ${article.authorName}`

    return card
 }
