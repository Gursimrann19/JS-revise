//-----------------async nature of js----------------------
console.log("Iam line 1")
console.log("Iam line 2")


setTimeout(() => {
    console.log("Iam line 3 , but inside timeout")
}, 1000);

console.log("Iam line 5")
console.log("Iam line 6")

//---------------------callback------------------------------

const fn = (arg) => {
    console.log(arg);
    console.log("Iam the fn function ! ")
}

const callback = (arg) => {
    console.log(arg);
    console.log("Iam the callback function !");
    fn ("Fn Garry");
    

}

const loadscript = (src,callback) => {
    console.log("This is the main function which is making callback to 'callback' ")
    let s= document.createElement("script");
    s.src= src;
    s.onload=callback("Harry");
    document.head.append(s);
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",(callback) => {
    alert('Script loaded');
    document.body.style.background= "beige";
});

//-----------promises-------------------
//write alt to use ta snippet 
console.log('This is line 1, later reached');
console.log("This is line 2, first reached");

let prom1 = new Promise((resolve, reject) => {

    let a= Math.random();
    console.log(a);

//if a less than 0.5 then reject the request. upon rejection go to prom1.then{.....}.catch{.....} so that the code continues. 
    if(a<0.5){
        reject("Request denied")
    }
    else{
        console.log("This is inside my promise 1");
        setTimeout(() => {
            console.log("This is printed after 3 secs 1")
            resolve("Harry Resolved 1");
        },1000);
    }

})
let prom2 = new Promise((resolve, reject) => {

    let a= Math.random();
    console.log(a);
    if(a<0.5){
        reject("Request denied 2")
    }
    else{
        console.log("This is inside my promise 2");
        setTimeout(() => {
            console.log("This is printed after 3 secs 2 ")
            resolve("Harry Resolved 2");
        },1000);
    }

})
let prom3 = new Promise((resolve, reject) => {

    let a= Math.random();
    console.log(a);
    if(a<0.5){
        reject("Request denied 3")
    }
    else{
        console.log("This is inside my promise 3");
        setTimeout(() => {
            console.log("This is printed after 3 secs 3 ")
            resolve("Harry Resolved 3");
        },1000);
    }

})

prom1.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err)
})

prom3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err)
})

prom2.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err)
})

let pt = Promise.allSettled([prom1,prom2,prom3])
pt.then((a) => {
    console.log(a)
}).catch( err =>{
    console.log(err);
})


//------------await---------------

async function getData(){
    return new Promise ((resolve,reject)=> {
        setTimeout(() => {
            console.log("getting the data")
            resolve(455)
        }, 3000);
        
    })
}

async function getData2() {
    console.log("Fetching the API")
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let dataList2 = await x.json()
    await console.log("Fetched API")
    return dataList2;
      
    
}

async function callingfunction (){
        console.log("getting modules")
        
        console.log("doing something")

        let dataList2 = await getData2(); //await means getdata will first complete itself . only then the function below it will run.

        console.log(dataList2);
   
        console.log("process data");
        
        console.log("wrap up");
  

}
callingfunction() ;


//--------one way of controlling asynchronous nature of JS----------
// dataList.then((v) =>{
//     console.log("process data");
    
//     console.log("wrap up");
// })


//------------error catching and  handling--------------

//if i do not add finally then this line would not get printed kyunki mera function try/catch chlaa kar true or false return krke bahr chlaa jaata. but finally iski execution ko mandetory krega. hence finally is used in functions after try and catch.

let a = prompt("Enter first number")
let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Please enter valid numbers");

}
let sum = parseInt(a)+parseInt(b)

console.log("The sum of numbers is: ",sum)


function printProduct(){
    let x= 1;

    try {
        console.log("The product of numbers: ",sum*x)
        return true
    }
     catch (error) {
        console.log("Error aa gya bhai")
        return false
    }
    finally{
        console.log("If i do not add this finally then this line would not get printed kyunki mera function try/catch chlaa kar true or false return krke bahr chlaa jaata. but finally iski execution ko mandetory krega. hence finally is used in functions after try and catch. ")
    }
}

let c = printProduct();