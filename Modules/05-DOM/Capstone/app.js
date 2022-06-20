 // Select the header element
const header = document.getElementById("header") 
                
// Event listener: Mouse move                
// When user hovers around the top area, show the header    
document.body.addEventListener("mousemove", e =>{  
    console.log(e.clientY)
    e.clientY < 116 ? header.style.top = "0px" : header.style.top = "-150px";
})            
                
// Event listener: Scroll                
// When user scroll after a certain height, hide the header, else show the header
document.addEventListener("scroll", e=>{ 
    window.pageYOffset > 116 ? header.style.top = "-150px" : header.style.top = "0px";
}) 
