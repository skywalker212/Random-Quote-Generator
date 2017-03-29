$(document).ready(function () {
    $.ajax({
        url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
        , cache: false
        , dataType: "json"
        , success: function (json) {
            $(".quote").html("<p>" + json[0].content + "</p>" + "<hr width=20%>" + "<footer>" + json[0].title + "</footer>");
        }
    });
    $("#butn").on("click", function () {
        $.ajax({
            url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
            , cache: false
            , dataType: "json"
            , success: function (json) {
                $(".quote").html('<p class="main-quo">' + json[0].content + "</p>" + "<hr width=20%>" + '<footer class="auth">' + json[0].title + "</footer>");
            }
        });
    });
});