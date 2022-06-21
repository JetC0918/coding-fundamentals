const BASE_URL = "https://api.thecatapi.com/v1/breeds"
const CAT__IMG = document.getElementById("cat__img")
const CAT__TITLE = document.getElementById("cat__title")
const CAT__TEXT = document.getElementById("cat__text")
const CAT__LINK = document.getElementById("cat__link")
const CAT__CARD = document.querySelector(".cats__container")

async function getCat(){
    const response = await fetch(BASE_URL);
    const data = await response.json();
 

    for (cat of data){  
        try { 
            const card = `
                            <div class="cat__card">
                                <div class="cat__image">
                                    <img  id="cat__img" src="${cat.image.url}" alt=""></div>
                                <div class="cat__content">
                                    <h3 class="cat__title" id="cat__title">${cat.name}</h3>
                                    <p id="cat__text">${cat.description}</p>
                                </div>
                                <div class="cat__cta gray">
                                <a id="cat__link" href="${cat.wikipedia_url}">Profile</a>
                                </div>
                            </div>
                            `
            cat__card = document.createElement('div')
            cat__card.id = cat.name
            CAT__CARD.appendChild(cat__card)     
            document.getElementById(cat__card.id).innerHTML = card

        }catch (error) {
            console.error(error);
        }  
    }
} 

getCat() 