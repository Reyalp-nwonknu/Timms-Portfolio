console.log ("Hello! Welcome to my little portfolio website!")

/* Animation for slide-in text */

$(document).ready(function() {
  $(".project-preview").on("click", function() {
    $(this).siblings(".project-details").slideToggle();
    });
});


/* Alternative for mouseover
$(document).ready(function() {
  $(".column-4").on("mouseenter", function() {
    $(this).find(".project-details").fadeIn();
    });
  $(".column-4").on("mouseleave", function() {
    $(this).find(".project-details").fadeOut();
    });
});
*/