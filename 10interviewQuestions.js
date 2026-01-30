//how to use iife
// iife : immediately invoked function expression
//await always has to be put under async. so instead of creating a new function for async everytime, put it under function main instead
async function sleep(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve(455)
        },1000);
    })
}
(async function main(){
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)
})()

//destructuring
//using ...rest ...arr
let [a,b, ...rest] = [1,2,6,7,7,4,3]
console.log(a,b,rest);
let obj={
    aa : 1,
    bb : "Garry"
}
let { aa , bb} = obj;
console.log(aa,bb)


// let arr2=[1,2,20];
// console.log(sum(arr2[0]+arr2[1]+arr2[2]))
// console.log(sum(...arr2))


//you can declare a variable within a block / function / global

//what is hoisting ? 
//when the interpreter executes the function in such a manner that a "VAR" variable function can be used before declaring it. it happens beccause the interpreter seems to be taking the declaration at the top of the code. 
 
console.log(aaa)
//code
var aaa = 0;
 // but it doesnt work the same with "LET" and "CONST"
 
 
//question1
//using arrays
//create one array of students. map each student to one of the four elements of another array
//student
//houses

let students = ["Varsha", "Raghunathan", "Raghuveerntham", "Akanksha", "Manys", "Gauri", "Kaif", "Sia", "Sona"]

let houses = [];
for (const student of students) {
    if (student.length<6) {
        houses.push('Griff');
    }
    else if (student.length<8) {
        houses.push('Huffle');
    }
    else if (student.length<12) {
        houses.push('Retherclaw');
    }
    else{
        houses.push('Slytherin');
    }
}
console.log(houses)
for (let index = 0; index < students.length; index++) {
    console.log(students[index] + " --> " + houses[index])
}

//question2
//how to use map
//how to use ...new . ....separates the element of an array
// how to use set  . use it when u want to include only unique values in array
//------------create a second array from the first array which doubles the elemnts of second array. if a value repeats in the first array, that must not be added to the second array

let origarr = [21,34,56,12,12,14,3,4,11,4,11];
let uniarr = [...new Set(origarr)];
let newarr = [];

for (let index = 0; index < uniarr.length; index++) {
    const element = uniarr[index];
    newarr.push(element*2);
    
}

for (let index = 0; index < uniarr.length; index++) {
    console.log(uniarr[index] + "-->" + newarr[index])
    
}


//question