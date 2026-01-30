let a=1
for (let i = 0; i<10; i++) {
   console.log(a+i);
   
}
// ---------------------------------------------
let o={
    name: "gursimran",
    age: "21",
    qualification: "btech"

}
for (let key in o) {
    console.log(key)
}
//---------------------------------------------------
for (const c of "object") {
    console.log(c)
}
function greetings(name1,name2){
console.log("hello " + name1+" baby")
console.log("hello " + name2+" baby")
}
greetings("gursimran","rhythm")
//-----------------------------------------------------

function sum(a,b,c=4) {
    
    return a+b+c
}
result1=sum(3,5)

console.log("The resultant is : "+ result1 )

//-----------------------------------------------------
// how to use a function with arrow-
const func1=(greetings)=>{
    console.log("Hello to you !"+greetings)
}
    
func1(" Gursimran")
//-----------------------------------------------------
//how to use for each with arrow
let array10=[23,45,21,88,56,45,90]

array10.forEach((value,index,array)=> {
    console.log(value,index,array)
});
//------------------------------------------------------
//how to use map instead of writing a loop to create  a new array
let array11=[1,2,3,4,5,6,7,8,9,10]
let newarray12=[]
for (let index = 0; index < array11.length; index++) {
    const element = array11[index];
    newarray12.push(element**2)
    
}

let newarray13= array11.map(e=>{
    return e-1
})
//-------------------------------------------------------
//how to use filter
const greaterThanSeven=(e)=>{
    if(e>7){
        return true
    }
    return false
}
let newarray14=array11.filter(greaterThanSeven)

//------------------------------------------------------
//how to use reduce.. FACTORIAL FUNCTION
let array16=[1,2,3,4,5,6]
const function_reduce=(a,b)=>{
    return a*b
}
let newarray17=array16.reduce(function_reduce)



console.log("array11= " +array11)
console.log("array12= " +newarray12)
console.log("array13= " +newarray13)
console.log("array14= " +newarray14)
console.log("array17= " +newarray17)






