$(document).ready(function () {
    $.ajax({
        url: "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
        , cache: false
        , dataType: "json"
        , success: function (json) {
            $(".quote").html("<p>" + json.quoteText + "</p>" + "<hr width=20%>" + "<footer>" + json.quoteAuthor + "</footer>");
        }
    });
    $("#butn").on("click", function () {
        $.ajax({
            url: "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
            , cache: false
            , dataType: "json"
            , success: function (json) {
                $(".quote").html("<p>" + json.quoteText + "</p>" + "<hr>" + "<footer>" + json.quoteAuthor + "</footer>");
            }
        });
        $("#tweet").attr("href","https://twitter.com/intent/tweet?");
    });
    $("#tweet").on("click",function(){
      console.log("button was clicked!");
    });
});
