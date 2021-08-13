var playing=false;
var score;
var action;
var x;
var correctans;
var wrongans;
function startEvent(){
    if(playing==true){
        location.reload();
    }
    else{
        playing=true;
        ques();
        score=0;
        x=60;
        document.getElementById('points').innerHTML=score;
        show('timer');
        document.getElementById('counter').innerHTML=x;
        document.getElementById('start').innerHTML="RESET GAME";
        startCounting();
}
}
for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=
    function(){
    if(playing==true){
        if(this.innerHTML==correctans){
            score++;
           var audio1=new Audio("points-earn.wav");

           audio1.play(); document.getElementById('points').innerHTML=score;
            hide('alertwrg');
            show('alertcrt');
            setTimeout(function(){hide('alertcrt')},1000);
            ques();
        }
        else{
            var wrg=new Audio("wrong.wav");
            wrg.play();
            hide('alertcrt');
            show('alertwrg');
            setTimeout(function(){hide(alertwrg)},1000);
        }
    }
}
    
}



function startCounting(){
    action=setInterval(function(){x-=1;document.getElementById('counter').innerHTML=x;
    if(x==0){
        stopCounting();
        if(score<20){
        document.getElementById('gameover').innerHTML="GAME OVER!!<BR />YOUR POINTS IS "+score+"<br />YOU CAN SCORE MORE!!";
        show('gameover');
        }
        else if(20<score<30){
        document.getElementById('gameover').innerHTML="GAME OVER!!<BR />YOUR POINTS IS "+score+"<br />GOOD JOB!!";
        show('gameover');
        }
        else{
        document.getElementById('gameover').innerHTML="GAME OVER!!<BR/>YOUR POINTS IS "+score+"<br />EXCELLENT JOB!!";
        show('gameover');
        }
        
        document.getElementById('start').innerHTML="START GAME";
        hide('timer');
        score=0;
        playing=true;
        
    }},1000)
    
}
function stopCounting(){
    clearInterval(action);
    var audio=new Audio("game-end.wav");
    audio.play();
}
function show(ID){
    document.getElementById(ID).style.display="block";
}
function hide(ID){
    document.getElementById(ID).style.display="none";
}

function ques(){
    var a= 1+(Math.round(Math.random()*9));
    var b=1+(Math.round(Math.random()*9));
    display.innerHTML=a+"X"+b;
    correctans=a*b;
    var crtbox=1+(Math.round(Math.random()*3));
   
        document.getElementById("box"+crtbox).innerHTML=correctans;
     var answers=[correctans];
    for(i=1;i<5;i++){
        if(i!=crtbox){
            do{
             wrongans=(1+(Math.round(Math.random()*9)))*(1+(Math.round(Math.random()*9)));
            }
            while(answers.indexOf(wrongans)>-1)
        document.getElementById("box"+i).innerHTML=wrongans;
            answers.push(wrongans);
        }}
    
    
    
    
}

var display= document.getElementById('question');
document.getElementById("start").onclick=startEvent
