let obj =  {
    a : 1,
    b : "Garry",
    c : "Maths"
}
obj.d = 99;
obj.e = "DSA";
obj.f = 100;
console.log(obj);

let objPlacement = {
    aa : "placed",

    bb : "Google",

    cc: "Joining - 2027 Summer",

    dd : " Internship+FTE"
}

objPlacement.__proto__ = obj;
console.log(objPlacement);   
console.log(objPlacement.a);   
console.log(objPlacement.aa);   
console.log(objPlacement.b);   
console.log(objPlacement.bb);   
console.log(objPlacement.d);   

//------------using oops----------------

class placementRecord{
    constructor(fullname){
        this.fullname = fullname;
        console.log("Congratulations ! You have been placed.")
    }

    offerletter(){
        console.log("This is your offer letter")
    }

    greetings(){
        console.log("We are looking forward for your joining by Summer-2027")
    }

}
 let Gursimran = new placementRecord("Gursimrann19");
 console.log(Gursimran)
 console.log(Gursimran.greetings())
 console.log(Gursimran.offerletter())

class placementCSE extends placementRecord{
    constructor(fullname){
        super(fullname); //use super if u are callign parent's constructor
        this.fullname = fullname;
        console.log(fullname)

    }
    offerletter(){
        super.offerletter();
        console.log("Welcome to infosys")
    }
}

let Rhythm = new placementCSE("Rhythm Challana");
console.log(Rhythm)
console.log(Rhythm.greetings())
console.log(Rhythm.offerletter())

let Saroj = new placementCSE("Saroj Kumari");
Saroj instanceof placementCSE

Saroj instanceof placementRecord //as saroj belongs to placementCSE and placementCSE belongs to the parent class placementRecord