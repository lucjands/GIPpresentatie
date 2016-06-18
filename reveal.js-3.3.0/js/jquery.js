// Reveal.addEventListener('inhoudanimatie', function() {
//     console.log("werkt");
//     $(document.body).click(function() {
//         $("#test").toggle("slide");
//     });
// });

Reveal.addEventListener('inhoudanimatie', function(event) {
   $("#test").toggle("slide");
}, false);