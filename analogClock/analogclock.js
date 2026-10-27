const second = document.querySelector('#seconds');
const minute = document.querySelector('#minutes');
const hour = document.querySelector('#hours');
const digitalTime = document.querySelector('#digital_time');

function padWithZero(value) {
    return String(value).padStart(2, '0');
}

function updateClock() {
    const time = new Date();

    const getHour = time.getHours();
    const getMinute = time.getMinutes();
    const getSeconds = time.getSeconds();

    const secondAngle = getSeconds * 6;
    const minuteAngle = getMinute * 6 + getSeconds * 0.1;
    const hourAngle = (getHour % 12) * 30 + getMinute * 0.5;

    second.style.transform = `rotate(${secondAngle}deg)`;
    minute.style.transform = `rotate(${minuteAngle}deg)`;
    hour.style.transform = `rotate(${hourAngle}deg)`;

    if (digitalTime) {
        digitalTime.textContent = `${padWithZero(getHour)}:${padWithZero(getMinute)}:${padWithZero(getSeconds)}`;
    }
    
}

updateClock();
setInterval(updateClock, 1000);
