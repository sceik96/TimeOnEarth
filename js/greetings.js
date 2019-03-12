
function showTime() {
  var date = new Date(),
      hours = date.getHours(), // 0 - 23
      minutes = date.getMinutes(), // 0 - 59
      seconds = date.getSeconds(), // 0 - 59
      greeting = document.getElementById('greeting'),
      body = document.getElementsByTagName('body'),
      Tl1 = new TimelineMax({repeat: -1});

  if (hours >= 0) {
      greeting.innerHTML = 'Goodnight, Martian.';
      Tl1.set(body, {backgroundImage: "url('img/patternNight.png')"});
      Tl1.set("#greeting", {color: "white"});      
  }

  if (hours >= 6) {
      greeting.innerHTML = 'Good morning, Martian';
      Tl1.set(body, {backgroundImage: "url('img/patternDay.png')"});
      Tl1.set("#greeting", {color: "black"});
      Tl1.set("#clockbg", {fill: "white", stroke: "black"});
  }

  if (hours >= 12) {
      greeting.innerHTML = 'Good afternoon, Martian';
      Tl1.set(body, {backgroundImage: 'url("img/patternDay.png")'});
      Tl1.set("#greeting", {color: "black"});
      Tl1.set("#clockbg", {fill: "white", stroke: "black"});

  }

  if (hours >= 18) {
      greeting.innerHTML = 'Good evening, Martian';
      Tl1.set(body, {backgroundImage: 'url("img/patternNight.png")'});
      Tl1.set("#greeting", {color: "white"});
  }

}

showTime();
