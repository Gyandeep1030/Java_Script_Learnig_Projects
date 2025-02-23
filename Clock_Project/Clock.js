const clock = document.getElementById('Clock');

setInterval(()=>{
    let time = new Date();
    clock.innerHTML = time.toLocaleTimeString();

}, 1000)