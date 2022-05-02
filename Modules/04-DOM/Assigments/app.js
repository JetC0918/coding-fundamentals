const addButton = document.getElementsByClassName("add__button")[0]
const notification = document.getElementsByClassName("notification") [0]

addButton.addEventListener('click', ()=> {  
    notification.classList.add('show') 
})
 