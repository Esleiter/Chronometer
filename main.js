let ms = 0;
let s = 0;
let m = 0;
let chronometer;

function Start () {
    chronometer = setInterval(Increase, 10);
    document.getElementById("play").disabled = true;
}

function Pause () {
    clearInterval(chronometer)
    document.getElementById("play").disabled = false;
}

function Stop () {
    clearInterval(chronometer)
    ms = 0;
    s = 0;
    m = 0;
    document.getElementById("play").disabled = false;
}
        
function Increase () {
    ms++;
    mseg = Math.trunc(((ms / 100) - s) * 100);
    document.getElementById("ms").innerHTML = mseg;
    if (s >= 60) {
        ms = 0;
        m++;
    }
    s = Math.trunc(ms / 100);
    document.getElementById("s").innerHTML = s;
    document.getElementById("m").innerHTML = m;
}