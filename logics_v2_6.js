$("input").each(function () {
  $(this).attr("name", $(this).data("name"));
});

$(".choiceactive.card").toggleClass("choiceActiveBorder");
$("#laminat").prop("checked", !0);

$(".wrap-border.calculator-btn").click(() => {
  let t = {};
  i = "";
  document.cookie = "";
  t._costPerMetre = $("#total").html();
  t._appliances = $(".choiceActiveBorder").data("appliances");
  t._style = style;
  t._bath = +$("#bathtub").is(":checked");
  t._shower = +$("#shower").is(":checked");
  t._ceiling = val($(":radio[name='ceiling']:checked"));
  t._flooring = val($(":radio[name='flooring']:checked"));
  t._hygienicShower = checkbox($("#hygienicShower"));
  t._secondGypsumLayer = checkbox($("#secondGypsumLayer"));
  t._floorScreed = checkbox($("#floorscreed"));
  t._heatedFlooring = val($("#heatedFlooring"));
  t._denoising = checkbox($("#noise"));
  t._entranceDoors = checkbox($("#doors"));
  t._conditioning = val($("#conditioning"));
  t._amountOfRooms = val($("#amountOfRooms"));
  t._amountOfBathrooms = val($("#amountOfBathrooms"));
  t._summedPrice = parseInt($("#totalWhole").html().replace(/ /, ""));
  t._appliancesBoolTotal = checkbox($("#appliancesBool"));
  t._furnitureBool = checkbox($("#furnitureBool"));
  t._space = val($("#space"));
  t._color = $(".div-block-14 .color-tab.active").index();
  for (let e in t) {
    i = e + "=" + t[e] + ";";
    document.cookie = i;
  }
});
$(".increment-field .increment").click(function (e) {
  e.preventDefault(),
    val($(this).siblings(".increment-input")) <= 0 &&
      $(this).siblings(".increment-input").val(0);
});
let e = 0,
  t = $(".main-slider");
let options = {
  arrows: !1,
  dots: !1,
  speed: 425,
  draggable: !1,
  adaptiveHeight: !0,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        mobileFirst: true,
        draggable: !0,
        infinite: !0,
        arrows: !0,
        dots: !1,
        adaptiveHeight: !0,
      },
    },
    {
      breakpoint: 478,
      settings: {
        mobileFirst: true,
        draggable: !0,
        infinite: !0,
        arrows: !0,
        dots: !0,
        adaptiveHeight: !0,
      },
    },
  ],
};

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
    }).catch((error) => console.error("Error!", error.message));
  }
});

t.slick(options);
let i = $(".calculator-slider-side");
let options2 = {
  dots: !1,
  speed: 425,
  arrows: !1,
  draggable: !1,
  responsive: [
    {
      breakpoint: 991,
      settings: "unslick",
    },
  ],
};
i.slick(options2);

$(".slider-tab").click(function () {
  t.slick("unslick");
  t.slick(options);
});

$(".calculator-tab").click(function () {
  if ($(window).width() > 992) {
    $(".calculator-slider-side").slick("unslick");
    $(".calculator-slider-side").slick(options);
  } else {
    $(".calcualtor-tab").unbind("click");
    return;
  }
});

$(".slide-bar-container").click(function () {
  rmActives($(".slide-nav.active"));
  setActive($(this).children(".slide-nav"));
  slideIndex = $(this).index();
  t[0].slick.slickGoTo(slideIndex);
});

$(".preview-image, .blackbg-text").hover(
  () => opacity($(".video-cursor"), 1),
  () => opacity($(".video-cursor"), 0)
);
$(".project-link-image").hover(
  () => opacity($(".project-dot"), 1),
  () => opacity($(".project-dot"), 0)
);
$(".arrow-right").hover(
  () => opacity($(".small-hover.right"), 1),
  () => opacity($(".small-hover.right"), 0)
);
$(".arrow-left").hover(
  () => opacity($(".small-hover.left"), 1),
  () => opacity($(".small-hover.left"), 0)
);

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
$("form input").keydown(function (e) {
  13 != e.keyCode || e.preventDefault();
});
$(".slider-tab, .calculator-tab").click(function () {
  let e = $(this).index();
  let u = getStyle(e);

  hide(
    $(
      ".slide, .calculator-slide, .calculator-slide .color-var, .slide .color-var, .style-heading, .style-note, .style-description, .wrap-border.calculator-btn"
    )
  );
  show(
    $(
      ".slide.main, .calculator-slide.main .calculator-slide .color-1, .slide .color-1, .calculator-slide" +
        `.${u}, .slide.${u}, .header-${u}, .specification-${u}.color-1`
    )
  );
  $(".slider-tab.w--current, .calculator-tab.w--current").removeClass(
    "w--current"
  );
  $(`.calculator-tab:eq(${e}), .slider-tab:eq(${e})`).addClass("w--current");

  t.slick("refresh");
  $(".calculator-slider-side").slick("refresh");

  rmActives($(".color-tab.active, .slide-nav.active"));
  setActive($(".slide-nav:eq(0)"));
  $(".div-block-14 .color-tab").each(function () {
    if ($(this).index() == 0) {
      setActive($(this));
    }
  });
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
$(".color-tab").click(function () {
  let index = $(this).index();
  let number = $(".calculator-tab.w--current").index();
  let style = getStyle(number);
  if ($(this).not(".active")) {
    rmActives($(".color-tab.active"));
    $(".div-block-14 .color-tab").each(function () {
      if ($(this).index() == index) {
        setActive($(this));
      }
    });
    hide($(".color-var, .wrap-border.calculator-btn"));
    show(
      $(
        `.slide .color-${index + 1}, .calculator-slide .color-${
          index + 1
        }, .wrap-border.calculator-btn.specification-${style}.color-${
          index + 1
        }`
      )
    );
  }
});

$(".calculator-slider-option").click(function () {
  rmActives($(".calculator-slider-option.active"));
  setActive($(this));
  slideIndex = parseInt($(this).data("slider-index"));
  i[0].slick.slickGoTo(slideIndex);
});

$(".calculator-button, .calculate").click(() => {
  $(".calculator-slider-side").slick("refresh");
});

$(".slider-arrow").click(function () {
  if ($(this).is(".arrow-left")) {
    t.slick("slickPrev");
  } else {
    t.slick("slickNext");
  }
  let e = t.slick("slickCurrentSlide");
  rmActives($(".slide-nav.active"));
  setActive($(`.slide-nav:eq(${e})`));
  if ($(window).width() < 992) {
    $(".slider-arrow").unbind("click");
  }
});

$(".calculator-arrow").click(function () {
  if ($(this).is(".arrow-right")) {
    $(".calculator-slider-side").slick("slickNext");
  } else {
    $(".calculator-slider-side").slick("slickPrev");
  }
  let e = i.slick("slickCurrentSlide");
  rmActives($(".calculator-slider-option.active"));
  setActive($(`.calculator-slider-option:eq(${e})`));
  if ($(window).width() < 992) {
    $(".calculator-arrow").unbind("click");
  }
});

$(".submit-container .button").click(function (e) {
  let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
  if (isSafari) { 
    e.preventDefault(); 
    $(this).html("Зачекайте...");
  }
  let url = $(this).attr("href"),
      oldBtnName = $(this).html(),
      fd = new FormData(),
    ukrStyle =
      data.style == "cozy"
        ? "Козі"
        : data.style == "japandi"
        ? "Джапанді"
        : data.style == "fusion"
        ? "Фьюжн"
        : data.style == "modern"
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
      val($(":radio[name='ceiling']:checked")) == "stretch ceiling"
        ? "Натяжна матова"
        : val($(":radio[name='ceiling']:checked")) == "gapless"
        ? "Натяжна бесщелева матова"
        : "Гіпсокартон",
    flooring =
      val($(":radio[name='flooring']:checked")) == "laminat"
        ? "Ламінат"
        : val($(":radio[name='flooring']:checked")) == "vynil"
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

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxiJPHg5oz88UhS0apuylDhgjLskSLo-Dt2mvF6VA/exec";

  fetch(scriptURL, {
    method: "POST",
    body: fd,
  })
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

function getStyle(number) {
  if (number == 0) {
    return "cozy";
  } else if (number == 1) {
    return "japandi";
  } else if (number == 2) {
    return "fusion";
  } else if (number == 3) {
    return "modern";
  } else {
    return "neoclassic";
  }
}

function setActive(obj) {
  return obj.addClass("active");
}

function rmActives(obj) {
  return obj.toggleClass("active");
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
