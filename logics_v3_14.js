$(window).on('load', function () {
    let slideIndex = 0;
    $(".wrap-border.calculator-btn").on("click", function (e) {
            let t = {},
                i = "";
            (document.cookie = ""),
            (t._costPerMetre = $("#total").html()),
            (t._appliances = $(".choiceActiveBorder").data("appliances")),
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
                $(".calculator-slide").toggle(!1),
                $(".calculator-slide.main").toggle(!0),
                $(".calculator-slide" + `.${e}`).toggle(!0),
                $(".calculator-slider-side").slick("slickGoTo", 0),
                $(".calculator-slider-option.active").removeClass("active"),
                $(".calculator-slider-option[data-slider-index='0']").addClass("active");
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
                }
            },
            {
                breakpoint: 478,
                settings: {
                    draggable: !0,
                    infinite: !0,
                    arrows: !1,
                    dots: !0,
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
    $(".slide-nav").on("click", function (e) {
        $(".slide-nav.active").toggleClass("active");
        $(this).addClass("active");
        slideIndex = parseInt($(this).data("index"));
        t[0].slick.slickGoTo(slideIndex);
    });
    let u = "";
    $(".slider-tab").on("click", function () {
            if (
                ($(".slider-tab.w--current").toggleClass("w--current"),
                    $(this).toggleClass("w--current"),
                    0 == (e = parseInt($(this).attr("data-slider-index"))))
            )
                u = "cozy";
            else if (2 == e) u = "fusion";
            else if (1 == e) u = "japandi";
            else if (3 == e) u = "modern";
            else if (4 == e) u = "neoclassic";
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
            $(".slide-nav.active").removeClass("active");
            $(".slide-nav:eq(0)").addClass("active");
            $(".slider-container .checkmark").css("margin-left", "0px");
            $(".main-slider .color-var").toggle(false);
            $(`.main-slider .color-1`).toggle(true);
            $(".calculator-slide").toggle(!1),
            $(".calculator-slide.main").toggle(!0),
            $(".calculator-slide" + `.${u}`).toggle(!0),
            $(".calculator-tab.w--current").removeClass("w--current"),
            $(`.calculator-tab[data-slider-index='${e}']`).addClass("w--current"),
            $(".wrap-border.calculator-btn").toggle(false);
            $(`.specification-${u}.color-1`).toggle(true);
        }),
        $(".arrow-left").on("click", function () {
            $(".main-slider").slick("slickPrev");
            let e = $(".main-slider").slick("slickCurrentSlide");
            $(".slide-nav.active").removeClass("active");
            $(`.slide-nav:eq(${e})`).addClass("active");
        }),
        $(".arrow-right").on("click", function () {
            $(".main-slider").slick("slickNext");
            let e = $(".main-slider").slick("slickCurrentSlide");
            $(".slide-nav.active").removeClass("active");
            $(`.slide-nav:eq(${e})`).addClass("active");
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
            $(`.specification-${u}.color-1`).toggle(true);
            $(".calculator .checkmark").css("margin-left", "0px");
            $(".calculator-slider-side .color-var").toggle(false);
            $(`.calculator-slider-side .color-1`).toggle(true);
        }),
        $(".calculator-slider-option").on("click", function () {
            $(".calculator-slider-option.active").removeClass("active"), $(this).addClass("active"), (slideIndex = parseInt($(this).data("slider-index"))), (r = slideIndex), i[0].slick.slickGoTo(slideIndex);
        }),
        $(".calculator-button, .calculate, .calculator-tab").on("click", function () {
            $(".calculator-slider-side").slick("refresh");
        }),
        $(".arrow-right.calculator-arrow").on("click", function () {
            $(".calculator-slider-side").slick("slickNext");
            let e = parseInt($(".calculator-slider-option.active").data("slider-index"));
            $(".calculator-slider-option.active").removeClass("active"), e >= 4 ? (e = 0) : (e += 1), $(`.calculator-slider-option:eq(${e})`).addClass("active");
        }),
        $(".arrow-left.calculator-arrow").on("click", function () {
            $(".calculator-slider-side").slick("slickPrev");
            let e = parseInt($(".calculator-slider-option.active").data("slider-index"));
            $(".calculator-slider-option.active").removeClass("active"), e = 0 ? (e = 4) : (e -= 1), $(`.calculator-slider-option:eq(${e})`).addClass("active");
        });
    $(".wrap-border.calculator-btn .button").click(function () {
        let fd = new FormData();
        let ukrStyle = data.style == "cozy" ? "Козі" : data.style == "japandi" ? "Джапанді" : data.style == "fusion" ? "Фьюжн" : data.style == "modern" ? "Модерн" : "Нео Класика";
        let months = data.space < 60 ? 4 : data.space <= 80 ? 5 : data.space <= 100 ? 6 : data.space <= 130 ? 7 : data.space <= 150 ? 8 : data.space <= 175 ? 9 : 10;
        fd.append("Стиль", ukrStyle);
        fd.append("Ціна за метр", $("#total").html());
        fd.append("Загальна ціна", $("#totalWhole").html());
        fd.append("Площа", $("#space").val());
        fd.append("Кількість кімнат", $("#amountOfRooms").val());
        fd.append("Кількість санвузлів", $("#amountOfBathrooms").val());
        fd.append("Ванна", checkVal($("#bathtub").prop("checked")));
        fd.append("Душ", checkVal($("#shower").prop("checked")));
        
        let ceiling = $(":radio[name='ceiling']:checked").val() == "stretch ceiling" ? "Натяжна матова" : $(":radio[name='ceiling']:checked").val() == "gapless" ? "Натяжна бесщелева матова" : "Гіпсокартон";
        let flooring = $(":radio[name='flooring']:checked").val() == "laminat" ? "Ламінат" : $(":radio[name='flooring']:checked").val() == "vynil" ? "Вінілова підлога" : "Паркет";
        let appliances = $(".choiceActiveBorder").data("appliances") == undefined ? "Не обрано" : $(".choiceActiveBorder").data("appliances").substr(0, 1).toUpperCase() + $(".choiceActiveBorder").data("appliances").substr(1);
        
        fd.append("Стеля", ceiling);
        fd.append("Підлогове покриття", flooring);
        fd.append("Стяжка підлоги", checkVal($("#floorscreed").is(":checked")));
        fd.append("Шумоізоляція", checkVal($("#noise").is(":checked")));
        fd.append("Вхідні двері", checkVal($("#doors").is(":checked")));
        fd.append("Другий шар гіпсокартону", checkVal($("#secondGypsumLayer").is(":checked")));
        fd.append("Гігієнічний душ", checkVal($("#hygienicShower").is(":checked")));
        fd.append("Тепла підлога", $("#heatedFlooring").val());
        fd.append("Кондиціювання", $("#conditioning").val());
        fd.append("Меблі", checkVal($("#furnitureBool").is(":checked")));
        fd.append("Техніка", appliances);
        fd.append("Термін виконання робіт", months);
        
        function checkVal(val) {
          return !!val == true ? 1 : 0;
        }
        
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxiJPHg5oz88UhS0apuylDhgjLskSLo-Dt2mvF6VA/exec';

        fetch(scriptURL, { method: 'POST', body: fd})
          .then(response => console.log('Success!', response))
          .catch(error => console.error('Error!', error.message));

    });
    
});
