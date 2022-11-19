setInterval(setClock, 1000);
setInterval(setDigitalClock, 1000);
const secondHand = document.querySelector("[data-second-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const hourHand = document.querySelector("[data-hour-hand]");

function setClock() {
    const currentTime = new Date();
    const secondRatio = currentTime.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentTime.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentTime.getHours()) / 12;
    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();

const clockDigital = document.querySelector(".clock-digital");
const hourDigital = clockDigital.querySelector(".hour-digital");
const minuteDigital = clockDigital.querySelector(".minute-digital");
const secondDigital = clockDigital.querySelector(".second-digital");

function setDigitalClock() {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();
    hourDigital.innerText = hour;
    minuteDigital.innerText = minute;
    secondDigital.innerText = second;
}

setDigitalClock();