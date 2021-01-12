$(window).on('load', function() { 
        let slideIndex = 0;
$("#submit").on("click", function (e) {
        let t = {},
            i = "";
        (document.cookie = ""),
        (t._costPerMetre = $("#total").html()),
        (t._appliances = appliancesCookie),
        (t._style = style),
        (t._bath = +$("#bathtub").is(":checked")),
        (t._shower = +$("#shower").is(":checked")),
        (t._ceiling = $(":radio[name='ceiling']:checked").val()),
        (t._flooring = $(":radio[name='flooring']:checked").val()),
        (t._hygienicShower = +$("#hygienicShower").is(":checked")),
        (t._secondGypsumLayer = +$("#secondGypsumLayer").is(":checked")),
        (t._floorScreed = +$("#floorscreed").is(":checked")),
        (t._heatedFlooring = +$("#heatedFlooring").val()),
        (t._denoising = +$("#noise").is(":checked")),
        (t._entranceDoors = +$("#doors").is(":checked")),
        (t._conditioning = +$("#conditioning").val()),
        (t._amountOfRooms = +$("#amountOfRooms").val()),
        (t._amountOfBathrooms = +$("#amountOfBathrooms").val()),
        (t._summedPrice = parseInt($("#totalWhole").html().replace(/ /, ""))),
        (t._appliancesBoolTotal = +$("#appliancesBool").is(":checked")),
        (t._furnitureBool = +$("#furnitureBool").is(":checked")),
        (t._space = parseFloat($("#space").val()));
        for (let e in t)(i = e + "=" + t[e] + ";"), (document.cookie = i);
    }),
    $(".calculator-tab").on("click", function () {
        let e;
        e || (e = "cozy");
        let t = parseInt($(this).attr("data-slider-index"));
        if (0 == t) e = "cozy";
        else if (1 == t) e = "japandi";
        else if (2 == t) e = "fusion";
        else if (3 == t) e = "modern";
        else if (4 == t) e = "neoclassic";
        else if (5 == t) return $(".custom-style-background-calculator").css("display", "flex"), void $(".card-wrapper").css("display", "flex");
        $(".custom-style-background-calculator").css("display", "none"),
            $(".card-wrapper").css("display", "none"),
            $(".form-block").css("display", "flex"),
            $(".submit-container").css("display", "flex"),
            $(".calculator-slide").toggle(!1),
            $(".calculator-slide.main").toggle(!0),
            $(".calculator-slide" + `.${e}`).toggle(!0),
            $(".calculator-slider-side").slick("slickGoTo", 0),
            $(".calculator-slider-option.active").removeClass("active"),
            $(".calculator-slider-option[data-slider-index='0']").addClass("active");
    }),
    $(".slider-tab.custom-style").on("click", function () {
        $(this).parent().toggleClass("w--current"),
            $(".main-slider").toggle(!1),
            $(".slider-side").toggle(!1),
            $(".arrow-left, .arrow-right").toggle(!1),
            $(".custom-style-section").css("display", "flex"),
            $(".slider-tab.w--current").toggleClass("w--current");
    }),
    $(".custom-style").on("click", function () {
        $(this).css("color", "white"), $(this).css("background-color", "transparent");
    }),
    $(".calculator-tab").on("click", function () {
        if (((number = parseInt($(this).attr("data-slider-index"))), 0 == number)) styleTab = "cozy";
        else if (5 == number)
            return (
                $(".custom-style-background-calculator").css("display", "flex"),
                $(".card-wrapper").css("display", "flex"),
                $(this).siblings(".wrap-border").children(".custom-style").css("color", "black"),
                void $(this).siblings(".wrap-border").children(".custom-style").css("background-color", "white")
            );
        $(".main-slider").slick("refresh");
    }),
    $(".increment-field .increment").on("click", function (e) {
        e.preventDefault(), $(this).siblings(".increment-input").val() <= 0 && $(this).siblings(".increment-input").val(0);
    }),
    $(".choiceactive.card").toggleClass("choiceActiveBorder");
let e = 0,
    t = $(".main-slider");
t.slick({
    arrows: !1,
    dots: !1,
    speed: 425,
    draggable: !1,
    adaptiveHeight: !0,
    responsive: [{
            breakpoint: 991,
            settings: {
                draggable: !0,
                infinite: !0,
                arrows: !0,
                dots: !1,
                autoplay: !0,
                autoplaySpeed: 4e3
            }
        },
        {
            breakpoint: 478,
            settings: {
                draggable: !0,
                infinite: !0,
                arrows: !1,
                dots: !0,
                autoplay: !0,
                autoplaySpeed: 3500
            }
        },
    ],
});
let i = $(".calculator-slider-side");
$(".calculator-slider-side")
    .not(".slick-initialized")
    .slick({
        dots: !1,
        speed: 425,
        arrows: !1,
        draggable: !1,
        responsive: [{
            breakpoint: 991,
            settings: "unslick"
        }]
    });
let $bar = $(".progressbar");
let barIndex = 0;

function stopAnimation() {
    if (!document.querySelector(".main-slider")) {
        return;    
    }
    $bar.stop(true, false).animate({
        width: "0px"
    }, 250, "swing");
}

function startAnimation() {
    if (!document.querySelector(".main-slider")) {
        return;    
    }
    $bar.parent().css("opacity", 0);

    $(`.progressbar:eq(${barIndex})`).parent().css("opacity", 1);
    $(`.progressbar:eq(${barIndex})`).animate({
        width: "100%",
    }, 10000, "swing", function () {
        stopAnimation();
        if (barIndex >= 4) {
            barIndex = 0;
        } else {
            barIndex++;
        }
//        t[0].slick.slickGoTo(barIndex);
        $(".main-slider").slick("slickGoTo", barIndex);
        startAnimation();
    });
}
$(".slide-nav").on("click", function (e) {
    e.preventDefault(),
    stopAnimation();
    slideIndex = parseInt($(this).data("index"));
    (barIndex = slideIndex);
    startAnimation();
    t[0].slick.slickGoTo(slideIndex);
});
startAnimation();
let u = "";
$(".slider-tab").on("click", function () {
        if (
            ($(".slider-tab.w--current").toggleClass("w--current"),
                $(this).toggleClass("w--current"),
                (barIndex = 0),
                (slideIndex = 0),
                $(".main-slider").slick("slickGoTo", 0),
                stopAnimation(),
                startAnimation(),
                0 == (e = parseInt($(this).attr("data-slider-index"))))
        )
            u = "cozy";
        else if (2 == e) u = "fusion";
        else if (1 == e) u = "japandi";
        else if (3 == e) u = "modern";
        else if (4 == e) u = "neoclassic";
        else if (5 == e) return;
        $(".slider-tab.custom-style").css("background", "white"),
            $(".slider-tab.custom-style").css("color", "#0d0d0d"),
            $(".main-slider").toggle(!0),
            $(".custom-style-section").toggle(!1),
            $(".slider-side").toggle(!0),
            $(".slide").toggle(!1),
            $(".slide.main").toggle(!0),
            $(".slide" + `.${u}`).toggle(!0),
            $(".style-heading, .style-note, .style-description").toggle(!1),
            $(".header-" + u).toggle(!0);
            $(".arrow-left, .arrow-right").toggle(!0);
            $(".main-slider").slick("refresh");
    }),
    $(".arrow-left").on("click", function () {
        $(".main-slider").slick("slickPrev");
//        let e = $("#progressBarContainer").siblings("a").data("index");
        if (barIndex <= 0) {
            barIndex = 4;
        } else {
            barIndex--;
        }
        stopAnimation();
        startAnimation();
    }),
    $(".arrow-right").on("click", function () {
        $(".main-slider").slick("slickNext");
//        let e = $("#progressBarContainer").siblings("a").data("index");
        if (barIndex >= 4) {
            barIndex = 0;
        } else {
            barIndex++;
        }
        stopAnimation();
        startAnimation();
    }),
    $(".preview-image, .blackbg-text").hover(
        function () {
            $(".video-cursor").css("opacity", 1);
        },
        function () {
            $(".video-cursor").css("opacity", 0);
        }
    ),
    $(".project-link-image").hover(
        function () {
            $(".project-dot").css("opacity", 1);
        },
        function () {
            $(".project-dot").css("opacity", 0);
        }
    ),
    $("#laminat").prop("checked", !0),
    $("#appliances").prop("checked", !0),
    $(".choice").first().toggleClass("choiceActive"),
    $(".choice").first().parent().toggleClass("choiceActiveBorder"),
    $(".choice").on("click", function (e) {
        if (!$("#appliancesBool").is(":checked")) return e.preventDefault(), $(".choiceActive").toggleClass("choiceActive"), void $(".choiceActiveBorder").toggleClass("choiceActiveBorder");
        $(this).hasClass("borderAcrive") ||
            ($(".choiceActive").toggleClass("choiceActive"),
                $(".choiceActiveBorder").toggleClass("choiceActiveBorder"),
                $(this).toggleClass("choiceActive"),
                $(this).parent().toggleClass("choiceActiveBorder"),
                $("#node").is(":checked") && $("#appliances").prop("checked", "checked"));
    }),
    $("#node").on("change", function (e) {
        $("#node").is(":checked") && $(".choiceActive") && ($(".choiceActive").toggleClass("choiceActive"), $(".choiceActiveBorder").toggleClass("choiceActiveBorder"));
    }),
    $("#appliancesBool").on("change", function () {
        $(this).is(":checked") && !document.querySelector(".choiceActiveBorder") && ($(".choice").first().toggleClass("choiceActive"), $(".choice").first().parent().toggleClass("choiceActiveBorder"));
    }),
    $("form input").keydown(function (e) {
        13 != e.keyCode || e.preventDefault();
    }),
    $(".calculator-tab").on("click", function () {
        0 == (e = parseInt($(this).attr("data-slider-index"))) ? (u = "cozy") : 2 == e ? (u = "fusion") : 1 == e ? (u = "japandi") : 3 == e ? (u = "modern") : 4 == e && (u = "neoclassic"),
            u || (u = "cozy"),
            $(".calculator-slide").toggle(!1),
            $(".calculator-slide.main").toggle(!0),
            $(".calculator-slide" + `.${u}`).toggle(!0),
            $(".calculator-tab.w--current").removeClass("w--current"),
            $(this).addClass("w--current"),
            $(".wrap-border.calculator-btn").toggle(false);
            $(`.specification-${u}`).toggle(true);
    }),
    $(".calculator-slider-option").on("click", function () {
        $(".calculator-slider-option.active").removeClass("active"), $(this).addClass("active"), (slideIndex = parseInt($(this).data("slider-index"))), (r = slideIndex), i[0].slick.slickGoTo(slideIndex);
    }),
    $(".button.modal").on("click", function (e) {
        $("#agreementCheckbox").is(":checked") || (e.preventDefault(), $(".agreementCheckbox").toggle(!0)), ($("#name").val() && $("#phone").val() && $("#email").val()) || (e.preventDefault(), $(".warning.inputs").toggle(!0));
    }),
    $(".calculator-button, .calculate, .calculator-tab").on("click", function () {
        $(".calculator-slider-side").slick("refresh");
    }),
    $(".calculator-tab").on("click", function () {
        $(this).siblings(".wrap-border.calculator-tab").hasClass("w--current") &&
            ($(".wrap-border.calculator-tab").removeClass("w--current"), $(".wrap-border.calculator-tab .custom-style").css("background", "white"), $(".wrap-border.calculator-tab .custom-style").css("color", "black"));
    }),
    $(".arrow-right.calculator-arrow").on("click", function () {
        $(".calculator-slider-side").slick("slickNext");
        let e = parseInt($(".calculator-slider-option.active").data("slider-index"));
        $(".calculator-slider-option.active").removeClass("active"), e >= 4 ? (e = 0) : (e += 1), $(`.calculator-slider-option:eq(${e})`).addClass("active"), (barIndex = e);
    }),
    $(".arrow-left.calculator-arrow").on("click", function () {
        $(".calculator-slider-side").slick("slickPrev");
        let e = parseInt($(".calculator-slider-option.active").data("slider-index"));
        $(".calculator-slider-option.active").removeClass("active"), e = 0 ? (e = 4) : (e -= 1), $(`.calculator-slider-option:eq(${e})`).addClass("active"), (barIndex = e);
    });
});
