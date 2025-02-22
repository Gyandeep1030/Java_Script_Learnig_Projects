const form = document.querySelector('form');

form.addEventListener('submit' , (e)=>{
    e.preventDefault();
const Height = document.querySelector('#Height').value;     
const Weight = document.querySelector('#Weight').value;
const Result = document.querySelector('#Result');

Result.innerHTML= `your BMI is ${[Weight/ Height/ Height]*10000}`


});