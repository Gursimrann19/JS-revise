let aa = Math.random();
console.log(aa);

function faultycalc(a,b,oprt) {
    if (oprt== "+") {
        return b-a;
        
    }
    else if (oprt=="-" ){
        return a+b;
    }
    else if (oprt="*"){
        return a/b;
    }
    else {
        return a*b;
    }

}
function rightcalc(a,b,oprt){
    if (oprt== "+") {
        return b+a;
        
    }
    else if (oprt=="-" ){
        return a-b;
    }
    else if (oprt="*"){
        return a*b;
    }
    else {
        return a/b;
    }
}
if(aa<=0.1){
    resultt=faultycalc(8,4,"+")
}
else {
    resultt=rightcalc(8,4,"+")
}
console.log("The outcome is "+resultt);
console.log("Javascript Functions")