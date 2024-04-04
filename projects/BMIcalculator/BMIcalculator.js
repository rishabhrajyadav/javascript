const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const message = document.querySelector('#message')
    let bmi;
    if(height === '' || height <= 0 || isNaN(height)){
       results.innerHTML = "please give a vaild height"
    } else if(weight === '' || weight <= 0 || isNaN(weight)){
        results.innerHTML = "please give a vaild weight"
     } else {
        bmi = (weight / ((height*height)/10000)).toFixed(2)
        //show the result
        results.innerHTML = `<span>${bmi}</span>`
     }

     if(bmi < 18.6){
        message.innerHTML = "Under Weight"
    }else if(18.6 <= bmi && bmi < 24.9){
        message.innerHTML = "Normal Range"
    }else if(bmi >= 24.9){
        message.innerHTML = "Over Weight"
    }

})