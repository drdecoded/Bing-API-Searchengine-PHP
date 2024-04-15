const prev = document.querySelector('.vid-back');
const next = document.querySelector('.vid-next');
const images = document.querySelector('.img-cu-md').children;
const totalImages = images.length;
let index = 0;
$('#back').hide();
prev.addEventListener('click', () => {
  nextImage('vid-back');
})
next.addEventListener('click', () => {
  nextImage('vid-next');
  $('#back').show();
})
function nextImage(direction) {
  if(direction == 'vid-next') {
    images[index].classList.remove('main');
    images[index].classList.add('main');
    
    index++;
    if(index == totalImages) {
      index = 0;
    }
    if(index == totalImages - 3) {
      $('#next').hide();
    }
  } else {
    images[index+2].classList.remove('main');
    images[index-1].classList.add('main');
    $('#next').show();
    if(index == 1){
      $('#back').hide();
    }
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }
}