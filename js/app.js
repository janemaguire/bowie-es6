document.addEventListener("DOMContentLoaded", function() {
  // randomly lay out images

  //lists but not randomly

  // images = ["red", "blue", "green", "yellow", "pink", "purple"];

  // for (i=0; i<12; i++) {
  //   var randomImages = images[Math.floor(Math.random) * 6];
  //   console.log(images[i]);
  // }
  //
  // images = ["red", "blue", "green", "yellow", "pink", "purple"];
  //
  // for (i=0; i<12; i++) {
  //   var randomImages = images[Math.floor(Math.random) * 6];
  //   console.log(images[i], images[i], images[i]);
  // }


  // console.log(images[Math.floor(Math.random) * 12]);

  // console.log(images[3]);

  // function getRandomImage() {
  //   for (i=0; i<12; i++) {
  //     console.log(images[Math.floor(Math.random() * images.length-1)]);
  //     }
  //   }

  // getRandomImage(images);
  //
  // function getRandomImage() {
  //   for (i=0; i<12; i++) {
  //     document.getElementById('a').innerHTML = (images[Math.floor(Math.random() * images.length-1)]);
  //     }
  //   }
  //
  // getRandomImage(images);


  // document.getElementsByClass('.button').innerHTML ="red";

  // var a = document.getElementById('a');
  //
  // a.innerHTML = 'hello';

  // function Image() {
  //   this.name = name;
  //   this.src = src;
  // }
  //
  // var trousers = new Image ('trousers', 'images/trousers.html');
  // var eyes = new Image ('eyes', 'images/eyes.html');
  // var labyrinth = new Image ('labyrinth', 'images/labyrinth.html');
  // var alien = new Image ('alien', 'images/alien.html');
  // var aladdin_sane = new Image ('aladdin_sane', 'images/aladdin_sane');
  // var duke = new Image ('duke', 'images/duke.html');
  //
  // document.getElementsByClass('button').innerHTML = '';

  var wrapper = document.getElementById('wrapper');
  var images = ["alien", "bolt", "duke", "eyes", "labyrinth", "trousers","alien", "bolt", "duke", "eyes", "labyrinth", "trousers"];

  for (i=0; i<images.length; i++) {
    var newButton = document.createElement("button");
    newButton.setAttribute('data-img', images[i]);
    wrapper.appendChild(newButton);
  }
  var clickableButtons = document.querySelectorAll('button');
  for (var i=0; i<images.length; i++) {
    clickableButtons[i].addEventListener('click', function() {
      //   // display image
    this.className = 'buttonClicked';
  });}
    });
