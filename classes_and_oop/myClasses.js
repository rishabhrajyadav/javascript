//ES6

class User {
    constructor(username,email,password){
      this.username = username;
      this.email = email;
      this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


const rry = new User("rry", "rry@234" , "123");
console.log(rry.encryptPassword());
console.log(rry.changeUsername());

//behind the scenes

function Userr(username,email,password){
      this.username = username;
      this.email = email;
      this.password = password
}

Userr.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

Userr.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const rryy = new Userr("rryy", "rryy@234" , "123456");
console.log(rryy.encryptPassword());
console.log(rryy.changeUsername());