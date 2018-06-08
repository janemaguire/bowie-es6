document.addEventListener("DOMContentLoaded", function() {

  // Fisher Yates Shuffle
  function shuffle(array) {
    let m = array.length, t, i;
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

  let wrapper = document.getElementById('wrapper');
  let images = ["alien", "duke", "eyes", "labyrinth", "jack", "ziggy", "blackstar", "coat", "alien", "duke", "eyes", "labyrinth", "jack", "ziggy", "blackstar", "coat"];
  images = shuffle(images);
  let counter = 1;
  let moves = [];
  let clickedElements = [];

  // Create buttons, set a data attribute and add event listener

  images.forEach(function(image) {
    let newButton = document.createElement("button");
    newButton.setAttribute('data-img', image);
    newButton.addEventListener('click', function() {

      // On click use data attribute to push selected data into moves array and selected button into clickedElements array
      let selection = this.getAttribute('data-img');
      moves.push(selection);
      clickedElements.push(this);

      // If the button is empty, assign an image based on it's data attribute
      if (!this.innerHTML) {
        this.innerHTML = "<a class='clicked' href='#'><img src='images/" + selection + ".jpg'></a>";

        // If it is an even numbered click
        if (counter % 2 === 0 ) {

          // If the data attributes of the two clicked buttons are the same, empty moves, empty clickedElements
          if(moves[0] === moves[1] ) {
            moves = [];
            clickedElements = [];

          // If they do not match, clear images after one second, empty moves array, empty clickedElements array
          } else {
            setTimeout(function() {
              clickedElements[0].innerHTML = "";
              clickedElements[1].innerHTML = "";
              moves = [];
              clickedElements = [];
            }, 1000);
          }

          // Select buttons, if all 16 are displayed as part of a match, display the winning image
          let matchedElements = document.getElementsByClassName('clicked');
          if (matchedElements.length === 16) {
            var result = document.getElementById('result');
            result.innerHTML = "Well done, contact made!" + "<img src='https://1.bp.blogspot.com/-MpnaAEObdws/VyfEFRLtbyI/AAAAAAAADxM/bDJN44Vvgf0u3KxcqnY2gcPzLmTofPDPwCKgB/s1600/29.%2B%25E2%2580%259CI%2Bdon%2527t%2Bknow%2Bwhere%2BI%2527m%2Bgoing%2Bfrom%2Bhere%252C%2Bbut%2BI%2Bpromise%2Bit%2Bwon%2527t%2Bbe%2Bboring.%25E2%2580%259D%2B%25E2%2580%2595%2BDavid%2BBowie.JPG'>";
          }

        } else {
          // This is is the odd numbered click
        }
        // Iterate counter
        counter++;
      }
    });
    // Add buttons created inside wrapper
    wrapper.appendChild(newButton);
  })

    // Reset button, if clicked reload page
    let resetButton = document.getElementById("reset");
    resetButton.addEventListener('click', function() {
      location.reload();
    });
});
