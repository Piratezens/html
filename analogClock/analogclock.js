const { createElement } = require("react");

const second = document.querySelector('#seconds');
const minute = document.querySelector('#minutes');
const hour = document.querySelector('#hours');

function updateClock() {
    const time = new Date();

    const gethour = time.getHours();
    const getminute = time.getMinutes();
    const getseconds = time.getSeconds();

    const secondAngle = getseconds * 6;
    const minuteAngle = getminute * 6 + getseconds * 0.1;
    const hourAngle = (gethour % 12) * 30 + getminute * 0.5;

    second.style.transform = `rotate(${secondAngle}deg)`;
    minute.style.transform = `rotate(${minuteAngle}deg)`;
    hour.style.transform = `rotate(${hourAngle}deg)`;
    timed.innerHTML='<span>`${hour}`</span> <span>`${minute}`</span>'
}

updateClock();
setInterval(updateClock, 1000);
const digital_time=document.querySelector('#digital_time');
const timed=document.createElement('div')
timed.style.color='white';

