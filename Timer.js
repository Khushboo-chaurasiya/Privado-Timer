/* Variable declaration and holding value */
var h1 = document.getElementsByTagName('h1')[0],
    Start = document.getElementById('Start'),
    Pause = document.getElementById('Pause'),
    Reset = document.getElementById('Reset'),
    seconds = 0, minutes = 0, t;

    Pause.style.display = "none";
    Reset.style.display = "none";

/* Update timer value on UI */
const add = () => {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    if(minutes == 5 && seconds == 1){
        Pause.style.display = "none";
        Start.style.display = "none";
        Reset.style.display = "block";
        h1.textContent = "00:00";
        seconds = 0; minutes = 0;
        clearTimeout(t);
        h1.style.color = "red";
    } else{
        h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
        timer();
    }
}



/* Function to add 1 sec to timer */
const timer = () => {
    t = setTimeout(add, 1000);
}

/* Start button */
Start.onclick = function() {
    timer();
    Pause.style.display = "block";
    Start.style.display = "none";
}

/* Pause button */
Pause.onclick = function() {
    clearTimeout(t);
    Pause.style.display = "none";
    Start.style.display = "block";
}

/* Reset button */
Reset.onclick = function() {
    location.reload();
}