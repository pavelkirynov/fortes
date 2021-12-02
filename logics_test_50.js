$(document).ready(function () {
  $("input").each(function () {
    $(this).attr("name", $(this).data("name"));
  });

  $(".choiceactive.card").toggleClass("choiceActiveBorder");
  $("#laminat").prop("checked", !0);

  $(".fact-link").click(function () {
    if ($(this).is(".active")) return;

    rmActive($(".fact-container.active"));
    setActive($(".fact-container").eq($(this).index()));
    rmActive($(".fact-link.active"));
    setActive($(this));
  });

  $(".tab-new").click(function () {
    if ($(this).is(".active")) return;
    let index = $(this).index();

    rmActive($(".tab-new.active"));
    setActive($(this));
    rmActive($(".slider-image-new"));
    $(".slider-image-new").each(function () {
      if ($(this).index() == index) setActive($(this));
    });
  });

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
  const splide = new Splide(".slider-wrapper.splide", splideOptions);
  const splideCalc = new Splide(".slider-container.splide", splideOptions);
  splide.mount();
  splideCalc.mount();

  splide.on("move", () => {
    setTimeout(changeHeight, vw > 480 ? 650 : 750);
  });

  function changeHeight() {
    $(".splide__list").css(
      "height",
      $(".splide__slide.is-active .active img").height()
    );
  }
  changeHeight();

  $(".wrap-border.calculator-btn").click(() => {
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
  $(".increment-field .increment").click((e) => {
    let sibling = $(this).siblings(".increment-input");
    if (sibling.val() <= 0) sibling.val(0);
  });

  $("#wf-form-consult").submit(function () {
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
      }).catch((error) => console.error("Error! ", error.message));
    }
  });

  $(".choice").click(function (e) {
    if (!$("#appliancesBool").is(":checked"))
      return (
        e.preventDefault(),
        $(".choiceActive").toggleClass("choiceActive"),
        void $(".choiceActiveBorder").toggleClass("choiceActiveBorder")
      );
    $(this).hasClass("borderAcrive") ||
      ($(".choiceActive").removeClass("choiceActive"),
      $(".choiceActiveBorder").removeClass("choiceActiveBorder"),
      $(this).addClass("choiceActive"),
      $(this).parent().addClass("choiceActiveBorder"),
      $("#node").is(":checked") && $("#appliances").prop("checked", "checked"));
  });
  $("#node").change(() => {
    $("#node").is(":checked") &&
      $(".choiceActive") &&
      ($(".choiceActive").toggleClass("choiceActive"),
      $(".choiceActiveBorder").toggleClass("choiceActiveBorder"));
  });
  $("#appliancesBool").change(function () {
    $(this).is(":checked") &&
      !document.querySelector(".choiceActiveBorder") &&
      ($(".choice").first().toggleClass("choiceActive"),
      $(".choice").first().parent().toggleClass("choiceActiveBorder"));
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

  $(".submit-container .button").click(function (e) {
    let isSafari =
      /constructor/i.test(window.HTMLElement) ||
      (function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
      })(
        !window["safari"] ||
          (typeof safari !== "undefined" && window["safari"].pushNotification)
      );
    if (isSafari) {
      e.preventDefault();
      $(this).html("Зачекайте...");
    }
    let url = $(this).attr("href"),
      oldBtnName = $(this).html(),
      fd = new FormData(),
      ukrStyle =
        data.style === "cozy"
          ? "Козі"
          : data.style === "japandi"
          ? "Джапанді"
          : data.style === "fusion"
          ? "Фьюжн"
          : data.style === "modern"
          ? "Модерн"
          : "Нео Класика",
      months =
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
        v$(":radio[name='flooring']:checked").val() == "laminat"
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
      .then((response) => {
        if (isSafari) {
          $(this).html(oldBtnName);
          window.location = url;
        }
      })
      .catch((error) => console.error("Error!", error.message));
  });

  $(".closing-btn").click(function () {
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

  if (vw >= 992) {
    $(".preview-image, .blackbg-text").hover(
      () => $(".video-cursor").css("opacity", 1),
      () => $(".video-cursor").css("opacity", 0)
    );
    $(".project-link-image").hover(
      () => $(".project-dot").css("opacity", 1),
      () => $(".project-dot").css("opacity", 0)
    );
    $(".arrow-right").hover(
      () => opacity($(".small-hover.right"), 1),
      () => opacity($(".small-hover.right"), 0)
    );
    $(".arrow-left").hover(
      () => opacity($(".small-hover.left"), 1),
      () => opacity($(".small-hover.left"), 0)
    );

    $(".color-tab").click(function () {
      let index = $(this).index(),
        number = $(".calculator-tab.w--current").index(),
        style = getStyle(number);
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

    $(".calculator-slider-option").click(function () {
      rmActive($(".calculator-slider-option.active"));
      setActive($(this));
      slideIndex = parseInt($(this).data("slider-index"));
      splideCalc.go(slideIndex);
    });

    $(".calculator-tab").click(function () {
      let e = $(this).index(),
        u = getStyle(e);

      hide(
        $(
          ".calculator-slide.splide__slide .calculator-slide, .calculator-slide .color-var, .wrap-border.calculator-btn"
        )
      );
      show(
        $(
          ".calculator-slide.main .calculator-slide .color-1, .calculator-slide" +
            `.${u}, .specification-${u}.color-1`
        )
      );
      show($(".calculator-slide.splide__slide .calculator-slide").eq(e));
      $(".calculator-tab.w--current").removeClass("w--current");
      $(`.calculator-tab:eq(${e})`).addClass("w--current");

      rmActive($(".color-tab.active, .slide-nav.active"));
      $(".tab-new").eq(e).click();
      $(".div-block-14 .color-tab").each(function () {
        if ($(this).index() == 0) setActive($(this));
      });
    });

    $(".calculator-arrow").click(function () {
      if ($(this).is(".arrow-right")) {
        splide.go(">");
      } else {
        splide.go("<");
      }

      rmActive($(".calculator-slider-option.active"));
      setActive($(`.calculator-slider-option:eq(${splideCalc.index})`));
    });

    $("form input").keydown(function (e) {
      13 != e.keyCode || e.preventDefault();
    });
  }

  if (vw <= 767) {
    $(".star").mouseleave(function () {
      $(this).removeClass("hidden");
      $(this).siblings(".image-price").removeClass("active");
    });

    $(".image-price").click(function () {
      if ($(this).is(".active")) {
        $(this).siblings(".star").removeClass("hidden");
        $(this).removeClass("active");
      }
    });

    $(".star").click(function () {
      if ($(this).is(".hidden")) {
        $(this).removeClass("hidden");
        $(this).siblings(".image-price").removeClass("active");
      } else {
        $(this).addClass("hidden");
        $(this).siblings(".image-price").addClass("active");
      }
    });
  }
  if (vw > 480) {
    $(".slick-btn-prev, .slick-btn-next").click(function () {
      let index = splide.index,
        textPrev,
        textNext;
      $(".slick-btn-prev, .slick-btn-next").removeClass("disabled");
      if ($(this).index() == 0) {
        splide.go("<");
        if (index-- - 1 == 0) $(this).addClass("disabled");
      } else {
        splide.go(">");
        if (index++ + 1 == 4) $(this).addClass("disabled");
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
    return obj.addClass("active");
  }

  function rmActive(obj) {
    return obj.removeClass("active");
  }

  function hide(obj) {
    obj.toggle(false);
  }

  function show(obj) {
    obj.toggle(true);
  }

  function getData(obj, data) {
    if (isFinite(obj.data(data))) {
      return parseInt(obj.data(data));
    } else {
      return obj.data(data);
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

  function opacity(obj, val) {
    obj.css("opacity", val);
  }
});
