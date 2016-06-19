// Reveal.addEventListener('inhoudanimatie', function() {
//     console.log("werkt");
//     $(document.body).click(function() {
//         $("#test").toggle("slide");
//     });
// });

Reveal.addEventListener('inhoudanimatie', function(event) {
   $("#test").toggle("slide");
}, false);

var myVideo = document.getElementById("intro_video");
Reveal.addEventListener('vid', function(event) {
   myVideo.play();
   if (myVideo.mozRequestFullScreen) {
    myVideo.mozRequestFullScreen();
  } else if (myVideo.webkitRequestFullScreen) {
    myVideo.webkitRequestFullScreen();
  } 
}, false);