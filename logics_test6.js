$(document).ready(function () {
  $("input").each(function () {
    $(this).attr("name", $(this).data("name"));
  });

  $(".choiceactive.card").toggleClass("choiceActiveBorder");
  $("#laminat").prop("checked", !0);

  const splideOptions = {
    arrows: false,
    pagination: false,
    speed: 550,
    flickPower: 400,
    breakpoints: {
      480: {
        pagination: true,
        speed: 650,
      },
    },
  };

  const splideCalc = new Splide(".slider-container.splide", splideOptions);

  splideCalc.mount();

  if ($(".slider-wrapper.splide").length) {
    $(".fact-link").on("click", function () {
      if ($(this).is(".active")) {
        return;
      }

      rmActive($(".fact-container.active"));
      setActive($(".fact-container").eq($(this).index()));
      rmActive($(".fact-link.active"));
      setActive($(this));
    });

    $(".tab-new").on("click", function () {
      if ($(this).is(".active")) {
        return;
      }

      let index = $(this).index();

      rmActive($(".tab-new.active"));
      setActive($(this));
      rmActive($(".slider-image-new"));
      $(".slider-image-new").each(function () {
        if ($(this).index() == index) setActive($(this));
      });

      let style = getStyle(index);

      hide(
        $(
          ".calculator-slide.splide__slide .calculator-slide, .calculator-slide .color-var, .wrap-border.calculator-btn"
        )
      );
      show(
        $(
          ".calculator-slide.splide__slide .calculator-slide .color-1, .calculator-slide" +
            `.${style}, .specification-${style}.color-1`
        )
      );
      show($(".calculator-slide.splide__slide .calculator-slide").eq(index));
      $(".calculator-tab.w--current").removeClass("w--current");
      $(`.calculator-tab`).eq(index).addClass("w--current");

      rmActive($(".color-tab.active, .slide-nav.active"));
      $(".div-block-14 .color-tab").each(function () {
        if ($(this).index() == 0) {
          setActive($(this));
        }
      });

      splideCalc.refresh();
    });

    const splide = new Splide(".slider-wrapper.splide", splideOptions);
    splide.mount();

    splide.on("move", () => setTimeout(changeHeight, vw > 480 ? 650 : 750));

    function changeHeight() {
      $(".splide__list").css(
        "height",
        $(".splide__slide.is-active .active img").height()
      );
    }
    changeHeight();

    $(".slick-btn-prev, .slick-btn-next").on("click", function () {
      let index = splide.index,
        textPrev,
        textNext;
      $(".slick-btn-prev, .slick-btn-next").removeClass("disabled");
      if ($(this).index() == 0) {
        splide.go("<");
        if (index-- - 1 == 0) {
          $(this).addClass("disabled");
        }
      } else {
        splide.go(">");
        if (index++ + 1 == 4) {
          $(this).addClass("disabled");
        }
      }

      switch (index) {
        case 0:
          textPrev = "";
          textNext = "Дивитись спальню";
          break;
        case 1:
          textPrev = "Дивитись вітальню";
          textNext = "Дивитись кухню";
          break;
        case 2:
          textPrev = "Дивитись спальню";
          textNext = "Дивитись душ";
          break;
        case 3:
          textPrev = "Дивитись кухню";
          textNext = "Дивитись ванну";
          break;
        case 4:
          textPrev = "Дивитись душ";
          textNext = "";
          break;
        default:
          return;
      }

      $(".slick-prev-text").html(textPrev);
      $(".slick-next-text").html(textNext);
    });
  }

  $(".calculator-tab").on("click", function () {
    let index = $(this).index();
    let style = getStyle(index);

    hide(
      $(
        ".calculator-slide.splide__slide .calculator-slide, .calculator-slide .color-var, .wrap-border.calculator-btn"
      )
    );
    show(
      $(
        ".calculator-slide.splide__slide .calculator-slide .color-1, .calculator-slide" +
          `.${style}, .specification-${style}.color-1`
      )
    );
    show($(".calculator-slide.splide__slide .calculator-slide").eq(index));
    $(".calculator-tab.w--current").removeClass("w--current");
    $(`.calculator-tab:eq(${index})`).addClass("w--current");

    rmActive($(".color-tab.active, .slide-nav.active"));
    $(".tab-new").eq(index).trigger("click");
    $(".div-block-14 .color-tab").each(function () {
      if ($(this).index() == 0) {
        setActive($(this));
      }
    });

    splideCalc.refresh();
  });

  $(".wrap-border.calculator-btn").on("click", function () {
    let t = {
        _costPerMetre: $("#total").html(),
        _appliances: $(".choiceActiveBorder").data("appliances"),
        _style: style,
        _bath: +$("#bathtub").is(":checked"),
        _shower: +$("#shower").is(":checked"),
        _ceiling: val($(":radio[name='ceiling']:checked")),
        _flooring: val($(":radio[name='flooring']:checked")),
        _hygienicShower: checkbox($("#hygienicShower")),
        _secondGypsumLayer: checkbox($("#secondGypsumLayer")),
        _floorScreen: checkbox($("#floorscreed")),
        _heatedFlooring: val($("#heatedFlooring")),
        _denoising: checkbox($("#noise")),
        _entranceDoors: checkbox($("#doors")),
        _conditioning: val($("#conditioning")),
        _amountOfRooms: val($("#amountOfRooms")),
        _amountOfBathrooms: val($("#amountOfBathrooms")),
        _summedPrice: parseInt($("#totalWhole").html().replace(/ /, "")),
        _appliancesBoolTotal: checkbox($("#appliancesBool")),
        _furnitureBool: checkbox($("#furnitureBool")),
        _space: val($("#space")),
        _color: $(".div-block-14 .color-tab.active").index(),
      },
      cookieText = "";
    document.cookie = "";

    for (let e in t) {
      cookieText = e + "=" + t[e] + ";";
      document.cookie = cookieText;
    }
  });

  $(".increment-field .increment").on("click", function () {
    if ($(this).siblings(".increment-input") <= 0) {
      $(this).siblings(".increment-input").val(0);
    }
  });

  $("#wf-form-consult").on("submit", function () {
    if (!$("#agreementCheckbox").is(":checked")) {
      show($(".warning.agreementcheckbox"));
    } else {
      hide($(".warning.agreementcheckbox"));
    }

    if (!$("#phone").val()) {
      show($(".warning.inputs.phone"));
    } else {
      hide($(".warning.inputs.phone"));
    }

    if (!$("#name").val()) {
      show($(".warning.inputs.name"));
    } else {
      hide($(".warning.inputs.name"));
    }

    if ($(".warning").is(":visible")) {
      return false;
    } else {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbxaZQTrmT0wZsVWErYh9k8yxgTqUn1v9NfBTXyZCv01dFmRsp-4/exec";
      let fd = new FormData($("#wf-form-consult").get(0));

      fetch(scriptURL, {
        method: "POST",
        body: fd,
      }).catch((error) => console.error("Error!", error.message));
    }
  });

  $(".choice").on("click", function (e) {
    if (!$("#appliancesBool").is(":checked")) {
      e.preventDefault();
      $(".choiceActive").toggleClass("choiceActive");
      $(".choiceActiveBorder").toggleClass("choiceActiveBorder");
      return;
    }

    if (!$(this).hasClass("choiceActive")) {
      $(".choiceActive").removeClass("choiceActive");
      $(".choiceActiveBorder").removeClass("choiceActiveBorder");
      $(this).addClass("choiceActive");
      $(this).parent().addClass("choiceActiveBorder");

      if ($("#node").is(":checked")) {
        $("#appliances").prop("checked", "checked");
      }
    }
  });

  $("#node").on("change", function () {
    if ($("#node").is(":checked") && $(".choiceActive").length) {
      $(".choiceActive").toggleClass("choiceActive");
      $(".choiceActiveBorder").toggleClass("choiceActiveBorder");
    }
  });

  $("#appliancesBool").on("change", function () {
    if ($(this).is(":checked") && !$(".choiceActiveBorder").length) {
      $(".choice").first().toggleClass("choiceActive");
      $(".choice").first().parent().toggleClass("choiceActiveBorder");
    }
  });

  $(".hover-text").on("click", function () {
    let obj = $(this);

    obj.siblings(".hover-modal").css("display", "flex");
    if (obj.siblings(".hover-modal").css("opacity") == 0) {
      if (!isInViewport(obj.siblings(".hover-modal").get(0))) {
        $([document.documentElement, document.body]).animate(
          {
            scrollTop: obj.siblings(".hover-modal").offset().top - 96,
          },
          450
        );
      }
      obj.siblings(".hover-modal").animate(
        {
          bottom: 42,
          opacity: 1,
        },
        200,
        "swing"
      );
    } else {
      obj.siblings(".hover-modal").animate(
        {
          bottom: 12,
          opacity: 0,
        },
        200,
        function () {
          hide(obj.siblings(".hover-modal"));
        }
      );
    }
  });

  $(".submit-container .button").on("click", function (e) {
    e.preventDefault();
    let oldBtnName = $(this).html();
    $(this).html("Зачекайте...");

    let url = $(this).attr("href");
    let fd = new FormData();
    let ukrStyle =
      data.style === "cozy"
        ? "Козі"
        : data.style === "japandi"
        ? "Джапанді"
        : data.style === "fusion"
        ? "Фьюжн"
        : data.style === "modern"
        ? "Модерн"
        : "Нео Класика";
    let months =
      data.space < 60
        ? 4
        : data.space <= 80
        ? 5
        : data.space <= 100
        ? 6
        : data.space <= 130
        ? 7
        : data.space <= 150
        ? 8
        : data.space <= 175
        ? 9
        : 10;
    fd.append("Стиль", ukrStyle);
    fd.append("Ціна за метр", $("#total").html());
    fd.append("Загальна ціна", $("#totalWhole").html());
    fd.append("Площа", val($("#space")));
    fd.append("Кількість кімнат", val($("#amountOfRooms")));
    fd.append("Кількість санвузлів", val($("#amountOfBathrooms")));
    fd.append("Ванна", checkbox($("#bathtub")));
    fd.append("Душ", checkbox($("#shower")));

    let ceiling =
        $(":radio[name='ceiling']:checked").val() == "stretch ceiling"
          ? "Натяжна матова"
          : $(":radio[name='ceiling']:checked").val() == "gapless"
          ? "Натяжна бесщелева матова"
          : "Гіпсокартон",
      flooring =
        $(":radio[name='flooring']:checked").val() == "laminat"
          ? "Ламінат"
          : $(":radio[name='flooring']:checked").val() == "vynil"
          ? "Вінілова підлога"
          : "Паркет",
      appliances =
        getData($(".choiceActiveBorder"), "appliances") == undefined
          ? "Не обрано"
          : getData($(".choiceActiveBorder"), "appliances")
              .substr(0, 1)
              .toUpperCase() +
            getData($(".choiceActiveBorder"), "appliances").substr(1);

    fd.append("Стеля", ceiling);
    fd.append("Підлогове покриття", flooring);
    fd.append("Стяжка підлоги", checkbox($("#floorscreed")));
    fd.append("Шумоізоляція", checkbox($("#noise")));
    fd.append("Вхідні двері", checkbox($("#doors")));
    fd.append("Другий шар гіпсокартону", checkbox($("#secondGypsumLayer")));
    fd.append("Гігієнічний душ", checkbox($("#hygienicShower")));
    fd.append("Тепла підлога", val($("#heatedFlooring")));
    fd.append("Кондиціювання", val($("#conditioning")));
    fd.append("Меблі", checkbox($("#furnitureBool")));
    fd.append("Техніка", appliances);
    fd.append("Термін виконання робіт", months);

    fetch(
      "https://script.google.com/macros/s/AKfycbxiJPHg5oz88UhS0apuylDhgjLskSLo-Dt2mvF6VA/exec",
      {
        method: "POST",
        body: fd,
      }
    )
      .then(() => {
        $(this).html(oldBtnName);
        window.location = url;
      })
      .catch((error) => console.error("Error!", error.message));
  });

  $(".closing-btn").on("click", function () {
    let obj = $(this);
    obj.parent(".hover-modal").animate(
      {
        bottom: 12,
        opacity: 0,
      },
      200,
      function () {
        hide(obj.parent(".hover-modal"));
      }
    );
  });

  if (vw <= 480) {
    $(".tab-new").eq(1).trigger("click");
  }

  if (vw >= 992) {
    $(".preview-image, .blackbg-text").on({
      mouseenter: () => $(".video-cursor").css("opacity", 1),
      mouseleave: () => $(".video-cursor").css("opacity", 0),
    });
    $(".project-link-image").on({
      mouseenter: () => $(".project-dot").css("opacity", 1),
      mouseleave: () => $(".project-dot").css("opacity", 0),
    });
    $(".arrow-right").on({
      mouseenter: () => $(".small-hover.right").css("opacity", 1),
      mouseleave: () => $(".small-hover.right").css("opacity", 0),
    });
    $(".arrow-left").on({
      mouseenter: () => $(".small-hover.left").css("opacity", 1),
      mouseleave: () => $(".small-hover.left").css("opacity", 0),
    });

    $(".color-tab").on("click", function () {
      let index = $(this).index();
      let number = $(".calculator-tab.w--current").index();
      let style = getStyle(number);

      if ($(this).not(".active")) {
        rmActive($(".color-tab.active"));
        $(".div-block-14 .color-tab").each(function () {
          if ($(this).index() == index) {
            setActive($(this));
          }
        });

        hide($(".color-var, .wrap-border.calculator-btn"));
        show(
          $(
            `.calculator-slide .color-${
              index + 1
            }, .wrap-border.calculator-btn.specification-${style}.color-${
              index + 1
            }`
          )
        );
      }
    });

    $(".calculator-slider-option").on("click", function () {
      rmActive($(".calculator-slider-option.active"));
      setActive($(this));
      slideIndex = parseInt($(this).data("slider-index"));
      splideCalc.go(slideIndex);
    });

    $(".calculator-arrow").on("click", function () {
      if ($(this).is(".arrow-right")) {
        splideCalc.go(">");
      } else {
        splideCalc.go("<");
      }

      rmActive($(".calculator-slider-option.active"));
      setActive($(`.calculator-slider-option:eq(${splideCalc.index})`));
    });

    $("form input").on("keydown", function (e) {
      if (13 != e.keyCode) {
        e.preventDefault();
      }
    });
  }

  if (vw <= 767) {
    $(".star").on("mouseleave", function () {
      $(this).removeClass("hidden");
      rmActive($(this).siblings(".image-price"));
    });

    $(".image-price").on("click", function () {
      if ($(this).is(".active")) {
        $(this).siblings(".star").removeClass("hidden");
        rmActive($(this));
      }
    });

    $(".star").on("click", function () {
      if ($(this).is(".hidden")) {
        $(this).removeClass("hidden");
        rmActive($(this).siblings(".image-price"));
      } else {
        $(this).addClass("hidden");
        setActive($(this).siblings(".image-price"));
      }
    });
  }

  function getStyle(number) {
    return number === 0
      ? "cozy"
      : number === 1
      ? "japandi"
      : number === 2
      ? "fusion"
      : number === 3
      ? "modern"
      : "neoclassic";
  }

  function setActive(obj) {
    obj.addClass("active");
  }

  function rmActive(obj) {
    obj.removeClass("active");
  }

  function hide(obj) {
    obj.toggleClass("hidden-elem");
    obj.css("display", "none");
  }

  function show(obj) {
    obj.removeClass("hidden-elem");
    obj.css("display", "");
  }

  function getData(obj, dataVal) {
    if (isFinite(obj.data(dataVal))) {
      return parseInt(obj.data(dataVal));
    } else {
      return obj.data(dataVal);
    }
  }

  function val(obj) {
    if (isFinite(obj.val())) {
      return parseInt(obj.val());
    } else {
      return obj.val();
    }
  }

  function checkbox(obj) {
    return +obj.is(":checked");
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});
