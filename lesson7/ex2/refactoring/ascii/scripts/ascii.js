var textASCIIElem;
var btnStartElem;
var btnStopElem;
var optAnimationElem;
var optSizeElem;
var checkBoxTurBoElem;
var isStart;
var isStop;
var speed;
var animationType;
var aniTimeId;

/*Tiny (7pt), Small (10pt), Medium (12pt), Large (16pt), Extra Large (24pt), XXL (32pt)*/
var FONTSIZE = [];
FONTSIZE["Tiny"]        = "7pt";
FONTSIZE["Small"]       = "10pt";
FONTSIZE["Medium"]      = "12pt";
FONTSIZE["Large"]       = "16pt";
FONTSIZE["Extra Large"] = "24pt";
FONTSIZE["XXL"]         = "32pt";

window.onload = function() {
    textASCIIElem = document.getElementById("textASCII");
    btnStartElem = document.getElementById("btnStart");
    btnStopElem = document.getElementById("btnStop");
    optAnimationElem = document.getElementById("optAnimation");
    optSizeElem = document.getElementById("optSize");
    checkBoxTurBoElem = document.getElementById("checkBoxTurbo");

    // set handler
    btnStartElem.onclick = btnStartOnclickHandler;
    btnStopElem.onclick = btnStoptOnclickHandler;
    optAnimationElem.onchange = optAnimationOnchangeHandler;
    optSizeElem.onchange = optSizeOnchangeHandler;
    checkBoxTurBoElem.onchange = checkBoxTurBoOnchangeHandler;

    // enable/disable buttons
    btnStopElem.disabled = true;

    // initialize variables
    isStart = false;
    isStop = true;
    speed = 250;
    animationType = "Blank";
}

function animationHandler(){
    let aniArr = ANIMATIONS[animationType].split("=====\n");
    let idx = 0;
    aniTimeId = setInterval(function () {
        if (idx == aniArr.length) {
            idx = 0;
        }
        textASCIIElem.style.fontSize = FONTSIZE[optSizeElem.value];
        textASCIIElem.value = aniArr[idx++];
    }, speed);
}
function btnStartOnclickHandler(){
    if(isStart == false){
        isStart = true;
        isStop = false;
        btnStartElem.disabled = true;
        btnStopElem.disabled = false;
        optAnimationElem.disabled = true;

        // update animation type if type is "custom" at this timing
        if(animationType === "Custom"){
            ANIMATIONS[animationType] = textASCIIElem.value;
        }
        animationHandler();
    }    
}

function btnStoptOnclickHandler(){    
    if(isStop == false){
        isStop = true;
        isStart = false;
        btnStartElem.disabled = false;            
        btnStopElem.disabled = true;
        optAnimationElem.disabled = false;
        clearInterval(aniTimeId);
    }    
}

function optAnimationOnchangeHandler(){
    animationType = optAnimationElem.value;
    textASCIIElem.value = ANIMATIONS[animationType];
}

function optSizeOnchangeHandler(){
    textASCIIElem.style.fontSize = FONTSIZE[optSizeElem.value];
}

function checkBoxTurBoOnchangeHandler(){
    if(checkBoxTurBoElem.checked == true){
        speed = 50;
    }
    else{
        speed = 250;
    }
    clearInterval(aniTimeId);
    animationHandler();
}