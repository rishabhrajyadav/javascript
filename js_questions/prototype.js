//Prototype : more like a linkage

//factory function : a function that can construct an object
//problems : addition of new functionality , Memory consumption increases with every object

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
    }
}

const stud1 = createStudents("Rishabh",91)
stud1.increment()

const stu2 = createStudents("Saharsh",92)
stu2.increment()

const stu3 = createStudents("Hirendra",93)
stu3.increment()

console.log(stud1,stu2,stu3)