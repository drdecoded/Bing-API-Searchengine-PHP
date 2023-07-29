// Code to convert select to UL
$('.select').each(function() {
    var $select = $(this).find('select'),
      $list = $('<ul />');
    $select.find('option').each(function() {
      $list.append('<li>' + $(this).text() + '</li>');
    });
    //Remove the select after the values are taken
    $select.after($list).remove();
  
  
    //Append Default text to show the selected
    $(this).append('<span>select</span>')
    var firsttxt = $(this).find('li:first-child').text();
    $(this).find('span').text(firsttxt)
  
    // On click show the UL
    $(this).on('click', 'span', function(e) {
      e.stopPropagation();
      $(this).parent().find('ul').show();
    });
  
    // On select of list select the item
    $(this).on('click', 'li', function() {
      var gettext = $(this).text();
      $(this).parents('.select').find('span').text(gettext);
      $(this).parent().fadeOut();
    });
  
  })
  
  
  // On click out hide the UL
  $(document).on('click', function() {
    $('.select ul').fadeOut();
  });