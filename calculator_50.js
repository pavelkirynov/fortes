    let style = "cozy";
    let appliancesCookie = "";
    $("#space").val(50);
let data = {
    style: "cozy",
    bath: 1,
    shower: 0,
    ceiling: "stretch ceiling",
    flooring: "laminat",
    hygienic_shower: 0,
    second_gypsum_layer: 0,
    floor_screed: 0,
    heated_flooring: 0,
    denoising: 0,
    entrance_doors: 0,
    conditioning: 0,
    amount_of_rooms: 2,
    amount_of_bathrooms: 1,
    appliances: "gorenje",
    appliances_bool_total: 0,
    furniture_bool: 1,
    space: 50
};
        $("input").on("input", function () {
            updateUserData();
            returnValue(data.space);
        });
        $("#space").on("input", function (e) {
            $(this).val($(this).val().match(/\d*\.?\d+/));
            data.space = +$("#space").val();
            returnValue(data.space);
            if ((data.space == 0) || (data.amountOfRooms == 0)) {
                $("#total").html(0);
                $("#totalWhole").html(0);
                return;
            }
        });
        $("#space").on("focusout", function (e) {
            if ((parseInt($(this).val()) < 30) || (!$(this).val())) {
                $(this).val(30);
                data.space = +$("#space").val();
                returnValue(30);
            }
        });
        $(".increment-field .increment").on("click", function (e) {
            e.preventDefault();
            $(this)
                .siblings(".increment-input")
                .val(
                    parseInt($(this).siblings(".increment-input").val()) +
                    parseInt($(this).val())
                );

            if ($(this).siblings(".increment-input").val() === "0") {
                if ($(this).val() === "1") {
                    $(this).siblings($(".increment")).toggleClass("disabled");
                } else {
                    $(this).toggleClass("disabled");
                }
            } else if (parseInt($(this).siblings(".increment-input").val()) > 0) {
                $(this).siblings(".disabled").toggleClass("disabled");
            }
            updateUserData();
            if (data.amountOfRooms == 0) {
                $("#total").html(0);
                $("#totalWhole").html(0);
                return;
            }
            returnValue(data.space);
        });
        $(".calculator-tab").on("click", function (e) {
            number = parseInt($(this).data("slider-index"));
//            getUserStyle(number);
            $(".calculator-slide").toggle(false);
            $(".calculator-slide.main").toggle(true);
            $(`.calculator-slide.` + data.style).toggle(true);
            returnValue(data.space);
        });
        $("#calculate").on("click", function () {
            let slideNumber = parseInt($(".slider-tab.w--current").data("slider-index"));
//            getUserStyle(slideNumber);
            $(".calculator-tab").removeClass("w--current");
            $(".calculator-tab[data-slider-index='" + slideNumber + "']").addClass("w--current");
            returnValue(data.space);
            $(".calculator-slider-side").slick("slickGoTo", 0);
            $(".calculator-slide").toggle(false);
            $(".calculator-slide.main").toggle(true);
            $(".calculator-slide." + style).toggle(true);
            $(".calculator-slider-option.active").removeClass("active");
            $(".calculator-slider-option:eq(0)").addClass("active");
        });
        $(".calculatecozy").on("click", function () {
            data.style = "cozy";
            style = "cozy;"
            $("calculator-tab.w--current").removeClass("w--current");
            $(".wrap-border.calculator-tab .custom-style").css("color", "black");
            $(".wrap-border.calculator-tab .custom-style").css("background", "white");
            $("calculator-tab:eq(0)").addClass("w--current");
            $(".calculator-tab").removeClass("w--current");
            $(".calculator-tab:eq(0)").addClass("w--current");
            returnValue(data.space);
            $(".calculator-slider-side").slick("slickGoTo", 0);
            $(".calculator-slide").toggle(false);
            $(".calculator-slide.main, .calculator-slide.cozy").toggle(true);
            $(".calculator-slider-option.active").removeClass("active");
            $(".calculator-slider-option:eq(0)").addClass("active");
        });
        $(".choice").on("click", function () {
            if ($("#node").is(":checked")) {
                return 0;
            }
            data.appliances_bool_total = 1;
            data.appliances = $(".choiceActiveBorder").data("appliances");
            returnValue(data.space);
        });
        $("#node").on("click", function () {
            data.appliances_bool_total = 0;
            returnValue(data.space);
        });
        $("#appliancesBool").on("click", function () {
            if (!($(this).is(":checked"))) {
                return;
            }
            if (!(document.querySelector(".choiceActiveBorder"))) {
                data.appliances_bool_total = 1;
                data.appliances = "gorenje";
                returnValue(data.space);
            }
        });
/*$("#appliancesBool").on("change", function () {
    if ($(this).is(":checked")) {
        data.appliances_bool_total = 1;
        returnValue(data.space);
    }
});*/
        async function returnValue(multiplier) {
            getUserStyle($(".calculator-tab.w--current").data("slider-index"));
            updateUserData();
            
            let response = await fetch("https://api.fortes.agency/calc", {
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST"
            });
            let result = await response.json();
            let price = result.cost_per_meter;
            
            $("#total").html(numberWithSpaces(Math.round(parseFloat(price))));
            $("#totalWhole").html(numberWithSpaces(Math.round(parseFloat(price) * parseFloat(multiplier))));
            
            function numberWithSpaces(num) {
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");   
            }
        }

function updateUserData() {
    data.space = +$("#space").val();
    data.amount_of_rooms = +$("#amountOfRooms").val();
    data.amount_of_bathrooms = +$("#amountOfBathrooms").val();
    data.heated_flooring = +$("#heatedFlooring").val();
    data.conditioning = +$("#conditioning").val();
    data.hygienic_shower = +$("#hygienicShower").is(":checked");
    data.second_gypsum_Layer = +$("#secondGypsumLayer").is(":checked");
    data.furniture_bool = +$("#furnitureBool").is(":checked");
    data.bath = +$("#bathtub").is(":checked");
    data.shower = +$("#shower").is(":checked");
    data.appliances_bool_total = +$("#appliancesBool").is(":checked");
    data.floor_screed = +$("#floorscreed").is(":checked");
    data.denoising = +$("#noise").is(":checked");
    data.entrance_doors = +$("#doors").is(":checked");
    data.ceiling = $(":radio[name='ceiling']:checked").val();
    data.flooring = $(":radio[name='flooring']:checked").val();
    data.appliances = $(".choiceActiveBorder").data("appliances");
}
        function getUserStyle(number) {
            if (number == 0) {
                style = "cozy";
                data.style = "cozy";
            } else if (number == 2) {
                style = "fusion";            
                data.style = "fusion";            
            } else if (number == 1) {
                style = "japandi";
                data.style = "japandi";
            } else if (number == 3) {
                style = "modern";
                data.style = "modern";
            } else if (number == 4) {
                style = "neoclassic";
                data.style = "neoclassic";
            }
        }
        function returnRoundedPrice(price) {
            return Math.round(price / (data.space * 28.5)); 
        }
        
        returnValue(data.space);
