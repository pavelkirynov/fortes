    let style = "cozy";
    let appliancesCookie = "";
    $("#space").val(50);
let data = {
    costPerMetre: 0,
    appliances: 1,
    style: "cozy",
    bath: 1,
    shower: 0,
    ceiling: "stretch ceiling",
    flooring: "laminat",
    hygienicShower: 0,
    secondGypsumLayer: 0,
    floorScreed: 0,
    heatedFlooring: 0,
    denoising: 0,
    entranceDoors: 0,
    conditioning: 0,
    amountOfRooms: 2,
    amountOfBathrooms: 1,
    summedPrice: 0,
    appliancesBoolTotal: 1,
    furnitureBool: 1,
    space: 50
};
        $("input").on("input", function () {
            updateUserData();
            returnValue(space);
        });
        $("#space").on("input", function (e) {
            $(this).val($(this).val().match(/\d*\.?\d+/));
            space = +$("#space").val();
            returnValue(space);
            if ((space == 0) || (amountOfRooms == 0)) {
                $("#total").html(0);
                $("#totalWhole").html(0);
                return;
            }
        });
        $("#space").on("focusout", function (e) {
            if ((parseInt($(this).val()) < 30) || (!$(this).val())) {
                $(this).val(30);
                space = +$("#space").val();
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
            if (amountOfRooms == 0) {
                $("#total").html(0);
                $("#totalWhole").html(0);
                return;
            }
            returnValue(space);
        });
        $(".calculator-tab").on("click", function (e) {
            number = parseInt($(this).attr("data-slider-index"));
            getUserStyle(number);
            $(".calculator-slide").toggle(false);
            $(".calculator-slide.main").toggle(true);
            $(`.calculator-slide.` + style).toggle(true);
            returnValue(space);
        });
        $("#calculate").on("click", function () {
            let slideNumber = parseInt($(".slider-tab.w--current").data("slider-index"));
            getUserStyle(slideNumber);
            $(".calculator-tab").removeClass("w--current");
            $(".calculator-tab[data-slider-index='" + slideNumber + "']").addClass("w--current");
            returnValue(space);
            $(".calculator-slider-side").slick("slickGoTo", 0);
            $(".calculator-slide").toggle(false);
            $(".calculator-slide.main").toggle(true);
            $(".calculator-slide." + style).toggle(true);
            $(".calculator-slider-option.active").removeClass("active");
            $(".calculator-slider-option:eq(0)").addClass("active");
        });
        $(".calculatecozy").on("click", function () {
            style = "cozy";
            $("calculator-tab.w--current").removeClass("w--current");
            $(".wrap-border.calculator-tab .custom-style").css("color", "black");
            $(".wrap-border.calculator-tab .custom-style").css("background", "white");
            $("calculator-tab:eq(0)").addClass("w--current");
            $(".calculator-tab").removeClass("w--current");
            $(".calculator-tab:eq(0)").addClass("w--current");
            returnValue(space);
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
            appliancesBoolTotal = 1;
            appliancesCookie = $(this).attr("data-appliances");
            if ($(this).attr("data-appliances") == "bosch") {
                appliancesBool.standardBosch = 1;
                appliancesBool.premiumMiele = 0;
                appliancesBool.standardGorenje = 0;
            } else if ($(this).attr("data-appliances") == "gorenje") {
                appliancesBool.standardBosch = 0;
                appliancesBool.premiumMiele = 0;
                appliancesBool.standardGorenje = 1;
            } else {
                appliancesBool.standardBosch = 0;
                appliancesBool.premiumMiele = 1;
                appliancesBool.standardGorenje = 0;
            }
            returnValue(space);
        });
        $("#node").on("click", function () {
            appliancesBoolTotal = 0;
            appliancesBool.standardGorenje = 0;
            appliancesBool.standardBosch = 0;
            appliancesBool.premiumMiele = 0;
            returnValue(space);
        });
        $("#appliancesBool").on("click", function () {
            if (!($(this).is(":checked"))) {
                return;
            }
            if (!(document.querySelector(".choiceActiveBorder"))) {
                appliancesBoolTotal = 1;
                appliancesBool.standardGorenje = 1;
                returnValue(space);
            }
        });
        async function returnValue(multiplier) {
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
            $("#totalWhole").html(numberWithSpaces(Math.round(parseFloat(price) * multiplier)));
            
            function numberWithSpaces(num) {
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");   
            }
        }

function updateUserData() {
    data.space = +$("#space").val();
    data.amountOfRooms = +$("#amountOfRooms").val();
    data.amountOfBathrooms = +$("#amountOfBathrooms").val();
    data.heatedFlooring = +$("#heatedFlooring").val();
    data.conditioning = +$("#conditioning").val();
    data.hygienicShower = +$("#hygienicShower").is(":checked");
    data.secondGypsumLayer = +$("#secondGypsumLayer").is(":checked");
    data.furnitureBool = +$("#furnitureBool").is(":checked");
    data.bath = +$("#bathtub").is(":checked");
    data.shower = +$("#shower").is(":checked");
    data.appliancesBoolTotal = +$("#appliancesBool").is(":checked");
    data.floorScreed = +$("#floorscreed").is(":checked");
    data.denoising = +$("#noise").is(":checked");
    data.entranceDoors = +$("#doors").is(":checked");
    data.ceiling = $(":radio[name='ceiling']:checked").val();
    data.flooring = $(":radio[name='flooring']:checked").val();

}
        function getUserStyle(number) {
            if (number == 0) {
                style = "cozy";
            } else if (number == 2) {
                style = "fusion";
            } else if (number == 1) {
                style = "japandi";
            } else if (number == 3) {
                style = "modern";
            } else if (number == 4) {
                style = "neoclassic";
            }
        }
        function returnRoundedPrice(price) {
            return Math.round(price / (space * 28.5)); 
        }
        
        returnValue(space);

async function makeCall() {
    let response = await fetch("https://api.fortes.agency/calc", {
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST"
    });
    let result = await response.json();
    return(result.cost_per_meter);
}

