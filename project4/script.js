let timer = 60;
let score = 0;
let hitVal= 0;




function makeBubble(){
    let bubble="";
    for(let i=1; i<=168; i++){
    let num = Math.floor(Math.random()*10);
    bubble += `<div class="bubble">${num}</div>`;
    }
    let tab = document.querySelector(".tab-bottom");
    tab.innerHTML = bubble;
}


function changeTime(){
    let timefun = setInterval(()=>{
        if(timer > 0){
            timer--;
            document.querySelector("#time").textContent = timer;
        }
        else{
            clearInterval(timefun);
            document.querySelector(".tab-bottom").innerHTML = "<h1> Game Over</h1>"
        }
    },1000)
}
function changeScore(){
    score += 10;
    document.querySelector("#scores").textContent = score;
}
function getNewHit(){
    hitVal = Math.floor(Math.random()*10);
   document.querySelector("#hit").textContent = hitVal;


}


document.querySelector(".tab-bottom")
.addEventListener("click",function(dets){
    let select = Number(dets.target.textContent);
     if(select === hitVal){
        changeScore();
         makeBubble();
         getNewHit();
    }
})


makeBubble(); 
changeTime();