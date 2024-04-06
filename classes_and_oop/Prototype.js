let myName = "rishabh    "

console.log(myName.length);

String.prototype.trueLength = function(){
    console.log(this.trim().length)
}

myName.trueLength();

let myHeros = ["thor" , "spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman: "sling",

    getSpideyPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.rishabh = function(){
    console.log(`rishabh is present in all objects`);
}

//heroPower.rishabh();
myHeros.rishabh();
myName.rishabh();
//myHeros.trueLength();

//inheritance

const User = {
    name: "rry",
    email: "rr@t"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

"orcwarlord".trueLength();
