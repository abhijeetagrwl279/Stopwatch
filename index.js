//declaring variables
const startstopbtn = document.querySelector('#startStopBtn');
const resetbtn = document.querySelector('#resetBtn');
const timer = document.querySelector('#timer');
console.log(timer);
let flag = 0;
let hr = 0;
let min = 0;
let sec = 0;
const icon = startstopbtn.children[0];
startstopbtn.addEventListener('click', function (e) {
    if (startstopbtn.getAttribute("class") === "startbtn") {
        startstopbtn.setAttribute("class", "stopbtn");
        icon.setAttribute("class", "fa fa-pause");
        console.log(icon);
        flag = 1;
    }
    else {
        startstopbtn.setAttribute("class", "startbtn");
        icon.setAttribute("class", "fa fa-play");
        flag = 0;
    }
});
resetbtn.addEventListener('click', function (e) {
    flag = 0;
    hr = 0;
    min = 0;
    sec = 0;
    startstopbtn.setAttribute("class", "startbtn");
    icon.setAttribute("class","fa fa-play");
    display();
});

function stopwatch() {
    if (flag == 0) {
        return;
    }
    else {
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
        }
        if (min == 60) {
            min = 0;
            hr++;
        }
        display();
    }
}
function display() {
    let displaytimer = "";
    if (hr == 0) {
        displaytimer += "00";
    }
    else if (hr < 10) {
        displaytimer += "0";
        displaytimer += hr.toString();
    }
    else {
        displaytimer += hr.toString();
    }
    displaytimer += ":";
    if (min == 0) {
        displaytimer += "00";
    }
    else if (min < 10) {
        displaytimer += "0";
        displaytimer += min.toString();
    }
    else {
        displaytimer += min.toString();
    }
    displaytimer += ":";
    if (sec == 0) {
        displaytimer += "00";
    }
    else if (sec < 10) {
        displaytimer += "0";
        displaytimer += sec.toString();
    }
    else {
        displaytimer += sec.toString();
    }
    timer.children[0].innerText = displaytimer;
}

window.setInterval(stopwatch, 1000);