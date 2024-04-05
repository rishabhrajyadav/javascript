const promiseOne = new Promise((res,rej) =>{
    //Do an async task
    //DB calls , cryptography related, network 
    setTimeout(function(){
        console.log("async task is completed")
        res(); //this connects the creation part to consumption part
        //it is directly connected to then()
    },1000)
})

promiseOne.then(() => {
   console.log("Promise consumed");
})

new Promise((res,rej) => {
    setTimeout(()=>{
        console.log("Async task 2");
        res();
    },1000)
}).then(()=>{
    console.log("Async 2 resolved");
})

const promiseThree = new Promise((res,rej) =>{
    setTimeout(()=>{
      res({username: "rry",email: "rry@gmail.com"})
    },1000)
})

promiseThree.then((user)=>{
   console.log(user);
})

const promiseFour = new Promise((res,rej) => {
    setTimeout(()=>{
      let error = true;
      if(!error){
        res({username:"rishabh",password:12345})
      } else{
        rej("ERROR: Something went wrong")
      }
    },1000)   
})

promiseFour
.then((user)=>{
  console.log(user);
  return user.username
})
.then((username) => {
   console.log(username);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("The Promise is either resolved or rejected");
})

const promiseFive = new Promise((res,rej) => {
    setTimeout(()=>{
        let error = true;
        if(!error){
          res({username:"Javascript",password:12345})
        } else{
          rej("ERROR: JS went wrong")
        }
      },1000)  
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive //promiseFive is an object so you can't write it like this promiseFive()
        console.log(response)
    } catch (error) {
        console.log(error)
    }
    
}

consumePromiseFive();

/* async function getUser(){
    try {
        const response = await fetch("https://api.github.com/users/rishabhrajyadav")
        const data = await response.json()
        console.log(data)    
    } catch (error) {
        console.log(error)
    }
}

getUser() */

fetch("https://api.github.com/users/rishabhrajyadav")
.then((response)=>{
    return response.json()
})
.then((data)=>{
   console.log(data);
})
.catch((err)=>{
   console.log(err);
})