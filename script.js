$(document).ready(function () {
    $.ajax({
        url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
        , cache: false
        , dataType: "json"
        , success: function (json) {
            $(".quote").html(json[0].content + json[0].title);
        }
    });
    $("#butn").on("click", function () {
        $.ajax({
            url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
            , cache: false
            , dataType: "json"
            , success: function (json) {
                $(".quote").html(json[0].content + json[0].title);
            }
        });
    });
});