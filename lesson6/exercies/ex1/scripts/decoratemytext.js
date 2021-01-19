var checkBoxBingElem;
var txtDecoElem;

window.onload = function() {
    txtDecoElem = document.getElementById("textDeco");
    
    checkBoxBingElem = document.getElementById("checkBoxBling");
    checkBoxBingElem.onchange = checkBoxOnchangeHandler;

    let btn = document.getElementById("btnDeco");    
    btn.onclick = btnOnclickHandler;
}

function btnOnclickHandler(){
    let timerId = setInterval(() => {
        let computedStyle = getComputedStyle(txtDecoElem);
        let fontSize = computedStyle.fontSize;
        txtDecoElem.style.fontSize = parseInt(fontSize) + 2 + "px";
    },500);
    
}

function checkBoxOnchangeHandler(){    
    if(checkBoxBingElem.checked == true){
        txtDecoElem.style.fontWeight = "bold";
        txtDecoElem.style.color = "green";
        txtDecoElem.style.textDecoration = "underline";
    }
    else{
        txtDecoElem.style.fontWeight = "normal";
        txtDecoElem.style.color = "black";
        txtDecoElem.style.textDecoration = "none";
    }
}
