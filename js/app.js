
// randomly lay out images

images = ["red", "blue", "green", "yellow", "pink", "purple"];

for (i=0; i<12; i++) {
  var randomImages = images[Math.floor(Math.random) * 6];
  console.log(images[i]);
}
