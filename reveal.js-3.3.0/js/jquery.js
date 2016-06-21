// Reveal.addEventListener('inhoudanimatie', function() {
//     console.log("werkt");
//     $(document.body).click(function() {
//         $("#test").toggle("slide");
//     });
// });

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