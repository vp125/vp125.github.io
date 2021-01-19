var minElem;
var secElem;
var timerID;

window.onload = function(){
    minElem = document.getElementById("min");
    secElem = document.getElementById("sec");
    let btn = document.getElementById("go");
    btn.onclick = btnOnclickHandler;
    timerID = null;
}

function btnOnclickHandler(){
    if(timerID === null){
        div_content.style.backgroundColor = "white";
        timerID = setInterval(magicGo,1000);
    }    
}

function magicGo(){
    let minVal = parseInt(minElem.value);
    let secVal = parseInt(secElem.value);

    if (isNaN(minVal)) {
        minVal = 0;
    }
    if (isNaN(secVal)) {
        secVal = 0;
    }

    if (secVal > 0) {
        secVal--;
        secElem.value = secVal;
    } else if (secVal == 0) {
        if (minVal > 0) {
            minVal--;
            minElem.value = minVal;
            secVal = 59;
            secElem.value = secVal;
        }
    }
    if (minVal == 0 && secVal == 0) {
        clearInterval(timerID);
        timerID = null;
        var div_content = document.getElementById("div_content");
        div_content.style.backgroundColor = "red";        
    }    
}