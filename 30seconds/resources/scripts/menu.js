var main = function() {
    $(".hamburger").click(function(){
        $(".links").toggleClass("open", "600");
        $(this).toggleClass("close", "2400");
    });
};

$(document).ready(main);