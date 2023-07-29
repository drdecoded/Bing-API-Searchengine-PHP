
if ($(".vid-related").length) {
  const prev = document.querySelector('.vid-back');
  const next = document.querySelector('.vid-next');
  const images = document.querySelector('.vid-content').children;
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
      images[index+3].classList.add('main');
      
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
}

if ($(".news-related").length) {
  const prev1 = document.querySelector('.news-back');
  const next1 = document.querySelector('.news-next');
  const images1 = document.querySelector('.news-content').children;
  const totalImages1 = images1.length;
  let index = 0;
    $('#n-back').hide();
    prev1.addEventListener('click', () => {
      nextImage('news-back');
    })
    next1.addEventListener('click', () => {
      nextImage('news-next');
      $('#n-back').show();
    })
    function nextImage(direction) {
      if(direction == 'news-next') {
        images1[index].classList.remove('main-n');
        images1[index+3].classList.add('main-n');
        
        index++;
        if(index == totalImages1) {
          index = 0;
        }
        if(index == totalImages1 - 3) {
          $('#n-next').hide();
        }
      } else {
        images1[index+2].classList.remove('main-n');
        images1[index-1].classList.add('main-n');
        $('#n-next').show();
        if(index == 1){
          $('#n-back').hide();
        }
        if(index == 0) {
          index = totalImages1 - 1;
        } else {
          index--;
        }
      }
    }
  }