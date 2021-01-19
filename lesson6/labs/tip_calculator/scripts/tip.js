var subtotalElem;
var tipElem;
var totalElem;

window.onload = function() {
    subtotalElem = document.getElementById('subtotal');
    tipElem = document.getElementById('tip');
    totalElem = document.getElementById('total');
    var btn = document.getElementById("btn");
    btn.onclick = calcTip;
}

function calcTip() {    
    var subtotal = subtotalElem.value;
    var tip = tipElem.value;
    var subTotalIntVal = parseInt(subtotal);
    var total = subTotalIntVal + subTotalIntVal * tip/100;
    totalElem.innerHTML = '$' + total;
}