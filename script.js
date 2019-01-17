var count=10;
var totalTime=0.0;
var start=new Date().getTime();
document.getElementById("timeTaken").innerHTML="Chances left: "+count;

appearAfterDelay();

function makeShapeAppear(){
  var top=Math.random()*380;//as the total height is 680, so width of 300 + this top of 380 = 680
  var left=Math.random()*1300;//as the total width is 1600, so width of 300 + this left of 1300 = 1600
  var width=(Math.random()*200)+100;//it is done this way to set min width because random will generate a number between 0 and 200 and if it is 0 or 1 or 2 or 3 etc, then it will be very small ie nearly invisible
  if(Math.random()>0.5)
  document.getElementById("shape").style.borderRadius="50%";
  else
  document.getElementById("shape").style.borderRadius="0";

  // console.log("top "+top+" left "+left+" width "+width);
  document.getElementById("shape").style.backgroundColor=getRandomColor();
  document.getElementById("shape").style.height=width+"px";
  document.getElementById("shape").style.width=width+"px";
  document.getElementById("shape").style.top=top+"px";
  document.getElementById("shape").style.left=left+"px";
  document.getElementById("shape").style.display="block";
  start=new Date();
}

//to get random color each time
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// setTimeout(makeShapeAppear, 1000);//to show shape after 1 second and it will not repeat again and again
// setTimeout(makeShapeAppear, Math.random()*2000);//to show after some random seconds

function appearAfterDelay(){
  var startingTime=Math.random()*20;
  // console.log(startingTime);
  setTimeout(makeShapeAppear, startingTime);
}

document.getElementById("shape").onclick=function(){

  count--;

  document.getElementById("shape").style.display="none";
  var end=new Date().getTime();
  var timeTaken=(end-start)/1000;
  // console.log("time taken: "+timeTaken);
  appearAfterDelay();
  totalTime+=timeTaken;
  if (count==0)
    document.getElementById("timeTaken").innerHTML="No Chances left<br>Time taken: "+timeTaken+" sec";
  else
  document.getElementById("timeTaken").innerHTML="Chances left: "+count+"<br>Time taken: "+timeTaken+" sec" ;

  if(count<=0){
    document.getElementById("testShape").style.display="none";
    document.getElementById("startAgainDiv").style.display="block";
    document.getElementById("totalTime").innerHTML="Total time taken: "+totalTime;
    var avgTime=totalTime/10;
    document.getElementById("avgTime").innerHTML="Average time: "+avgTime;
    // timeTaken=0.0;
    return;
  }
}

document.getElementById("startAgain").onclick=function(){
  document.getElementById("startAgainDiv").style.display="none";
  document.getElementById("testShape").style.display="block";
  document.getElementById("timeTaken").innerHTML="";
  count=10;
  totalTime=0.0;
  start=new Date().getTime();
  document.getElementById("timeTaken").innerHTML="Chances left: "+count;
}



// document.getElementById("displayButton").onclick=function(){
//   document.getElementById("shape").style.display="block";
//   document.getElementById("displayButton").style.visibility="hidden";
//   start=new Date().getTime();
// }
