var userScore=0;
var compScore=0;
var item=document.querySelectorAll(".item");
var textt=document.querySelector(".textt");
var s1=document.querySelector(".score1");
var s2=document.querySelector(".score2");
const computer=(att)=>{
    var arr=["rock","paper","scissor"];
   
    var userdata;
    var randnum=Math.floor(Math.random()*3);
   
    if(arr[randnum]==att){
        textt.innerHTML="IT'S A DRAW";
        textt.style.backgroundColor="grey";
        return;
    }
    if(arr[randnum]==="rock"){
userdata=(att==="paper")?"true":"false";
    }
      else if(arr[randnum]==="paper"){
        userdata=(att==="scissor")?"true":"false";
    }
    else{
        userdata=(att==="rock")?"true":"false";
    }
    //console.log("you",userdata);
    if(userdata==="true")
    { textt.innerHTML="You won ."+"your "+att+" beat the "+arr[randnum];
      textt.style.backgroundColor="green";
      userScore++;
      s1.innerHTML=userScore;

}
else{
    textt.innerHTML="You lose ."+arr[randnum]+" beat the your "+att; 
textt.style.backgroundColor="red";
compScore++;
s2.innerHTML=compScore;
}
   
   
}
item.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      var att=choice.getAttribute("id");
      //console.log(att);
      computer(att);
    });
});
button=document.querySelector("button");
button.addEventListener("click",()=>{
    
textt.innerHTML="Select any object";
s1.innerHTML=0;
s2.innerHTML=0;
textt.style.backgroundColor="black";
userScore=0;
compScore=0;
});