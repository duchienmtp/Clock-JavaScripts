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
const meridiemDigital = clockDigital.querySelector(".meridiem-digital");

function setDigitalClock() {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();
    let time = {
        hourObj: hour,
        minuteObj: minute,
        secondObj: second,
    };

    function getObjKey(obj, value) {
        return Object.keys(obj).find(key => obj[key] === value);
    }

    let objHourKey = getObjKey(time, time.hourObj);
    meridiemModifier(time, objHourKey);
    timeModifier(time, objHourKey);
    hourDigital.innerText = time.hourObj;
    
    let objMinuteKey = getObjKey(time, time.minuteObj);
    timeModifier(time, objMinuteKey);
    minuteDigital.innerText = time.minuteObj;

    let objSecondKey = getObjKey(time, time.secondObj);
    console.log(objSecondKey);
    timeModifier(time, objSecondKey);
    secondDigital.innerText = time.secondObj;
}

function timeModifier(element, key) {
    if (element[key] >= 0 && element[key] <= 9) {
        element[key] = "0" + element[key];
    }
}

function meridiemModifier(element, key) {
    if (element[key] > 12) {
        element[key] -= 12;
        meridiemDigital.innerText = "PM";
    } else {
        meridiemDigital.innerText = "AM";
    }
    
    // 0 AM and 0 PM should read as 12
    if (element[key] === 0) {
        element[key] = 12;    
    }
}


setDigitalClock();