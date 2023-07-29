'use strict';

$(document).ready(function(){
    $("#w-search").on("input", function() {
        window.displayBoxIndex = -1;
    });
    $("#w-search").keyup(function(e){
        if (e.which <= 90 && e.which >= 48 || e.which == 8 || $.inArray(e.keyCode, [0,164,169,170,171,173,186,187,188,189,190,191,192,194,219,222,223,229]) != -1){
            var query = $(this).val();
            $.ajax({
                type: "GET",
                url: "autosuggest1.php",
                data: {"query":query},
                success: function(data){
                    if (!query.trim()){
                    $("#suggestion-box").hide();
                    } else {
                    $("#suggestion-box").show();
                    $("#suggestion-box").html(data);
                    }
                }
            });
        };
    });
    $("#w-search").keydown(function(e) {
        if(($('#suggestion-box')).is(":visible")){
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
        if(($('#suggestion-box')).is(":visible")){
            $('#w-search').val(oBoxCollection.eq(displayBoxIndex).text()).trigger('change');
        }
    }
    if(($('#suggestion-box')).is(":visible")){
        $('#w-search').val(oBoxCollection.eq(displayBoxIndex).text()).trigger('change');
    }
    if (displayBoxIndex < 0){
         displayBoxIndex = oBoxCollection.length - 1;
         if(($('#suggestion-box')).is(":visible")){
            $('#w-search').val(oBoxCollection.eq(displayBoxIndex).text()).trigger('change');
        }
    } 
    var cssClass = "display_box_hover";
    oBoxCollection.removeClass(cssClass).eq(displayBoxIndex).addClass(cssClass);
    }
    $( "#suggestion-box" ).mouseover(function () {
        $(".display_box").removeClass("display_box_hover");
        $(".display_box").hover(
            function () {
                //$(".display_box").removeClass("display_box_hover");
                displayBoxIndex = $(this).index() -3;
            },
            function () {
                displayBoxIndex = -1;
            }
          );
      });
    $("#w-search").focusout(function() {
        window.displayBoxIndex = -1;
        $(".display_box").removeClass("display_box_hover");
      });
    $("#w-search").focusin(function() {
        $("#suggestion-box").show();
        window.displayBoxIndex = -1;
        $(".display_box").removeClass("display_box_hover");
    });
    $("#w-search").keydown(function(e){
        var query = $(this).val();
        if (e.which == 8 && !query){
            $("#suggestion-box").hide();
        }
    });
    $(document).mouseup(function(e) {
        var container = $("#searchbar");
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                $("#suggestion-box").hide();
            }
    });
});










/* $(document).ready(function(){
    $("#i-search").keyup(function(e){
        if (e.which <= 90 && e.which >= 48 || e.which == 8){
        var query = $(this).val();
        $.ajax({
            type: "GET",
            url: "functions/autosuggest_images.php",
            data: {"query":query},
            success: function(data){
                if (!query.trim()){
                $("#suggestion-box").hide();
                } else {
                $("#suggestion-box").show();
                $("#suggestion-box").html(data);
                }
            }
        });
    };
    });
    $("#i-search").keydown(function(e){
        var query = $(this).val();
        if (e.which == 8 && !query){
            $("#suggestion-box").hide();
        }
    })
    $(document).mouseup(function(e) {
        var container = $("#suggestion-box");
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                container.hide();
            }
    });
});

$(document).ready(function(){
    $("#v-search").keyup(function(e){
        if (e.which <= 90 && e.which >= 48 || e.which == 8){
        var query = $(this).val();
        $.ajax({
            type: "GET",
            url: "functions/autosuggest_videos.php",
            data: {"query":query},
            success: function(data){
                if (!query.trim()){
                $("#suggestion-box").hide();
                } else {
                $("#suggestion-box").show();
                $("#suggestion-box").html(data);
                }
            }
        });
    };
    });
    $("#v-search").keydown(function(e){
        var query = $(this).val();
        if (e.which == 8 && !query){
            $("#suggestion-box").hide();
        }
    })
    $(document).mouseup(function(e) {
        var container = $("#suggestion-box");
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                container.hide();
            }
    });
});

$(document).ready(function(){
    $("#n-search").keyup(function(e){
        if (e.which <= 90 && e.which >= 48 || e.which == 8){
        var query = $(this).val();
        $.ajax({
            type: "GET",
            url: "functions/autosuggest_news.php",
            data: {"query":query},
            success: function(data){
                if (!query.trim()){
                $("#suggestion-box").hide();
                } else {
                $("#suggestion-box").show();
                $("#suggestion-box").html(data);
                }
            }
        });
    };
    });
    $("#n-search").keydown(function(e){
        var query = $(this).val();
        if (e.which == 8 && !query){
            $("#suggestion-box").hide();
        }
    })
    $(document).mouseup(function(e) {
        var container = $("#suggestion-box");
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                container.hide();
            }
    });
}); */