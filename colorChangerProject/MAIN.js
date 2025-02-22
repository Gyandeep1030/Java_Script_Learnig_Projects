const button = document.querySelectorAll('.button');
const Body = document.querySelector("body");

button.forEach(button => {
    console.log(button);
    button.addEventListener('click' , (event) => {
        if(event.target.id === 'red' ){
            Body.style.background = event.target.id;
        }
        if(event.target.id === 'blue' ){
            Body.style.background = event.target.id;
        }
        if(event.target.id === 'white' ){
            Body.style.background = event.target.id;
        }
        if(event.target.id === 'gray' ){
            Body.style.background = event.target.id;
        }
        if(event.target.id === 'pink' ){
            Body.style.background = event.target.id;
        }
        if(event.target.id === 'yellow' ){
            Body.style.background = event.target.id;
        }
        if(event.target.id === 'black' ){
            Body.style.background = event.target.id;
        }

    })
    
});
