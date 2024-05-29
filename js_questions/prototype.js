//Prototype : more like a linkage , Linkagae to something

//factory function : a function that can construct an object
//problems : addition of new functionality , Memory consumption increases with every object's function

/* function createStudents(name,marks){
    const obj = {}
    obj.name = name;
    obj.marks = marks;
    obj.increment = function(){
        obj.marks++;
    }

    return obj;
} */

//Solution
//{}.prototype = utility
 
function createStudents(name,marks){
    const obj = Object.create(utility)
    obj.name = name;
    obj.marks = marks;

    return obj;
}

const utility = {
    increment : function(){
        this.marks++;
    },
    decrement : function(){
        this.marks--;
    }
    
}

const stud1 = createStudents("Rishabh",91)
stud1.increment()

console.log(Object.getPrototypeOf(stud1) === utility)
console.log(stud1.__proto__ == utility)

Object.prototype.hello = function(){
    console.log(`Hello ${this.name}`)
}

/* const stu2 = createStudents("Saharsh",92)
stu2.increment()
stu2.decrement()

const stu3 = createStudents("Hirendra",93)
stu3.increment()
stu3.decrement() */

//console.log(stud1,stu2,stu3)

function CreateStudents(name){
  this.name = name
}

CreateStudents.prototype.ask = function(){
  console.log("Ask")
} 

const sunny = new CreateStudents("sunny");

//console.log(sunny.__proto__ === CreateStudents.prototype)
//sunny.ask()

{}
const person = {
    age: 90
}

const animal = {
    name : "Dog"
}

//animal.__proto__ = person;
Object.setPrototypeOf(animal,person)
const bird = {
    name: "Parrot"
}

//bird.__proto__ = animal
Object.setPrototypeOf(bird,animal)
/* console.log(bird);
console.log(Object.getPrototypeOf(bird)) */

//Inheritance in javascript
function Animal(){
    this.legs = 4
}

function Dog(){
    Animal.call(this);
    this.showLegs = function(){
        console.log(this.legs)
    }
}

Dog.prototype = Animal
Dog.prototype.constructor = Dog;

const myPet = new Dog();
myPet.showLegs()
console.log(myPet instanceof Dog)
console.log(Animal.constructor = Dog.constructor)

