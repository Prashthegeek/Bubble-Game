//global variables
let score=0;
let hitrn=0;
function makeButton(){
    let clutter=``;
    for(let i=0;i<160;i++){
        let rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.getElementById('panel-btm').innerHTML=clutter;
}

function hit(){
    hitrn = Math.floor(Math.random()*10);
    document.getElementById('hit').innerHTML=hitrn;
    
}
function runTimer(){
    let time=15;
    const timer=setInterval(function(){
        if(time>0){
            time--;
            document.getElementById('timer').innerHTML=time;
        }else{
            clearInterval(timer);
            document.getElementById('panel-btm').innerHTML=`<div id="gmo">
                                                            <h1>Game Over</h1>
                                                            <button id="btn">Play again</button>
                                                            </div>`
       
        }
    },1000)
}
makeButton();
hit();
runTimer();


function increaseScr(){
    score+=10;
}
function decreaseScr(){
    score-=10;
}

document.getElementById('panel-btm').addEventListener('click',(e)=>{
    let hitEle = Number(e.target.innerHTML);
    if(hitEle===hitrn){
        increaseScr();
        document.getElementById('scrBox').innerHTML=score;
        makeButton();
        hit();
    }else if(hitEle>hitrn || hitEle<hitrn){
        decreaseScr(); // <<<<------
        document.getElementById('scrBox').innerHTML=score; // <<<<-----
        makeButton();
        hit();
    }
})

//Restart
console.log(
    document.getElementById('btn'));

setTimeout(()=>{
    //For check
    console.log(document.getElementById('btn')); 
    document.getElementById('btn').addEventListener('click',function(e){ //Added event 
        console.log(e.target.innerHTML+'  clicked!!!!');
        makeButton();
        hit();
        runTimer();
        score=0;
        document.getElementById('scrBox').innerHTML=score;
    })
    
},16000)  //after 16 sec, code inside setTimeOut will work