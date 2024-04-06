function multiplyBy5(num){
    return numb*5
}

multiplyBy5.power = 2;

console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype);
//

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const ray = new createUser("ray" , 25)
const shai = new createUser("shai" , 250);

ray.printMe();
ray.increment();
ray.printMe();