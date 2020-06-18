// Creating a digital clock using setInterval() method.

function displayTime() {
    let date = new Date();
    let time  = date.toLocaleTimeString();
    let dateTime = date.toLocaleDateString();

    document.querySelector('.date').textContent = dateTime;    
    document.querySelector('.clock').textContent = time;
}

displayTime();
const createClock = setInterval(displayTime, 1000);