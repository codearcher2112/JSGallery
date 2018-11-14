const current = document.querySelector('#current');
const imgs = Array.from(document.querySelectorAll('.imgs img'));
const imgsSrc = imgs.map(img => {
  return img.src;
}); 

function imgClick(e) {
  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade-in class
  current.classList.add('fade-in');

  // Remove fade-in class after 0.5s
  setTimeout(() => current.classList.remove('fade-in'), 500);
}

function imgKeyPress(dir) {
  current.src = imgsSrc[imgsSrc.indexOf(current.src) + (dir || 1)] || imgsSrc[dir ? imgsSrc.length - 1 : 0];
  current.classList.add('fade-in');
  setTimeout(() => current.classList.remove('fade-in'), 500);
}

imgs.forEach(img => img.addEventListener('click', imgClick));

document.addEventListener("keydown", (e) => {
  if (e.which === 37) {
    imgKeyPress(-1);
  } else if (e.which === 39) {
    imgKeyPress();
  }
});
