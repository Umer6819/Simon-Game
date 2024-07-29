var gamepattern = [];
var userclickpattern = [];
var buttoncolor = ["red", "green", "blue", "yellow"];
var started = false;
var level = 0;
function playsound(name) {
  var randsou = "sounds/" + name + ".mp3";
  var sound = new Audio(randsou);
  sound.play();
}
function fadeout(name) {
  $("#" + name).addClass("pressed");
  setTimeout(function () {
    $("#" + name).removeClass("pressed");
  }, 100);
}
function startover() {
  level = 0;
  gamepattern = [];
  started = false;
}
function checkanswer(currentLevel) {
  if (userclickpattern[currentLevel] === gamepattern[currentLevel]) {
    if (gamepattern.length === userclickpattern.length) {
      console.log("1");
      level++;
      userclickpattern = [];
      console.log(userclickpattern);
      $("h1").text("level " + level);
      setTimeout(nextsequence(), 14000);
    }
  } else {
    console.log("0");
    var wrongsound = "wrong";
    playsound(wrongsound);
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startover();
  }
}
$(document).on("keydown", function () {
  if (!started) {
    nextsequence();
    started = true;
    $("h1").text("level " + level);
  }
});
$(".btn").click(function () {
  var usercolorchoice = $(this).attr("id");
  userclickpattern.push(usercolorchoice);
  playsound(usercolorchoice);
  fadeout(usercolorchoice);
  console.log(userclickpattern);
  checkanswer(userclickpattern.length - 1);
});
function nextsequence() {
  userclickpattern=[];
  var randomnum = Math.floor(Math.random() * buttoncolor.length);
  var randomcolorchoice = buttoncolor[randomnum];
  gamepattern.push(randomcolorchoice);
  playsound(randomcolorchoice);
  fadeout(randomcolorchoice);
  console.log(gamepattern);
}

/*var gamepattern = [];
var usrclkpattern = [];
var level = 0;
function playsound(name) {
  var randsou = "sounds/" + name + ".mp3";
  var sound = new Audio(randsou);
  sound.play();
}
function fadeout(name) {
  $("#" + name).addClass("pressed");
  setTimeout(function () {
    $("#" + name).removeClass("pressed");
  }, 100);
}
function btnclk(){
  $(".btn").on("click",function () {
    var usrchoclr = $(this).attr("id");
    usrclkpattern.push(usrchoclr);
    console.log(usrclkpattern);
    console.log(gamepattern);
    playsound(usrchoclr);
    fadeout(usrchoclr);
    if (gamepattern.length === usrclkpattern.length) {    
    checkanswer(level);}
  });
}
$(document).keydown(function () {
  nextSequence();
});

function nextSequence() {
    $("h1").text("Level:" + level);
  var btnclr = ["red", "green", "blue", "yellow"];
  var randnum = Math.floor(Math.random() * btnclr.length);
  var randchoclr = btnclr[randnum];
  gamepattern.push(randchoclr);
  playsound(randchoclr);
  fadeout(randchoclr);
  btnclk();
}
function checkanswer(level) {
    for (var i = 0; i < usrclkpattern.length; i++) {
      if (gamepattern[level] !== usrclkpattern[level]) {
        console.log("wrong answer");
        usrclkpattern.length = 0;
        gamepattern.length=0;
        return;
      } else 
      {console.log("right answer");
      setTimeout(function () {
        console.log(usrclkpattern);
        usrclkpattern.length = 0;
        console.log(usrclkpattern);
        console.log(gamepattern);
        level=level+1;
        nextSequence();
      }, 1000);}
    }
  }
*/
