// const catPhoto = document.querySelector('#cat-photo');
// const newCatButton = document.querySelector('#new-cat-button');

// newCatButton.addEventListener('click', function() {
//   const width = Math.floor(Math.random() * 400) + 200;
//   const height = Math.floor(Math.random() * 400) + 200;
//   catPhoto.src = `http://placekitten.com/${width}/${height}`;
//   catPhoto.alt = 'A cute cat photo';
// });



 // Get references to the button and the cat photo element
 const newCatButton = document.getElementById('new-cat-button');
 const catPhoto = document.getElementById('cat-photo');

 // Define an array of your image URLs
 const imageUrls = [
   "img/Screenshot (3).png",
   "img/Screenshot (4).png",
   "img/Screenshot (5).png",
   "img/Screenshot (6).png",
   "img/Screenshot (7).png",

   // Add more image URLs as needed
 ];

 // Function to pick a random image URL from the array
 function getRandomImageUrl() {
   const randomIndex = Math.floor(Math.random() * imageUrls.length);
   return imageUrls[randomIndex];
 }

 // Add a click event listener to the button
 newCatButton.addEventListener('click', function() {
   // Get a random image URL
   const randomImageUrl = getRandomImageUrl();

   // Update the src attribute of the cat photo with the random image URL
   catPhoto.src = randomImageUrl;
 });