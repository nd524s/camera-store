$(".select-container__a").on("click", function (e) {
    e.preventDefault();
    var dropDown = this.nextElementSibling;
    if(dropDown.tagName == "UL") {
        if(dropDown.classList.contains("show")) {
            dropDown.classList.remove("show");
        } else {
            dropDown.classList.toggle("show");
        }
    }
    e.stopPropagation();
});

$(window).click(function (e) {
    e.preventDefault();
    if (event.target.matches(".select-container__a") || event.target.matches(".select-container__ul") || event.target.matches("#menu-bar")){
        return;
    } else {
        $(".select-container__ul").removeClass("show");
        if(window.innerWidth <= 500) {
            $("#item-types").css("display","none");
      }
    }
});

$(".content__item").hover(function() {
    if($(this).closest(".content__item_large").length === 0) {
        $(this).css("background-color", "rgba(0, 99, 255, 0.3)");
        $(this).css("border", "1px solid #251cff");
        $(this).css("cursor", "pointer");
    }
}, function() {
    $(this).css("background-color", "");
    $(this).css("border", "");
});

$("#menu-bar").on("click", function() {
    // $("#item-types").addClass("show");
     $("#item-types").css("display","block");
});

$("#search-criteria").on("click", function(e) {
    e.preventDefault();
    $(".popup").css("display", "block");
    $(".search-box").css("display", "block");
});

$(".select-container__ul li").on("click", function(e) {
    e.preventDefault();
    var selectedValue = $(this).text();
    $(this).parent().prev().children().text(selectedValue);
});

$(document).keypress(function(e) {
    if(e.which == 13) {
        $(".popup").css("display", "none");
        $(".search-box").css("display", "none");
    }
});

$("#search-icon").on("click", function(e) {
    $(".header__wrapper input").appendTo("search-line");
});
