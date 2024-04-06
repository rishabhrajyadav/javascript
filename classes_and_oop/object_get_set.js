const User = {
    _email: "r@rry.com",
    _pass: "asdf",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this_email = value;
    }
}


const yrr = Object.create(User)
console.log(yrr.email);