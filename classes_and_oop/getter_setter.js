class User{
    constructor(email,pass){
        this.email = email;
        this.pass = pass;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value.toUpperCase();
    }

    get pass(){
       return this._pass.toUpperCase()
    }

    set pass(value){
        this._pass = value.toUpperCase();
     }
}

const rishabh = new User("ri@shabh.com" , "123")
console.log(rishabh.email);