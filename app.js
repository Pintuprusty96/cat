const catPhoto = document.querySelector('#cat-photo');
const newCatButton = document.querySelector('#new-cat-button');

newCatButton.addEventListener('click', function() {
  const width = Math.floor(Math.random() * 400) + 200;
  const height = Math.floor(Math.random() * 400) + 200;
  catPhoto.src = `https://placekitten.com/${width}/${height}`;
  catPhoto.alt = 'A cute cat photo';
});
const catPhoto = 