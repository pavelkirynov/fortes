import Splide from "@splidejs/splide";

$(function () {
  const vw: number = $(window).width();
  const emailRegex: RegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  $(".choiceactive.card").toggleClass("choiceActiveBorder");
  $("#laminat").prop("checked", true);

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

  $("input").each(function () {
    $(this).attr("name", $(this).data("name"));
  });

  if ($(".slider-wrapper.splide").length) {
    $(".fact-link").on("click", function () {
      if ($(this).is(".active")) {
        return;
      }

      $(".fact-container.active").removeClass("active");
      setActive($(".fact-container").eq($(this).index()));
      $(".fact-link.active").removeClass("active");
      setActive($(this));
    });

    $(".tab-new").on("click", function () {
      if ($(this).is(".active")) {
        return;
      }

      let index = $(this).index();

      $(".tab-new.active").removeClass("active");
      setActive($(this));
      $(".slider-image-new").removeClass("active");
      $(".slider-image-new").each(function () {
        if ($(this).index() == index) setActive($(this));
      });

      let style = getStyle(index);

      $(
        ".calculator-slide.splide__slide .calculator-slide, .calculator-slide .color-var, .wrap-border.calculator-btn"
      ).toggle(false);

      $(
        ".calculator-slide.splide__slide .calculator-slide .color-1, .calculator-slide" +
          `.${style}, .specification-${style}.color-1`
      ).toggle(true);
      $(".calculator-slide.splide__slide .calculator-slide")
        .eq(index)
        .toggle(true);
      $(".calculator-tab.w--current").removeClass("w--current");
      $(`.calculator-tab`).eq(index).addClass("w--current");

      $(".color-tab.active, .slide-nav.active").removeClass("active");
      $(".div-block-14 .color-tab").each(function () {
        if ($(this).index() == 0) {
          setActive($(this));
        }
      });

      splideCalc.refresh();
    });

    const splide = new Splide(".slider-wrapper.splide", splideOptions);
    splide.mount();

    splide.on("move", () =>
      setTimeout(
        () => {
          $(".splide__list").css(
            "height",
            $(".splide__slide.is-active .active img").height()
          );
        },
        vw > 480 ? 650 : 750
      )
    );

    $(".splide__list").css(
      "height",
      $(".splide__slide.is-active .active img").height()
    );

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

    $(
      ".calculator-slide.splide__slide .calculator-slide, .calculator-slide .color-var, .wrap-border.calculator-btn"
    ).toggle(false);

    $(
      ".calculator-slide.splide__slide .calculator-slide .color-1, .calculator-slide" +
        `.${style}, .specification-${style}.color-1`
    ).toggle(true);
    $(".calculator-slide.splide__slide .calculator-slide")
      .eq(index)
      .toggle(true);
    $(".calculator-tab.w--current").removeClass("w--current");
    $(`.calculator-tab:eq(${index})`).addClass("w--current");

    $(".color-tab.active, .slide-nav.active").removeClass("active");
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
        _floorScreed: checkbox($("#floorscreed")),
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
    if ($(this).siblings(".increment-input").length <= 0) {
      $(this).siblings(".increment-input").val(0);
    }
  });

  $("#wf-form-consult").on("submit", (e) => {
    if (!$("#agreementCheckbox").is(":checked")) {
      $(".warning.agreementcheckbox").toggle(true);
    } else {
      $(".warning.agreementcheckbox").toggle(false);
    }

    if (!$("#phone").val()) {
      $(".warning.inputs.phone").toggle(true);
    } else {
      $(".warning.inputs.phone").toggle(false);
    }

    if (!$("#name").val()) {
      $(".warning.inputs.name").toggle(true);
    } else {
      $(".warning.inputs.name").toggle(false);
    }

    if ($(".warning").is(":visible")) {
      e.preventDefault();
      return false;
    } else {
      e.preventDefault();
      let oldBtnName = $("#submitBtn").html();
      $("#submitBtn").html("Зачекайте...");

      let fd = new FormData($("#wf-form-consult").get(0) as HTMLFormElement);

      //заявки на консультацию
      fetch(
        "https://script.google.com/macros/s/AKfycbxaZQTrmT0wZsVWErYh9k8yxgTqUn1v9NfBTXyZCv01dFmRsp-4/exec",
        {
          method: "POST",
          body: fd,
        }
      )
        .then(() => {
          $("#submitBtn").html(oldBtnName);
        })
        .catch((error) => console.error("Error!", error.message))
        .finally(() => {
          if (window.location.href.includes("/ru")) {
            window.location.assign("/ru/kdyakuiemo");
          } else {
            window.location.assign("/kdyakuiemo");
          }
        });
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
    if (parseInt(obj.siblings(".hover-modal").css("opacity")) == 0) {
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
          obj.siblings(".hover-modal").toggle(false);
        }
      );
    }
  });

  $(".submit-container .button").on("click", function (e) {
    e.preventDefault();
  });

  //form logics
  $(".form-2 :radio").on("change", function () {
    if ($(".form-2 :radio:checked").is("#sEmailCheckbox")) {
      $("#sEmail").toggle(true);
      $("#sPhone").toggle(false);
      $("#sPhone").val("");
    } else {
      $("#sPhone").toggle(true);
      $("#sEmail").toggle(false);
      $("#sEmail").val("");
    }
  });

  $(".form-2").on("submit", async function (e) {
    e.preventDefault();

    if (!$("#agreementCheckbox").is(":checked")) {
      $(".warning.agreementcheckbox").toggle(true);
    } else {
      $(".warning.agreementcheckbox").toggle(false);
    }
    if (!$("#sPhone").val() && !$("#sEmail").val()) {
      $(".warning.inputs.second").toggle(true);
    } else {
      $(".warning.inputs.second").toggle(false);
    }
    if (!$("#sName").val()) {
      $(".warning.inputs.first").toggle(true);
    } else {
      $(".warning.inputs.first").toggle(false);
    }
    if (
      !!$("#sEmail").val() &&
      !emailRegex.test($("#sEmail").val() as string)
    ) {
      $(".warning.inputs.email").toggle(true);
    } else {
      $(".warning.inputs.email").toggle(false);
    }

    if ($(".warning").is(":visible")) {
      e.preventDefault();
      return false;
    }

    $("#wf-form-client-info").toggle(false);
    $(".specification-modal .modal-success").toggle(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzymV7zIns6N9AdE882E44BwQAFZ_wy0JNIahqsoDWx3kqLi-U/exec";

    fetch(scriptURL, {
      method: "POST",
      body: new FormData($("#wf-form-client-info").get(0) as HTMLFormElement),
    });

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
    fd.append("Площа", val($("#space")) as string);
    fd.append("Кількість кімнат", val($("#amountOfRooms")) as string);
    fd.append("Кількість санвузлів", val($("#amountOfBathrooms")) as string);
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
          : (getData($(".choiceActiveBorder"), "appliances") as string)
              .substring(0, 1)
              .toUpperCase() +
            (
              getData($(".choiceActiveBorder"), "appliances") as string
            ).substring(1);

    fd.append("Стеля", ceiling);
    fd.append("Підлогове покриття", flooring);
    fd.append("Стяжка підлоги", checkbox($("#floorscreed")));
    fd.append("Шумоізоляція", checkbox($("#noise")));
    fd.append("Вхідні двері", checkbox($("#doors")));
    fd.append("Другий шар гіпсокартону", checkbox($("#secondGypsumLayer")));
    fd.append("Гігієнічний душ", checkbox($("#hygienicShower")));
    fd.append("Тепла підлога", `${val($("#heatedFlooring"))}`);
    fd.append("Кондиціювання", `${val($("#conditioning"))}`);
    fd.append("Меблі", checkbox($("#furnitureBool")));
    fd.append("Техніка", appliances);
    fd.append("Термін виконання робіт", `${months}`);

    fetch(
      //"https://script.google.com/macros/s/AKfycbxiJPHg5oz88UhS0apuylDhgjLskSLo-Dt2mvF6VA/exec",
      "https://script.google.com/macros/s/AKfycbyt7QOcA0Dp_2voHy2w1rVGCllwvW_SX_V8iDTD5E7zJohqH0C4/exec",
      {
        method: "POST",
        body: fd,
      }
    );

    localStorage.setItem("convert_id", "false");

    window.open(
      $('.calculator-btn:not([style*="display: none"]) a').data("href"),
      "_blank"
    );

    $(".modal-note").html("Зачекайте...");

    while (localStorage.getItem("convert_id") == "false") {
      await new Promise((r) => setTimeout(r, 200));
    }

    if (localStorage.getItem("convert_id") != "") {
      const convertId = localStorage.getItem("convert_id");

      /*if ($("#telegram").is(":checked")) {
        const telegramLink = `https://t.me/fortesagency_bot/?start=${convertId}_${(
          $("#sPhone").val() as string
        )
          .replace(new RegExp(/[+() ]/, "g"), "")
          .trim()}-${data.style}`;

        $(".wrap-border.telegram").toggle();
        $(".modal-note").html(
          `Для того, аби отримати специфікацію, перейдіть за посиланням до нашого бота.`
        );
        $(".final-btn.telegram").attr("href", telegramLink);
        $(".final-btn.telegram").attr("target", "_blank");
        $(".final-btn.telegram").on("click", () => {
          window.open(telegramLink);
          localStorage.clear();
          window.location.assign("/sdyakuiemo");
        });
      } else {*/
      fetch("https://api.fortes.agency/mail", {
        method: "POST",
        body: JSON.stringify({
          fileId: convertId,
          fileName: data.style,
          recipientMail: $("#sEmail").val(),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).finally(() => {
        setTimeout(() => {
          localStorage.clear();
          window.location.assign("/sdyakuiemo");
        }, 2000);
      });
      //}
    }
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
        obj.parent(".hover-modal").toggle(false);
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
        $(".color-tab.active").removeClass("active");
        $(".div-block-14 .color-tab").each(function () {
          if ($(this).index() == index) {
            setActive($(this));
          }
        });

        $(".color-var, .wrap-border.calculator-btn").toggle(false);

        $(
          `.calculator-slide .color-${
            index + 1
          }, .wrap-border.calculator-btn.specification-${style}.color-${
            index + 1
          }`
        ).toggle(true);
      }
    });

    $(".calculator-slider-option").on("click", function () {
      $(".calculator-slider-option.active").removeClass("active");
      setActive($(this));
      splideCalc.go(parseInt($(this).data("slider-index")));
    });

    $(".calculator-arrow").on("click", function () {
      if ($(this).is(".arrow-right")) {
        splideCalc.go(">");
      } else {
        splideCalc.go("<");
      }

      $(".calculator-slider-option.active").removeClass("active");
      setActive($(`.calculator-slider-option:eq(${splideCalc.index})`));
    });

    $("form input").on("keydown", (e) => {
      if (e.key == "Enter") {
        e.preventDefault();
      }
    });
  }

  if (vw <= 767) {
    $(".star").on("mouseleave", function () {
      $(this).removeClass("hidden");
      $(this).siblings(".image-price").removeClass("active");
    });

    $(".image-price").on("click", function () {
      if ($(this).is(".active")) {
        $(this).siblings(".star").removeClass("hidden");
        $(this).removeClass("active");
      }
    });

    $(".star").on("click", function () {
      if ($(this).is(".hidden")) {
        $(this).removeClass("hidden");
        $(this).siblings(".image-price").removeClass("active");
      } else {
        $(this).addClass("hidden");
        $(this).siblings(".image-price").removeClass("active");
      }
    });
  }

  function getStyle(number: number): DesignStyle {
    return number === 0
      ? DesignStyle.Cozy
      : number === 1
      ? DesignStyle.Japandi
      : number === 2
      ? DesignStyle.Fusion
      : number === 3
      ? DesignStyle.Modern
      : DesignStyle.NeoClassic;
  }

  function setActive(obj: JQuery<HTMLElement>) {
    obj.addClass("active");
  }

  function getData(obj: JQuery<HTMLElement>, dataVal: string): string | number {
    if (isFinite(Number(obj.data(dataVal)))) {
      return parseInt(obj.data(dataVal));
    } else {
      return obj.data(dataVal);
    }
  }

  function val(object: JQuery<HTMLElement>): number | string | string[] {
    if (isFinite(Number(object.val()))) {
      return Number(object.val());
    } else {
      return object.val();
    }
  }

  function checkbox(object: JQuery<HTMLElement>): string {
    return `${object.is(":checked")}`;
  }

  function isInViewport(element: HTMLElement): boolean {
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
