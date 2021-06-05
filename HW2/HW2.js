var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

function computing() {
    var today = new Date();
    yy = today.getFullYear().toString().split('').map(function(item){
        return parseInt(item, 10);
    });
    mm = today.getMonth()+1;
    dd = today.getDate().toString();
    if(Number(dd) < 10){
        dd = "0" + dd;
    }
    dd = dd.split('').map(function(item){
        return parseInt(item, 10);
    });
    console.log(yy, ",", mm,",",dd);
    
    let a = yy.reduce(function (acc, currentValue){
        return acc + currentValue;
    })
    let b = Math.pow(mm, 3);
    let c = dd.reduce(function (acc, currentValue){
        return acc * currentValue;
    })
    console.log(a, b, c, a + b + c);

    btn1.innerHTML = a + b + c;    
}

function changeClass() {
    btn2.classList.toggle("item");
}

var n = 5
function duplicateButton(obj) {
    console.log(obj.id);
    var block = document.getElementById("block");
    obj.disabled = true;
    
    var newBtn = document.createElement("button");
    newBtn.id = "btn" + n;
    newBtn.innerHTML = "按鈕" + n;
    newBtn.className = "item";
    newBtn.addEventListener("click", function() {
        duplicateButton(newBtn);
    })
    block.appendChild(newBtn);
    n++;
}

function getCoordination() {
    var btnArray = document.getElementsByTagName("button");
    var item = btnArray[btnArray.length - 1];
    console.log(item);
    
    const rect = item.getBoundingClientRect();
    const x = Math.round(window.pageXOffset + rect.left);
    const y = Math.round(window.pageYOffset + rect.top);
    btn4.innerHTML = `(${x}, ${y})`;
}

btn1.addEventListener("click", function() {computing()});
btn2.addEventListener("click", function() {changeClass()});
btn3.addEventListener("click", function() {duplicateButton(btn3)});
btn4.addEventListener("click", function() {getCoordination()});