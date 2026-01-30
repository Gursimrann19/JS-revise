
async function addDots(dotss){
    let html = 
    `   
        <div class="div1">Initialising the Terminal <span class="dots">${dotss}</span></div>
        <div class="div2">Reading Your Files <span class="dots">${dotss}</span></div>
        <div class="div3">Password Detected <span class="dots">${dotss}</span></div>
        <div class="div3">Sending all passwords to the server<span class="dots">${dotss}</span></div>
        <div class="div4">Cleaning up <span class="dots">${dotss}</span></div>
    `

    document.querySelector(".container").innerHTML=html;
}
setInterval(() => {
    addDots(" ")
    
}, 1000);

setInterval(() => {
    addDots(".")
    
}, 2000);

setInterval(() => {
    addDots("..")
    
}, 3000);
setInterval(() => {
    addDots("...")
    
}, 4000);




