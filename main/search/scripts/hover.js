
$(document).on('mouseenter','.test', function () {
    $( this ).find('.test').show();
    $( this ).find('.test').show();
}).on('mouseleave','.test',  function(){
    $( this ).find('.test').hide('blind', function(){
        $('.test').hide();
    });
});
