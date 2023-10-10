
var time = 60;
var score = 0;
var hitval;

function makebubble(){
    var ball = "";
    for(let i = 0;i<216;i++){
        let val = Math.floor(Math.random()*10);
        ball += ` <div class="ball"><h2>${val}</h2></div>`
    }
    document.querySelector("#bottom").innerHTML = ball;
}
function hitfun(){
    hitval = Math.floor(Math.random()*10);
    document.querySelector(".num").innerHTML = hitval;
}

function Timeinterval(){
    setInterval(function (){
        if(time>0) time--;
        else{
            document.querySelector("#bottom").innerHTML =`<div class ="game">
            <h2>Game Over</h2>
            <span>${score}</span>
            </div>`;
            
        }
        
        document.querySelector(".num2").innerHTML = time;
    },1000)
}
function Score(){
    score += 10;
    document.querySelector(".num3").innerHTML = score;
}

document.querySelector("#bottom").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum == hitval){
        makebubble();
        hitfun();
        Score();

    }
})
makebubble();
hitfun();
Timeinterval();
