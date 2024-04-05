class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username , email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourses(){
        console.log("A new course is added")
    }
}
const r = new User("r","r@!23","34")

const rry = new Teacher("rry","rry@!23","1234")
rry.addCourses();
rry.logMe();

console.log(rry instanceof Teacher);
console.log(rry instanceof User);
console.log(r instanceof Teacher);
console.log(r instanceof User);
