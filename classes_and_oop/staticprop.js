class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const rr = new User("rr")
//console.log(rr.createId())

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

const rry = new Teacher("rry")
console.log(rry.createId())