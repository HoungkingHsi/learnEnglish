$(function(){
    $(".phonetic_symbol .right-nav li").on('click', function () {
        var old_target = $(".phonetic_symbol li.active").removeClass("active").find("a").attr("href");
        $(old_target).css({"paddingTop": "0px"})
        $(this).addClass("active");
        var target = $(this).find("a").attr("href");
        $(target).css({"paddingTop": "50px"});
    });

    $(".word_group .right-nav li").on('click', function () {
        var old_target = $(".word_group li.active").removeClass("active").find("a").attr("href");
        $(old_target).css({"paddingTop": "0px"})
        $(this).addClass("active");
        var target = $(this).find("a").attr("href");
        $(target).css({"paddingTop": "50px"});
    })
});
