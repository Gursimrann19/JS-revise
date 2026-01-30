  //query selector , get element , math.random()
       console.log("script is running")



        let boxes=document.querySelector(".cont").children
        function randomcolor() {
            let val1 = Math.ceil(0 + Math.random()*255);
            let val2 = Math.ceil(0 + Math.random()*255);
            let val3 = Math.ceil(0 + Math.random()*255);
            
            return `rgb(${val1}, ${val2},${val3})`
            
        }
        
        console.log("script is running")
        
        Array.from(boxes).forEach(e=>{
            e.style.backgroundColor = randomcolor()
            e.style.color = randomcolor()
        })

//---------------------------------------------------------------------
setInterval(() => {
    document.querySelector(".cheader").style.backgroundColor=randomcolor();
}, 1000);


//--------------------------------------------------------------------
//add event listener

let button=document.getElementById("btn")
button.addEventListener("click",()=>
{
    document.querySelector(".cheader").innerHTML="Notes Downloaded"

})

document.body.addEventListener("keyup",(e)=>{
    console.log(e.key);
    e.stopPropagation();
})