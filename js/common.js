$(".select-container__a").click(function (e) {
    e.preventDefault();
    $(".select-container__ul").css("display", 'block');
});

$(window).click(function (e) {
    e.preventDefault();
    if (!event.target.matches(".select-container__a")){
        $(".select-container__ul").css("display", 'none');
    }
});
