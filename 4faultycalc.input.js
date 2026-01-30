

let aa = Math.random();
console.log(aa);
alert(`aa= ${aa}`)
let a=prompt("Enter number 1")
let b=prompt("Enter number 2")
let c=prompt("Enter operator")

let obj = {
    "+" : "-",
    "-" : "+",
    "*" : "/",
    "/" : "*"
}   
if(aa>0.5){
console.log(`Result is ${a} ${c} ${b}` )
alert(`This is a sample eval function: ${eval(`2 + 2`)}`)
alert(`Result is ${eval(`${a} ${c} ${b}`)}` )
}
else{
c=obj[c]
console.log(`Result is ${a} ${c} ${b}`)
alert(`Result is ${eval(`${a} ${c} ${b}`)}`)
}




