const BASE_URL = "https://api.quotable.io/random"
const button = document.querySelector("button")
const quote = document.querySelector("blockquote p")
const cite = document.querySelector("blockquote cite") 

async function getQuote(){
    const response = await fetch(BASE_URL); 
    const data = await response.json() 
    if (response.ok){   
        // update text
        quote.textContent = data.content;
        cite.textContent = `--- ${data.author}`;
    } 
    else{
        quote.textContent = "An error occurred. Please refresh the page"
    }
}

// Add click listener to button to update quote
button.addEventListener("click", getQuote)

// Load the code when the page reload
getQuote()