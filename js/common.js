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
    if (event.target.matches(".select-container__a") || event.target.matches(".select-container__ul")){
      return;
    } else {
      $(".select-container__ul").removeClass("show");
    }
});
