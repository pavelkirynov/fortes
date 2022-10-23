if (vw <= 480) {
  $(window).on("scroll", (e) => {
    if ($(document).scrollTop() != 0) {
      $(".sticky-btn-section.mobile").addClass("moved");
      $(".pricing-section").addClass("moved");
      $(".bingc-phone-button").addClass("moved");
    } else {
      $(".sticky-btn-section.mobile").removeClass("moved");
      $(".pricing-section").removeClass("moved");
      $(".bingc-phone-button").removeClass("moved");
    }
  });
}
