'use strict';
$(document).ready(function(){
    $("#w-search").on("input", function() {
        window.displayBoxIndex = -1;
    });
    $("#w-search").keyup(function(e){
        if (e.which <= 90 && e.which >= 48 || e.which == 8 || $.inArray(e.keyCode, [0,164,169,170,171,173,186,187,188,189,190,191,192,194,219,222,223,229]) != -1){
            var query = $(this).val();
            $.ajax({
                type: "POST",
                url: "pas/xAS1snivn.php",
                data: {"query":query},
                success: function(data){
                    if (!query.trim()){
                    $("#in-sb-x").hide();
                    $('.txtdel').css('visibility', 'hidden');
                    } else {
                    $("#in-sb-x").show();
                    $('.txtdel').css('visibility', 'visible');
                    $("#in-sb-x").html(data);
                    };
                }
            });
        };
    });
    $("#w-search").keydown(function(e) {
        if(($('#in-sb-x')).is(":visible")){
        switch(e.which) {
            case 38:
            Navigate(-1);
            e.preventDefault();
            break;
            case 40:
            Navigate(1);
            break;
        }
    }
    });
    window.displayBoxIndex = -1;
    var Navigate = function(diff) {
    displayBoxIndex += diff;
    var oBoxCollection = $(".display_box");
    if (displayBoxIndex >= oBoxCollection.length){
        displayBoxIndex = 0; 
        if(($('#in-sb-x')).is(":visible")){
            $('#w-search').val(oBoxCollection.eq(displayBoxIndex).text()).trigger('change');
        }
    }
    if(($('#in-sb-x')).is(":visible")){
        $('#w-search').val(oBoxCollection.eq(displayBoxIndex).text()).trigger('change');
    }
    if (displayBoxIndex < 0){
         displayBoxIndex = oBoxCollection.length - 1;
         if(($('#in-sb-x')).is(":visible")){
            $('#w-search').val(oBoxCollection.eq(displayBoxIndex).text()).trigger('change');
        }
    } 
    var cssClass = "display_box_hover";
    oBoxCollection.removeClass(cssClass).eq(displayBoxIndex).addClass(cssClass);
    }
    $( "#in-sb-x" ).mousemove(function () {
        $(".display_box").removeClass("display_box_hover");
        $(".display_box").hover(
            function () {
                displayBoxIndex = $(this).index() -1;
            },
            function () {
                displayBoxIndex = 1;
            }
          );
      });
    $("#w-search").focusout(function() {
        window.displayBoxIndex = -1;
        $(".display_box").removeClass("display_box_hover");
      });
    $("#w-search").focusin(function() {
        if (!$(this).val().trim()){
            $("#in-sb-x").hide();
            } else {
                $("#in-sb-x").show();
                window.displayBoxIndex = -1;
                $(".display_box").removeClass("display_box_hover");
            }
    });
    $( "#mo-cl-b" ).click(function() {
        $('.mo-sb').hide();
        $('.txtdel').css('visibility', 'hidden');
        $("#in-sb-x").hide();
        $('.nav-search-btn').show();
        $(".m-searchbar").css({position: '',width: '',left:'',top: ''});
        $(".nav-in").css({'-webkit-box-shadow' : '', '-moz-box-shadow' : '', 'box-shadow' : '', 'background-color' : '',margin:'',width: ''});
        $(".nav-input").css({width: '', 'background-color' : '','padding-left':''});
    });
    $("#w-search").keydown(function(e){
        var query = $(this).val();
        if (e.which == 8 && !query){
            $("#in-sb-x").hide();
            $('.txtdel').css('visibility', 'hidden');
        }
    });
    $(document).mouseup(function(e) {
        var container = $(".m-searchbar");
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                if($(window).width() > 479){
                    $("#in-sb-x").hide();
                }
            }
    });
    $( "#del-in" ).click(function(e) {
        $("#w-search").val("");
        $('.txtdel').css('visibility', 'hidden');
        $("#in-sb-x").hide();
    });
    if($(window).width() < 479){
        $("#mo-w-search").keyup(function(e){
            if (e.which <= 90 && e.which >= 48 || e.which == 8 || $.inArray(e.keyCode, [0,164,169,170,171,173,186,187,188,189,190,191,192,194,219,222,223,229]) != -1){
                var query = $(this).val();
                $.ajax({
                    type: "POST",
                    url: "pas/xAS1snivn.php",
                    data: {"query":query},
                    success: function(data){
                        if (!query.trim()){
                        $("#mo-in-sb").hide();
                        $('.mo-txtdel').css('visibility', 'hidden');
                        } else {
                        $("#mo-in-sb").show();
                        $('.mo-txtdel').css('visibility', 'visible');
                        $("#mo-in-sb").html(data);
                        };
                    }
                });
            };
        });
        $("#w-search").focusin(function() {
            $('body').css({'position':'fixed'});
            $("#w-search").attr('disabled', 'disabled');
            $(".mo-main-s").show();
            $("#mo-w-search").focus();
            if (!$(this).val().trim()){
                $("#mo-in-sb").hide();
                } else {
                    $("#mo-in-sb").show();
                }
        });
        $(".mo-back").click(function() {
            $('body').css({'position':''});
            $('#w-search').removeAttr('disabled');
            $("#w-search").val($("#mo-w-search").val());
            $(".mo-main-s").hide();
        });
        $("#mo-del-in").click(function() {
            $("#mo-w-search").val("");
            $('.mo-txtdel').css('visibility', 'hidden');
            $("#mo-in-sb").hide();
        });
    };
});