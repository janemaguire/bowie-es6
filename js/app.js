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

  function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  var wrapper = document.getElementById('wrapper');
  var images = ["alien", "duke", "eyes", "labyrinth", "jack", "ziggy", "blackstar", "coat", "alien", "duke", "eyes", "labyrinth", "jack", "ziggy", "blackstar", "coat"];
  images = shuffle(images);
  console.log(images);
  var counter = 1;
  var moves = [];
  var clickedElements = [];

  // create buttons

  for (i=0; i<images.length; i++) {
    var newButton = document.createElement("button");
    // newButton.innerHTML = "<img src='images/back.jpg'>";
    newButton.setAttribute('data-img', images[i]);
    newButton.addEventListener('click', function() {
      var selection = this.getAttribute('data-img');

      moves.push(selection);
      clickedElements.push(this);
      console.log("MOVES:", moves);
      if (!this.innerHTML) {
        this.innerHTML = "<a class='clicked' href='#'><img src='images/" + selection + ".jpg'></a>";
        // var randomIndex = Math.floor(Math.random() * images.length-1);
        // var randomImage = images.splice(randomIndex, 1);

        if (counter % 2 === 0 ) {
          if(moves[0] === moves[1] ) {
            console.log("match");
            moves = [];
            clickedElements = [];

          } else {
            setTimeout(function() {
              clickedElements[0].innerHTML = "";
              clickedElements[1].innerHTML = "";
              moves = [];
              clickedElements = [];
            }, 1000);
          }
          var matchedElements = document.getElementsByClassName('clicked');
          if (matchedElements.length === 16) {
            var result = document.getElementById('result');
            result.innerHTML = "<img src='https://1.bp.blogspot.com/-MpnaAEObdws/VyfEFRLtbyI/AAAAAAAADxM/bDJN44Vvgf0u3KxcqnY2gcPzLmTofPDPwCKgB/s1600/29.%2B%25E2%2580%259CI%2Bdon%2527t%2Bknow%2Bwhere%2BI%2527m%2Bgoing%2Bfrom%2Bhere%252C%2Bbut%2BI%2Bpromise%2Bit%2Bwon%2527t%2Bbe%2Bboring.%25E2%2580%259D%2B%25E2%2580%2595%2BDavid%2BBowie.JPG'>";
            console.log("winner");
          }


        } else {
          console.log("first click");
        }

        counter++;
      }
    });
    wrapper.appendChild(newButton);

    // if all buttons have innerHTML return message
  }




  // if (document.querySelectorAll('button').innerHTML) {
  //   console.log("winner");
  // } else {
  //   console.log("not yet");
  // }

  // Insert an image in the DOM



  //
  // function getRandomImage() {
  //   for (i=0; i<images.length; i++) {
  //     console.log(images[Math.floor(Math.random() * images.length-1)]);
  //   }
  // }
  // randomImageArray =[];
  //
  // var setTiles = function () {
  //   for (var i=0; i<images.length; i++) {
  //     var imageLocation = ((Math.floor(Math.random()*images.length)));
  //     if ($.inArray(imageLocation, randomImageArray) == -1) {
  //       randomImageArray.push(newCard);
  //     } else {
  //       i--;
  //     }
  //   }
  //   setTiles();
  //   console.log(randomImageArray);
  // };




});
