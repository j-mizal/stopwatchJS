let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time");

function padStart(value) {
    return String(value).padStart(2, "0");
};

document.getElementById("start-btn").addEventListener("click", startClock);

function setTime () {  
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

 function timer() {
    secondsElapsed++;
    setTime();
 }



function startClock() {
    document.getElementById("start-btn").disabled = true;
    this.style.backgroundColor = "grey";
    interval = setInterval(timer, 1000) ;

    document.getElementById("stop-btn").style.display = "block";
    document.getElementById("reset-btn").style.display = "block";

    document.getElementById("stop-btn").style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("indicator").style.visibility = "visible";
    document.getElementById("indicator").innerHTML = "⏰";
    
};

function stopClock() {
    document.getElementById("start-btn").disabled = false;

    clearInterval(interval);
    document.getElementById("start-btn").style.backgroundColor = "rgb(0, 153, 76)";
    document.getElementById("stop-btn").style.backgroundColor = "rgb(208, 0, 0)";
    document.getElementById("indicator").style.visibility = "visible";
    document.getElementById("indicator").innerHTML = "⏸️";

 
};

function resetClock() {
    stopClock();
    secondsElapsed = 0;
    setTime();
    document.getElementById("stop-btn").style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("start-btn").style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("indicator").style.visibility = "hidden";
    document.getElementById("stop-btn").style.display = "none";
    document.getElementById("reset-btn").style.display = "none";
};