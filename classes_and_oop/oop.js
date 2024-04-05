const user = {
    username: "rry",
    loginCount: 8,
    signedIn: true,

    getUserDetail: function(){
        //console.log("got user detail from database")
        //console.log(`Username : ${this.username}`)
        console.log(this)
    }
}

console.log(user.username);
//console.log(user.getUserDetail());
console.log(this);

function User(username, logincount, isLoggedIn){
    this.username = username
    this.loginCount = logincount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("rry",12,true);
const userTwo = new User("Rishabh",13,false)
console.log(userOne.constructor);
console.log(userTwo);
