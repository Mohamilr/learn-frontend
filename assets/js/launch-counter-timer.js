const days = document.querySelector('#days');
const minutes = document.querySelector('#minutes');
const hours = document.querySelector('#hours');
const seconds = document.querySelector('#seconds');



const time = new Date();

// let day = time.getDay();
// let hour = time.getHours();
// let minute = time.getMinutes();
// let second = time.getSeconds();

let day = 14;
let hour = 06;
let minute = 02;
let second = 30;

function countdown () {
    second--

    if (second === 0) {
        second = 60
        minute--
    }

    if (minute === 0) {
        minute = 60
        hour--
    }

    // if (hour === 0) {
    //     minute = 60
    //     hour--
    // }
    
    days.textContent = day;

    hours.textContent = hour;

    minutes.textContent = minute;
    
    seconds.textContent = second;
}

window.setInterval(countdown, 1000);

