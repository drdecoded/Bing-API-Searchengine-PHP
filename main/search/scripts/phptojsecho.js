'use strict';


$(document).ready(function(){

    $.ajax({
        type: "GET",
        url: "autosuggest1.php",
        data: {"query":query},
        success: function(data){
            $("#s-results").append(data);
        }
    });


});