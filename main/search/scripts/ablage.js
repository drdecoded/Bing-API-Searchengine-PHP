var xc;
$(function(){

    $(document).on("click", '.img-name-link', function(){
        window.location.href = this.href;
      });
    $(document).on("click", '.img-wr-wr', function(e) { 
        var $this = $(this);
        e.preventDefault();
        $('.selected').removeClass('selected');
        $this.addClass('selected');
        $('.img-cu-wr').remove(); 
        $('.img-cu-wr-deta').remove(); 
        moveBio();
        xc = true;
        var imgculink = $(this).children('.img-wr').children('.img-cu').children('.img-cu-url').text();
        var imgcures = $(this).children('.img-wr').children('.img-cu').children('.img-cu-res').text();
        var imgformat = $(this).children('.img-wr').children('.img-cu').children('.img-cu-format').text();
        var imgname = $(this).children('.img-wr').children('.img-cu').children('.img-cu-name').text();
        var imgpro = $(this).children('.img-wr').children('.img-cu').children('.img-cu-pro').text();
        var imgcturl = $(this).children('.img-wr').children('.img-cu').children('.img-cu-cturl').text();
        $( ".img-cu-md" ).append( '<div class="img-cu-wr"><div class="img-cu-con"></div></div>' );
        $( ".img-cu-md" ).append('<div class="img-cu-wr-deta"><div class="img-cu-con-url"></div><div class="img-cu-con-res"></div><div class="img-cu-con-format"></div><div class="img-cu-con-name"></div><div class="img-cu-con-pro"></div><div class="img-cu-con-cturl"></div></div>');
        $( ".img-cu-con" ).append('<img src="'+imgculink+'">');
        $( ".img-cu-con-res" ).append('<span>'+imgcures+'</span>');
        $( ".img-cu-con-format" ).append('<span>'+imgformat+'</span>');
        $( ".img-cu-con-name" ).append('<span>'+imgname+'</span>');
        $( ".img-cu-con-pro" ).append('<span>'+imgpro+'</span>');
        $( ".img-cu-con-cturl" ).append('<span>'+imgcturl+'</span>');
      });
    
    function moveBio() {

      var $bio = $(".img-cu-md");    
      var itemsPerRow = 0;
  
      $bio.hide(); // hide so doesn't affect calculations
  
      var firstItem = $('.img-wr-wr').eq(0);
      var itemTop = firstItem.position().top;
  
      $('.img-wr-wr').each(function(i) { // loop till we hit next row
        if($(this).position().top != itemTop) {
              itemsPerRow = i;
              return false;
          }   
      });
      selectedIndex = $(".img-wr-wr").index($('.selected')[0]);
      console.log(selectedIndex);
      selectedRowNum = Math.floor(selectedIndex / itemsPerRow) + 1;
      
      $(".img-cu-md").insertAfter($(".img-wr-wr").eq((selectedRowNum * itemsPerRow) - 1)).show();

    }

    $(window).resize(function() {
    if(xc == true){
      $(".img-cu-md").hide(); // hide Bio so it doesn't interfere with the flex layout during resize
      clearTimeout(window.resizedFinished);
    
    
      window.resizedFinished = setTimeout(function(){
        //$(".bio").show();  
        moveBio(); // show Bio again now that resize
      }, 250);
    }
    });
  });

  $(function(){
  $(document).on("click", '.vid-next', function(e) { 
    var $this = $('.img-wr-wr').children();
    var myVar = $("#img-w").find('.selected').next();
    var myVar2 = $("#img-w").find('.selected').next().index();
    console.log(myVar);
    console.log(myVar2);
    $('.selected').removeClass('selected');

        $('.img-cu-wr').remove(); 
        $('.img-cu-wr-deta').remove(); 

        moveBio();
        setTimeout(function(){
            myVar.addClass('selected');
          }, 500);
 
        xc = true;
        var imgculink = myVar.children('.img-wr').children('.img-cu').children('.img-cu-url').text();
        var imgcures = $(this).children('.img-wr').children('.img-cu').children('.img-cu-res').text();
        var imgformat = $(this).children('.img-wr').children('.img-cu').children('.img-cu-format').text();
        var imgname = $(this).children('.img-wr').children('.img-cu').children('.img-cu-name').text();
        var imgpro = $(this).children('.img-wr').children('.img-cu').children('.img-cu-pro').text();
        var imgcturl = $(this).children('.img-wr').children('.img-cu').children('.img-cu-cturl').text();
        $( ".img-cu-md" ).append( '<div class="img-cu-wr"><div class="img-cu-con"></div></div>' );
        $( ".img-cu-md" ).append('<div class="img-cu-wr-deta"><div class="img-cu-con-url"></div><div class="img-cu-con-res"></div><div class="img-cu-con-format"></div><div class="img-cu-con-name"></div><div class="img-cu-con-pro"></div><div class="img-cu-con-cturl"></div></div>');
        $( ".img-cu-con" ).append('<img src="'+imgculink+'">');
        $( ".img-cu-con-res" ).append('<span>'+imgcures+'</span>');
        $( ".img-cu-con-format" ).append('<span>'+imgformat+'</span>');
        $( ".img-cu-con-name" ).append('<span>'+imgname+'</span>');
        $( ".img-cu-con-pro" ).append('<span>'+imgpro+'</span>');
        $( ".img-cu-con-cturl" ).append('<span>'+imgcturl+'</span>');
  });
  function moveBio() {

    var $bio = $(".img-cu-md");    
    var itemsPerRow = 0;

    $bio.hide(); // hide so doesn't affect calculations

    var firstItem = $('.img-wr-wr').eq(0);
    var itemTop = firstItem.position().top;

       
    $('.img-wr-wr').each(function(i) { // loop till we hit next row
      if($(this).position().top != itemTop) {
            itemsPerRow = i;
            return false;
        }   
    });

    selectedIndex = $(".img-wr-wr").index($('.selected')[0]);

    selectedRowNum = Math.floor(selectedIndex / itemsPerRow) + 1;
    
    $(".img-cu-md").insertAfter($(".img-wr-wr").eq((selectedRowNum * itemsPerRow) - 1)).show();

  }
});

//   const prev = document.querySelector('.vid-back');
//   const next = document.querySelector('.vid-next');
//   const images = document.querySelector('.img-w').children;
//   const totalImages = images.length;
//   let index = 0;
//   $('#back').hide();
//   prev.addEventListener('click', () => {
//     nextImage('vid-back');
//   })
//   next.addEventListener('click', () => {
//     nextImage('vid-next');
//     $('#back').show();
//   })
//   function nextImage(direction) {
//     if(direction == 'vid-next') {
//       images[index].classList.remove('main');
//       images[index].classList.add('main');
      
//       index++;
//       if(index == totalImages) {
//         index = 0;
//       }
//       if(index == totalImages - 3) {
//         $('#next').hide();
//       }
//     } else {
//       images[index+2].classList.remove('main');
//       images[index-1].classList.add('main');
//       $('#next').show();
//       if(index == 1){
//         $('#back').hide();
//       }
//       if(index == 0) {
//         index = totalImages - 1;
//       } else {
//         index--;
//       }
//     }
//   }