var tl = new TimelineLite();
tl.from (".header", 2, {height:"1000px", ease:Bounce.easeOut})
.from ("#greeting", 0.75, {opacity:"0"})
.from ("#clock", 0.75, {opacity:"0"});


window.onload = function startKlok() {

  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

	var posHours = (30 * hours)+ 0.5 * minutes ;
	var posMinutes = 6 * minutes;
	var posSeconds = 6 * seconds;

	TweenMax.set ("#hour", {
		rotation: posHours + "deg",
		ease: Elastic.easeOut.config(0.5, 0.3),
		transformOrigin:"50% 50%"
	});
	TweenMax.set ("#min", {
		rotation: posMinutes + "deg",
		ease: Elastic.easeOut.config(0.5, 0.3),
		transformOrigin:"50% 50%"
	});
	TweenMax.set ("#sec", {
		rotation: posSeconds + "deg",
		ease: Elastic.easeOut.config(0.5, 0.3),
		transformOrigin:"50% 50%"
	});

setTimeout(startKlok, 500);

}
