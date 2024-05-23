

function checkTime(i) {
    if (i < 10) 
        {i = "0" + i};  
    
    return i;
  }

var msecond=0
var second=0
var minute=0
var hour=0

function ms() {
    document.querySelector(".millisecond").innerHTML =checkTime(msecond);
    document.querySelector(".second").innerHTML =checkTime(second);
    document.querySelector(".minute").innerHTML =checkTime(minute);
    document.querySelector(".hour").innerHTML =checkTime(hour);
    msecond++
    if (msecond==100) {
        msecond=0
        second++
    }
    if (second==60) {
        second=0
        minute++
    }
    if (minute==60) {
        minute=0
        hour++
    }
    if (hour==24) {
        hour=0
        minute=0
        second=0
        msecond=0
    }
        setTimeout(ms, 10)
}



function start() {
    ms()
       
    }