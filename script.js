document.addEventListener('DOMContentLoaded', () => {
  var m1 = new Audio();
  var m2 = new Audio();
  var m3 = new Audio();
  var m4 = new Audio();
  m1.src = "witcher.mp3";
  m2.src = "cyberpunk.mp3";
  m3.src = "valhalla.mp3";
  m4.src = "ezio.mp3";
  let buttons = document.querySelectorAll("button");
  buttons.forEach(square => {
    square.addEventListener('click', music)
  })

  function music(e) {
    const buttonsArray = Array.from(buttons);
    const index = buttonsArray.indexOf(e.target);
    console.log(index);
    switch (index) {
      case 0:
      var time = window.setTimeout(play1, 1000);
      break;
      case 1:
      var time = window.setTimeout(play2, 1000);
      break;
      case 2:
      var time = window.setTimeout(play3, 1000);
      break;
      case 3:
      var time = window.setTimeout(play4, 1000);
      break;

    }
  }


  function play1() {
    m2.pause();
    m3.pause();
    m4.pause();
    m1.currentTime = 0;
    m1.play();
    buttons[0].classList.add('play');
    buttons[1].classList.remove('play');
    buttons[2].classList.remove('play');
    buttons[3].classList.remove('play');
  }

  function play2() {
    m1.pause();
    m3.pause();
    m4.pause();
    m2.currentTime = 0;
    m2.play();
    buttons[1].classList.add('play');
    buttons[0].classList.remove('play');
    buttons[2].classList.remove('play');
    buttons[3].classList.remove('play');
  }

  function play3() {
    m1.pause();
    m2.pause();
    m4.pause();
    m3.currentTime = 0;
    m3.play();
    buttons[2].classList.add('play');
    buttons[0].classList.remove('play');
    buttons[1].classList.remove('play');
    buttons[3].classList.remove('play');
  }

  function play4() {
    m1.pause();
    m2.pause();
    m3.pause();
    m4.currentTime = 0;
    m4.play();
    buttons[3].classList.add('play');
    buttons[0].classList.remove('play');
    buttons[1].classList.remove('play');
    buttons[2].classList.remove('play');
  }
})
