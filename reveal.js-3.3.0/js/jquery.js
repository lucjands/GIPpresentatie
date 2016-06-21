// Reveal.addEventListener('inhoudanimatie', function() {
//     console.log("werkt");
//     $(document.body).click(function() {
//         $("#test").toggle("slide");
//     });
// });

$(document).ready(function(e) {
    $('img').css('max-height',$(window).height() - 200);
});

Reveal.addEventListener('inhoudanimatie', function(event) {
   //$("#test").toggle("slide");
   $("#i2c").show("slow");
}, false);

Reveal.addEventListener('inhoud_hide', function(event) {
	//effect
	$("#i2c").hide("slow");
}, false);

Reveal.addEventListener('inhoud_hide_i2c', function(event) {
	//effect
	$("#i2c").hide(0);
}, false);

var myVideo = document.getElementById("intro_video");
Reveal.addEventListener('vid', function(event) {
	
	
	//video automatisch starten en in fullscreen
    myVideo.play();
    if (myVideo.mozRequestFullScreen) {
    	myVideo.mozRequestFullScreen();
    } else if (myVideo.webkitRequestFullScreen) {
    	myVideo.webkitRequestFullScreen();
    } 
	
}, false);

var myVideo2 = document.getElementById("gip_video2");
var myVideo3 = document.getElementById("gip_video3")
Reveal.addEventListener('vid2', function(event) {
	
	
	//video automatisch starten en in fullscreen
    myVideo2.currentTime = 0;
    myVideo3.currentTime = 4;
    myVideo3.play();
    setTimeout(function(){
        myVideo2.play();
        setTimeout(function(){
            myVideo2.currentTime= 100;
        },55000);
    },2600);
    // if (myVideo2.mozRequestFullScreen) {
    // 	myVideo2.mozRequestFullScreen();
    // } else if (myVideo2.webkitRequestFullScreen) {
    // 	myVideo2.webkitRequestFullScreen();
    // } 
	
}, false);