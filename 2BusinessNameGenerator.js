let bng=Math.random()
console.log(bng)
if (bng<0.3){
    first="Amazing"
}
else if (bng<=0.6 && bng>=0.3){
    first="Lovely"
}
else{
    first="Fabulous"
}
if (bng<0.3){
    second=" ice-cream "
}
else if (bng<=0.6 && bng>=0.3){
    second=" slime "
}
else{
    second=" pastry "
}
if (bng<0.3){
    third="brothers"
}
else if (bng<=0.6 && bng>=0.3){
    third="And sons"
}
else{
    third="Cooperations"
}


console.log(first+second+third)