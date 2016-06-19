// Reveal.addEventListener('inhoudanimatie', function() {
//     console.log("werkt");
//     $(document.body).click(function() {
//         $("#test").toggle("slide");
//     });
// });

Reveal.addEventListener('inhoudanimatie', function(event) {
   //$("#test").toggle("slide");
   $("#test").show("slow");
}, false);

Reveal.addEventListener('inhoud_hide', function(event) {
	//effect
	$("#test").hide("slow");
}, false);

var myVideo = document.getElementById("intro_video");
Reveal.addEventListener('vid', function(event) {
	//effect
	$("#test").hide(0);
	
	//video automatisch starten en in fullscreen
    myVideo.play();
    if (myVideo.mozRequestFullScreen) {
    	myVideo.mozRequestFullScreen();
    } else if (myVideo.webkitRequestFullScreen) {
    	myVideo.webkitRequestFullScreen();
    } 
	
}, false);