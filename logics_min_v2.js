$("input").each(function(){$(this).attr("name",$(this).data("name"))}),$(".choiceactive.card").toggleClass("choiceActiveBorder"),$("#laminat").prop("checked",!0),$(".wrap-border.calculator-btn").click(()=>{let e={};i="",document.cookie="",e._costPerMetre=$("#total").html(),e._appliances=$(".choiceActiveBorder").data("appliances"),e._style=style,e._bath=+$("#bathtub").is(":checked"),e._shower=+$("#shower").is(":checked"),e._ceiling=val($(":radio[name='ceiling']:checked")),e._flooring=val($(":radio[name='flooring']:checked")),e._hygienicShower=checkbox($("#hygienicShower")),e._secondGypsumLayer=checkbox($("#secondGypsumLayer")),e._floorScreed=checkbox($("#floorscreed")),e._heatedFlooring=val($("#heatedFlooring")),e._denoising=checkbox($("#noise")),e._entranceDoors=checkbox($("#doors")),e._conditioning=val($("#conditioning")),e._amountOfRooms=val($("#amountOfRooms")),e._amountOfBathrooms=val($("#amountOfBathrooms")),e._summedPrice=parseInt($("#totalWhole").html().replace(/ /,"")),e._appliancesBoolTotal=checkbox($("#appliancesBool")),e._furnitureBool=checkbox($("#furnitureBool")),e._space=val($("#space")),e._color=$(".div-block-14 .color-tab.active").index();for(let c in e)i=c+"="+e[c]+";",document.cookie=i}),$(".increment-field .increment").click(function(e){e.preventDefault(),val($(this).siblings(".increment-input"))<=0&&$(this).siblings(".increment-input").val(0)});let e=0,t=$(".main-slider"),options={arrows:!1,dots:!1,speed:425,draggable:!1,adaptiveHeight:!0,responsive:[{breakpoint:991,settings:{mobileFirst:!0,draggable:!0,infinite:!0,arrows:!0,dots:!1,adaptiveHeight:!0}},{breakpoint:478,settings:{mobileFirst:!0,draggable:!0,infinite:!0,arrows:!0,dots:!0,adaptiveHeight:!0}}]};$("#wf-form-consult").submit(function(){if($("#agreementCheckbox").is(":checked")?hide($(".warning.agreementcheckbox")):show($(".warning.agreementcheckbox")),$("#phone").val()?hide($(".warning.inputs.phone")):show($(".warning.inputs.phone")),$("#name").val()?hide($(".warning.inputs.name")):show($(".warning.inputs.name")),$(".warning").is(":visible"))return!1;{const e="https://script.google.com/macros/s/AKfycbxaZQTrmT0wZsVWErYh9k8yxgTqUn1v9NfBTXyZCv01dFmRsp-4/exec";let i=new FormData($("#wf-form-consult").get(0));fetch(e,{method:"POST",body:i}).catch(e=>console.error("Error!",e.message))}}),t.slick(options);let i=$(".calculator-slider-side"),options2={dots:!1,speed:425,arrows:!1,draggable:!1,responsive:[{breakpoint:991,settings:"unslick"}]};function getStyle(e){return 0==e?"cozy":1==e?"japandi":2==e?"fusion":3==e?"modern":"neoclassic"}function setActive(e){return e.addClass("active")}function rmActives(e){return e.toggleClass("active")}function hide(e){e.toggle(!1)}function show(e){e.toggle(!0)}function getData(e,i){return isFinite(e.data(i))?parseInt(e.data(i)):e.data(i)}function val(e){return isFinite(e.val())?parseInt(e.val()):e.val()}function checkbox(e){return+e.is(":checked")}function isInViewport(e){const i=e.getBoundingClientRect();return i.top>=0&&i.left>=0&&i.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&i.right<=(window.innerWidth||document.documentElement.clientWidth)}function opacity(e,i){e.css("opacity",i)}i.slick(options2),$(".slider-tab").click(function(){t.slick("unslick"),t.slick(options)}),$(".calculator-tab").click(function(){$(window).width()>992?(i.slick("unslick"),i.slick(options)):$(".calcualtor-tab").unbind("click")}),$(".slide-bar-container").click(function(){rmActives($(".slide-nav.active")),setActive($(this).children(".slide-nav")),slideIndex=$(this).index(),t[0].slick.slickGoTo(slideIndex)}),$(".preview-image, .blackbg-text").hover(()=>opacity($(".video-cursor"),1),()=>opacity($(".video-cursor"),0)),$(".project-link-image").hover(()=>opacity($(".project-dot"),1),()=>opacity($(".project-dot"),0)),$(".arrow-right").hover(()=>opacity($(".small-hover.right"),1),()=>opacity($(".small-hover.right"),0)),$(".arrow-left").hover(()=>opacity($(".small-hover.left"),1),()=>opacity($(".small-hover.left"),0)),$(".choice").click(function(e){if(!$("#appliancesBool").is(":checked"))return e.preventDefault(),$(".choiceActive").toggleClass("choiceActive"),void $(".choiceActiveBorder").toggleClass("choiceActiveBorder");$(this).hasClass("borderAcrive")||($(".choiceActive").removeClass("choiceActive"),$(".choiceActiveBorder").removeClass("choiceActiveBorder"),$(this).addClass("choiceActive"),$(this).parent().addClass("choiceActiveBorder"),$("#node").is(":checked")&&$("#appliances").prop("checked","checked"))}),$("#node").change(()=>{$("#node").is(":checked")&&$(".choiceActive")&&($(".choiceActive").toggleClass("choiceActive"),$(".choiceActiveBorder").toggleClass("choiceActiveBorder"))}),$("#appliancesBool").change(function(){$(this).is(":checked")&&!document.querySelector(".choiceActiveBorder")&&($(".choice").first().toggleClass("choiceActive"),$(".choice").first().parent().toggleClass("choiceActiveBorder"))}),$("form input").keydown(function(e){13!=e.keyCode||e.preventDefault()}),$(".slider-tab, .calculator-tab").click(function(){let e=$(this).index(),i=getStyle(e);hide($(".slide, .calculator-slide, .calculator-slide .color-var, .slide .color-var, .style-heading, .style-note, .style-description, .wrap-border.calculator-btn")),show($(".slide.main, .calculator-slide.main .calculator-slide .color-1, .slide .color-1, .calculator-slide"+`.${i}, .slide.${i}, .header-${i}, .specification-${i}.color-1`)),$(".slider-tab.w--current, .calculator-tab.w--current").removeClass("w--current"),$(`.calculator-tab:eq(${e}), .slider-tab:eq(${e})`).addClass("w--current"),t.slick("refresh"),$(".calculator-slider-side").slick("refresh"),rmActives($(".color-tab.active, .slide-nav.active")),setActive($(".slide-nav:eq(0)")),$(".div-block-14 .color-tab").each(function(){0==$(this).index()&&setActive($(this))})}),$(".hover-text").on("click",function(){let e=$(this);e.siblings(".hover-modal").css("display","flex"),0==e.siblings(".hover-modal").css("opacity")?(isInViewport(e.siblings(".hover-modal").get(0))||$([document.documentElement,document.body]).animate({scrollTop:e.siblings(".hover-modal").offset().top-96},450),e.siblings(".hover-modal").animate({bottom:42,opacity:1},200,"swing")):e.siblings(".hover-modal").animate({bottom:12,opacity:0},200,function(){hide(e.siblings(".hover-modal"))})}),$(".color-tab").click(function(){let e=$(this).index(),i=getStyle($(".calculator-tab.w--current").index());$(this).not(".active")&&(rmActives($(".color-tab.active")),$(".div-block-14 .color-tab").each(function(){$(this).index()==e&&setActive($(this))}),hide($(".color-var, .wrap-border.calculator-btn")),show($(`.slide .color-${e+1}, .calculator-slide .color-${e+1}, .wrap-border.calculator-btn.specification-${i}.color-${e+1}`)))}),$(".calculator-slider-option").click(function(){rmActives($(".calculator-slider-option.active")),setActive($(this)),slideIndex=parseInt($(this).data("slider-index")),i[0].slick.slickGoTo(slideIndex)}),$(".calculator-button, .calculate").click(()=>{$(".calculator-slider-side").slick("refresh")}),$(".slider-arrow").click(function(){$(this).is(".arrow-left")?t.slick("slickPrev"):t.slick("slickNext");let e=t.slick("slickCurrentSlide");rmActives($(".slide-nav.active")),setActive($(`.slide-nav:eq(${e})`)),$(window).width()<992&&$(".slider-arrow").unbind("click")}),$(".calculator-arrow").click(function(){$(this).is(".arrow-right")?$(".calculator-slider-side").slick("slickNext"):$(".calculator-slider-side").slick("slickPrev");let e=i.slick("slickCurrentSlide");rmActives($(".calculator-slider-option.active")),setActive($(`.calculator-slider-option:eq(${e})`)),$(window).width()<992&&$(".calculator-arrow").unbind("click")}),$(".wrap-border.calculator-btn .button").click(function(){let e=new FormData,i="cozy"==data.style?"Козі":"japandi"==data.style?"Джапанді":"fusion"==data.style?"Фьюжн":"modern"==data.style?"Модерн":"Нео Класика",c=data.space<60?4:data.space<=80?5:data.space<=100?6:data.space<=130?7:data.space<=150?8:data.space<=175?9:10;e.append("Стиль",i),e.append("Ціна за метр",$("#total").html()),e.append("Загальна ціна",$("#totalWhole").html()),e.append("Площа",val($("#space"))),e.append("Кількість кімнат",val($("#amountOfRooms"))),e.append("Кількість санвузлів",val($("#amountOfBathrooms"))),e.append("Ванна",checkbox($("#bathtub"))),e.append("Душ",checkbox($("#shower")));let t="stretch ceiling"==val($(":radio[name='ceiling']:checked"))?"Натяжна матова":"gapless"==val($(":radio[name='ceiling']:checked"))?"Натяжна бесщелева матова":"Гіпсокартон",o="laminat"==val($(":radio[name='flooring']:checked"))?"Ламінат":"vynil"==val($(":radio[name='flooring']:checked"))?"Вінілова підлога":"Паркет",a=null==getData($(".choiceActiveBorder"),"appliances")?"Не обрано":getData($(".choiceActiveBorder"),"appliances").substr(0,1).toUpperCase()+getData($(".choiceActiveBorder"),"appliances").substr(1);e.append("Стеля",t),e.append("Підлогове покриття",o),e.append("Стяжка підлоги",checkbox($("#floorscreed"))),e.append("Шумоізоляція",checkbox($("#noise"))),e.append("Вхідні двері",checkbox($("#doors"))),e.append("Другий шар гіпсокартону",checkbox($("#secondGypsumLayer"))),e.append("Гігієнічний душ",checkbox($("#hygienicShower"))),e.append("Тепла підлога",val($("#heatedFlooring"))),e.append("Кондиціювання",val($("#conditioning"))),e.append("Меблі",checkbox($("#furnitureBool"))),e.append("Техніка",a),e.append("Термін виконання робіт",c);fetch("https://script.google.com/macros/s/AKfycbxiJPHg5oz88UhS0apuylDhgjLskSLo-Dt2mvF6VA/exec",{method:"POST",body:e}).catch(e=>console.error("Error!",e.message))}),$(".closing-btn").click(function(){let e=$(this);e.parent(".hover-modal").animate({bottom:12,opacity:0},200,function(){hide(e.parent(".hover-modal"))})});
