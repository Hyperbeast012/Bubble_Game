var timer=60
var score=0
var hitrn=0;




function makeBubble(){
    
var s=""
for(var i=0;i<=151;i++){
    s += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`
}
var r=document.querySelector("#panel-bottom").innerHTML=s
}

function runTimer(){
    var timerint=setInterval(function(){
       if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer
       }
       else{
        clearInterval(timerint)
        document.querySelector("#panel-bottom").innerHTML=`<h1>Game Over</h1>`
       }
       
    },1000)
}


function getNewHit(){
     hitrn=Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=hitrn
}

function increaseScore(){
score +=10
    document.querySelector("#scoreval").textContent=score
}


document.querySelector("#panel-bottom").addEventListener("click",function(dets){
var clickednum=Number(dets.target.textContent);
if(clickednum === hitrn){
    increaseScore()
    makeBubble()
    getNewHit()
}
})
makeBubble()
runTimer()
getNewHit()

