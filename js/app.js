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
  var images = ["alien", "duke", "eyes", "labyrinth", "jack", "ziggy", "alien", "duke", "eyes", "labyrinth", "jack", "ziggy"];
  var counter = 1;

  // create buttons

  for (i=0; i<images.length; i++) {
    var newButton = document.createElement("button");
    // newButton.setAttribute('data-img', images[i]);
    newButton.addEventListener('click', function() {
      var randomIndex = Math.floor(Math.random() * images.length-1);
      var randomImage = images.splice(randomIndex, 1);

      if (counter % 2 === 0 ) {
        console.log("second click");
      } else {
        console.log("first click");
      }
      this.innerHTML = "<a href='#'><img src='images/" + randomImage + ".jpg'></a>";
      counter++;
    });
    wrapper.appendChild(newButton);
  }

// Insert an image in the DOM

// var result = document.getElementById('result');
// result.innerHTML = "<img src='https://1.bp.blogspot.com/-MpnaAEObdws/VyfEFRLtbyI/AAAAAAAADxM/bDJN44Vvgf0u3KxcqnY2gcPzLmTofPDPwCKgB/s1600/29.%2B%25E2%2580%259CI%2Bdon%2527t%2Bknow%2Bwhere%2BI%2527m%2Bgoing%2Bfrom%2Bhere%252C%2Bbut%2BI%2Bpromise%2Bit%2Bwon%2527t%2Bbe%2Bboring.%25E2%2580%259D%2B%25E2%2580%2595%2BDavid%2BBowie.JPG'>";

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
