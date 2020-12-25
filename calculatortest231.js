    let style = "cozy";
    let appliancesCookie = "";
    $("#space").val(50);
    let space = +$("#space").val(),
        amountOfRooms = +$("#amountOfRooms").val(),
        amountOfBathrooms = +$("#amountOfBathrooms").val(),
        furnitureBool = +$("#furnitureBool").is(":checked"),
        appliancesBoolTotal = +$("#appliancesBool").is(":checked"),
        bathtub = +$("#bathtub").is(":checked"),
        shower = +$("#shower").is(":checked"),
        optionsBool = {
            hygienicShower: +$("#hygienicShower").is(":checked"),
            secondGypsumLayer: +$("#secondGypsumLayer").is(":checked"),
            floorScreed: +$("#floorscreed").is(":checked"),
            heatedFlooring: +$("#heatedFlooring").val(),
            denoising: +$("#noise").is(":checked"),
            entranceDoors: +$("#doors").is(":checked"),
            conditioning: +$("#conditioning").val(),
        },
        ceilingBool = {
            ceiling1: +$("#ceiling1").is(":checked"),
            ceiling2: +$("#ceiling2").is(":checked"),
            ceiling3: +$("#ceiling3").is(":checked"),
        },
        flooringBool = {
            laminate: +$("#laminat").is(":checked"),
            vinyl: +$("#vynil").is(":checked"),
            parquet: +$("#parket").is(":checked"),
        },
        appliancesBool = {
            standardGorenje: 1,
            standardBosch: 0,
            premiumMiele: 0,
        };
    const onDataLoaded = (data) => {
        let sign = "",
            value = 0,
            morethan = ">=",
            lessthan = "<=",
            equals = "=",
            price = 0,
            threshold = 0;

        function parseData(range, comparableData) {
            let rawData = data.feed.entry.find((entry) => entry.title.$t == range).gs$cell.inputValue;
            if (rawData.includes("=IF")) {
                while (rawData[rawData.length - 1] == ")") {
                    rawData = rawData.substring(0, rawData.length - 1);
                }
                let formulaData = rawData.split("IF");
                formulaData = formulaData.map(item => item.split(";"));
                for (let i = 1; i < formulaData.length; i++) {
                    value = parseFloat(formulaData[i][1].replace(",", "."));

                    let item = formulaData[i][0].slice(1, formulaData[i][0].replace(",", ".").length).split("=");
                    threshold = formulaData[i][0].slice(1, formulaData[i][0].replace(",", ".").length).split("=")[1];
                    if (item[0].indexOf(">") > -1) {
                        sign = morethan;
                    } else if (item[0].indexOf("<") > -1) {
                        sign = lessthan;
                    } else {
                        sign = equals;
                    }
                    if (!price) {
                        price = value;
                    }
                    if (sign === "<=") {
                        if (+comparableData <= +threshold) {
                            price = value;
                            return price;
                        }
                    }
                    if (sign === ">=") {
                        if (+comparableData >= +threshold) {
                            price = value;
                        }
                    }
                }
                return parseFloat(price);
            }
            if (isFinite(parseFloat(data.feed.entry.find((entry) => entry.title.$t == range).content.$t.replace(",", ".")))) {
                let result = data.feed.entry.find((entry) => entry.title.$t == range).content.$t.replace(",", ".");
                return parseFloat(result.replace(",", "."));
            }
            return parseFloat(data.feed.entry.find((entry) => entry.title.$t == range).content.$t);
        }

        function handleFurniture(furniture, FurnitureMarkup) {
            let element = furniture,
                kitchenTotal = 0,
                livingroomTotal = 0,
                bedroomTotal = 0,
                lightingTotal = 0,
                decorationsTotal = 0;
                
            kitchenTotal = (element.kitchen + element.kitchenDelivery + element.kitchenMontage + element.kitchenSink + element.kitchenSinkMixer + element.table + (element.chairs * 4) + element.otherKitchenFurniture) * furnitureBool;
            livingroomTotal = (element.sofa + element.livingroomChair) * furnitureBool;
            bedroomTotal = element.bed + element.matress + (element.cupboard + element.bedChair + element.mirror) * furnitureBool + element.shelves * 2;
            lightingTotal = ((element.spotlight * (0.48 * space)) + element.kitchenWallLight + element.livingroomFloorLight + element.hangingLight)*furnitureBool + element.kitchenCeilingLight * 2 + element.bedsideLight * 2 + element.chandelier;
            decorationsTotal = element.jalousie * furnitureBool + element.coffeeTable * (amountOfRooms - 1) + (element.cornice + element.tulle + element.curtains) * amountOfRooms;
            let showPrice = ((element.kitchen + element.kitchenDelivery + element.kitchenMontage + element.kitchenSink + element.kitchenSinkMixer + element.table + (element.chairs * 4) + element.otherKitchenFurniture) + (element.sofa + element.livingroomChair) + (element.bed + element.matress + (element.cupboard + element.bedChair + element.mirror) + element.shelves * 2) +
                ((element.spotlight * (0.48 * space)) + element.kitchenWallLight + element.livingroomFloorLight + element.hangingLight) + element.kitchenCeilingLight * 2 + element.bedsideLight * 2 + element.chandelier + element.jalousie + element.coffeeTable * (amountOfRooms - 1) + (element.cornice + element.tulle + element.curtains) * amountOfRooms) * 1.03;
            let furnitureTotal = (kitchenTotal + livingroomTotal + bedroomTotal + lightingTotal + decorationsTotal)* 1.03 * (1 + (parseData("S157") / 100));
            if (furnitureBool) {
                furnitureTotal *= 1.03 * (1 + (parseData("S157") / 100));   
            }
            $("#furnitureBool").siblings(".label").html(`Так <span class=\"grey\">+${returnRoundedPrice(showPrice)}$/м²</span>`);
            return furnitureTotal;
        }

        function handleWork(work, months) {
            let ceilingTotal = 0,
                paintingTotal = 0,
                flooringTotal = 0,
                plinthTotal = 0,
                generalTotal = 0,
                mainWorks = 0;
            mainWorks = (work.electricity + work.waterSupply + work.canalisation + (work.ventilation * amountOfBathrooms)) * space;
            generalTotal = (work.kafel * amountOfBathrooms * space) + (work.bathtub * bathtub) + (work.shower * shower) + work.gypsumMontage * space + work.doorInstallation * (amountOfBathrooms + amountOfRooms);
            ceilingTotal = (work.ceiling1 * ceilingBool.ceiling1 + work.ceiling2 * ceilingBool.ceiling2 + work.ceiling3 * ceilingBool.ceiling3) * space;
            flooringTotal = (work.laminate * flooringBool.laminate + work.vinyl * flooringBool.vinyl + work.parquet * flooringBool.parquet) * space;
            paintingTotal = work.wallPainting * space + work.ceilingPainting * ceilingBool.ceiling3 * space + work.mouldings;
            plinthTotal = (work.plinth + work.plinthHidden) * space;
            let workTotal = (generalTotal + ceilingTotal + flooringTotal + paintingTotal + plinthTotal);
            workTotal += workTotal * 0.022 + ((space * 100) + (parseData("G8", space) * 2 * 1200) + 3000) + mainWorks;
            return workTotal;
        }

        function handleMaterials(materials) {
            let element = materials,
                generalTotal = 0,
                bathroomTotal = 0,
                flooringTotal = 0,
                materialsTotal = 0;
            generalTotal = element.door * (amountOfBathrooms + amountOfRooms) + element.kafel * amountOfBathrooms * 35 + 0.66 * element.corniceWall * space + 0.66 * element.corniceCeiling * space + 0.59 * element.plinth * space + parseData("H77", space) * element.electricalFurniture;
            bathroomTotal = amountOfBathrooms * (element.sink + element.stand + element.waterMixer + element.bathShelf) + element.bathtub * bathtub + (element.shower + element.ladder) * shower + (bathtub + shower) * element.bathShowerMixer + amountOfBathrooms * element.toilet + (element.towelHolder + element.bathMirror) * amountOfBathrooms;
            let vinylAmount, laminateAmount, parquetAmount;
            if (space < 100) {
                vinylAmount = parquetAmount = laminateAmount = space - (amountOfBathrooms * 7);
            } else if (space >= 100) {
                laminateAmount = vinylAmount = parquetAmount = space - (amountOfBathrooms * 10);
            }
            flooringTotal = element.laminate * laminateAmount * flooringBool.laminate + element.quartzvinyl * vinylAmount * flooringBool.vinyl + element.parquet * parquetAmount * flooringBool.parquet;
            materialsTotal = generalTotal + bathroomTotal + flooringTotal + space * 100 * furnitureBool;
            return (materialsTotal);
        }

        function handleOptions(options) {
            let element = options,
                optionsTotal = 0;
            let denoising1 = 0,
                denoising2 = 0;
            let floorScreed = optionsBool.floorScreed * element.floorScreed * space;
            let shower = (amountOfBathrooms * element.hygienicShower * optionsBool.hygienicShower);
            let heatedFlooring = optionsBool.heatedFlooring * element.heatedFlooring;
            let secondGypsumLayer = element.partitions * optionsBool.secondGypsumLayer * space;
            if ((optionsBool.denoising + ceilingBool.ceiling3 ) > 1) {
                denoising1 = element.gypsumCeilingDenoising * space;
            }
            if ((optionsBool.denoising + ceilingBool.ceiling1 + ceilingBool.ceiling2 ) > 1) {
                denoising2 = element.tensionCeilingDenoising * space;
            }
            let denoising3 = element.denoising * optionsBool.denoising * space;
            let conditioning = 0;
            if (optionsBool.conditioning) {
                conditioning = element.conditioner * optionsBool.conditioning * (1 + parseData("S113") / 100) * 1.05 + element.conditioningSplit * space;
            }
            let entranceDoors = optionsBool.entranceDoors * (element.entranceDoor + element.entranceDoorMontage);
            $("#floorscreed").siblings(".label").html(`Стяжка підлоги <span class=\"grey\">+${returnRoundedPrice(element.floorScreed * space)}$/м²</span>`);
            $("#noise").siblings(".label").html(`Шумоізоляція <span class=\"grey\">+${returnRoundedPrice(((element.denoising * space) + (element.tensionCeilingDenoising * space * (ceilingBool.ceiling1 + ceilingBool.ceiling2)) + (element.gypsumCeilingDenoising * space * ceilingBool.ceiling3)))}$/м²</span>`);
            $("#doors").siblings(".label").html(`Вхідні двері <span class=\"grey\">+${returnRoundedPrice(element.entranceDoor + element.entranceDoorMontage)}$/м²</span>`);
            $("#secondGypsumLayer").siblings(".label").html(`Другий шар гіпсокартону <span class=\"grey\">+${returnRoundedPrice(element.partitions * space)}$/м²</span>`);
            $("#hygienicShower").siblings(".label").html(`Гігієнічний душ <span class=\"grey\">+${returnRoundedPrice(amountOfBathrooms * element.hygienicShower)}$/м²</span>`);
            optionsTotal = floorScreed + shower + heatedFlooring + secondGypsumLayer + denoising1 + denoising2 + denoising3 + conditioning + entranceDoors;
            return optionsTotal;
        }

        function handleAppliances(appliances) {
            let element = "";
            if (appliancesBool.standardGorenje) {
                element = appliances.gorenje;
            } else if (appliancesBool.standardBosch) {
                element = appliances.bosch;
            } else if (appliancesBool.premiumMiele) {
                element = appliances.miele;
            }
            let sum = 0,
                i = 1;
            if (appliancesBoolTotal) {
                for (let key in element) {
                sum += +element[key];
                i++;
            }
            i = 1;
            }
            let gorenjePrice = 0,
                boschPrice = 0,
                mielePrice = 0;
            for (let nkey in appliances.gorenje) {
                gorenjePrice += appliances.gorenje[nkey];
                i++;
            }
            i = 1;
            for (let ikey in appliances.bosch) {
                boschPrice += appliances.bosch[ikey];
                i++;
            }
            i = 1;
            for (let jkey in appliances.miele) {
                mielePrice += appliances.miele[jkey];
                i++;
            }
            $(".choice[data-appliances='gorenje']").children(".grey").html(`${returnRoundedPrice(gorenjePrice)}$/м²`);
            $(".choice[data-appliances='bosch']").children(".grey").html(`${returnRoundedPrice(boschPrice)}$/м²`);
            $(".choice[data-appliances='miele']").children(".grey").html(`${returnRoundedPrice(mielePrice)}$/м²`);
            sum += i * parseFloat(parseData("G36"));
            return (sum * appliancesBoolTotal);
        }

        function handleTotal() {
            if (style == "modern") {
                letter = "O";
            } else if (style == "fusion") {
                letter = "M";
            } else if (style == "cozy") {
                letter = "I";
            } else if (style == "japandi") {
                letter = "K";
            } else if (style == "neoclassic") {
                letter = "Q";
            }
            let work = {};
            let workArrNum = [42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 56, 57, 58, 60, 61, 62, 64, 65];
            let workPropArr = ["waterSupply", "canalisation", "ventilation", "electricity", "shower", "bathtub", "gypsumMontage", "kafel", "doorInstallation", "wallPainting", "ceilingPainting", "mouldings", "ceiling1", "ceiling2", "ceiling3", "laminate", "vinyl", "parquet", "plinth", "plinthHidden"];
            for (let i = 0; i < workPropArr.length; i++) {
                work[`${workPropArr[i]}`] = parseData(`${letter}${workArrNum[i]}`, space);
            }
            
            let options = {};
            let optionsArrNum = [102, 103, 104, 105, 106, 107, 108, 109, 110, 112, 113];
            let optionsPropArr = ["floorScreed", "hygienicShower", "heatedFlooring", "partitions", "gypsumCeilingDenoising", "tensionCeilingDenoising", "denoising", "entranceDoor", "entranceDoorMontage", "conditioningSplit", "conditioner"];
            for (let i = 0; i < optionsPropArr.length; i++) {
                options[`${optionsPropArr[i]}`] = parseData(`${letter}${optionsArrNum[i]}`, space);
            }
            
            let materials = {};
            let materialsArrNum = [72, 73, 74, 75, 76, 77, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94];
            let materialsPropArr = ["door", "kafel", "corniceWall", "corniceCeiling", "plinth", "electricalFurniture", "sink", "stand", "waterMixer", "bathShelf", "bathtub", "ladder", "shower", "bathShowerMixer", "toilet", "towelHolder", "bathMirror", "laminate", "quartzvinyl", "parquet", "delivery"];
            for (let i = 0; i < materialsPropArr.length; i++) {
                materials[`${materialsPropArr[i]}`] = parseData(`${letter}${materialsArrNum[i]}`, space);
            }

            let furniture = {};
            let furnitureArrNum = [120, 121, 122, 123, 124, 125, 126, 127, 131, 132, 134, 135, 136, 137, 138, 139, 141, 142, 143, 144, 145, 146, 147, 149, 150, 151, 152, 153];
            let furniturePropArr = ["kitchen", "kitchenMontage", "kitchenDelivery", "kitchenSink", "kitchenSinkMixer", "table", "chairs", "otherKitchenFurniture", "sofa", "livingroomChair", "bed", "matress", "shelves", "cupboard", "bedChair", "mirror", "spotlight", "chandelier", "bedsideLight", "kitchenWallLight", "kitchenCeilingLight", "livingroomFloorLight", "hangingLight", "curtains", "tulle", "cornice", "jalousie", "coffeeTable"];
            for (let i = 0; i < furniturePropArr.length; i++) {
                furniture[`${furniturePropArr[i]}`] = parseData(`${letter}${furnitureArrNum[i]}`, space);
            }
            let appliances = {
                gorenje: {
                    fridge: parseData("D161"),
                    oven: parseData("D162"),
                    varochnayaPanel: parseData("D163"),
                    microwave: parseData("D164"),
                    vytyazhka: parseData("D165"),
                    washingMachine: parseData("D166"),
                    dishwasher: parseData("D167"),
                    boiler: parseData("D168"),
                    TV: parseData("D169"),
                },
                bosch: {
                    fridge: parseData("D175"),
                    oven: parseData("D176"),
                    varochnayaPanel: parseData("D177"),
                    microwave: parseData("D178"),
                    vytyazhka: parseData("D179"),
                    washingMachine: parseData("D180"),
                    sushylnaMachina: parseData("D181"),
                    dishwasher: parseData("D182"),
                    boiler: parseData("D183"),
                    TV: parseData("D184"),
                },
                miele: {
                    fridge: parseData("D190"),
                    oven: parseData("D191"),
                    varochnayaPanel: parseData("D192"),
                    vytyazhka: parseData("D193"),
                    washingMachine: parseData("D194"),
                    sushylnaMachina: parseData("D195"),
                    dishwasher: parseData("D196"),
                    boiler: parseData("D197"),
                    TV: parseData("D198"),
                },
            };
            let AccessorriesMarkup = parseData("S99"),
                FurnitureMarkup = parseData("S157"),
                ClimaticMarkup = parseData("S113");
            let months = parseFloat(parseData("G8", space));
            let result = (handleAppliances(appliances) * 0.9 + handleFurniture(furniture, FurnitureMarkup) + ((handleMaterials(materials) + handleWork(work, months)) * (1 + (AccessorriesMarkup / 100))) + handleOptions(options)) / (28.5 * space);
            return result;
        }

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
        function returnValue(multiplier) {
            
            $("#total").html(numberWithSpaces(Math.round(handleTotal())));
            $("#totalWhole").html(numberWithSpaces(Math.round(handleTotal() * multiplier)));
            
            function numberWithSpaces(num) {
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");   
            }
        }
        function updateUserData() {
            space = +$("#space").val();
            amountOfRooms = +$("#amountOfRooms").val();
            amountOfBathrooms = +$("#amountOfBathrooms").val();
            optionsBool.heatedFlooring = +$("#heatedFlooring").val();
            optionsBool.conditioning = +$("#conditioning").val();
            optionsBool.hygienicShower = +$("#hygienicShower").is(":checked");
            optionsBool.secondGypsumLayer = +$("#secondGypsumLayer").is(":checked");
            furnitureBool = +$("#furnitureBool").is(":checked");
            bathtub = +$("#bathtub").is(":checked");
            shower = +$("#shower").is(":checked");
            appliancesBoolTotal = +$("#appliancesBool").is(":checked");
            optionsBool.floorScreed = +$("#floorscreed").is(":checked");
            optionsBool.denoising = +$("#noise").is(":checked");
            optionsBool.entranceDoors = +$("#doors").is(":checked");
            ceilingBool.ceiling1 = +$("#ceiling1").is(":checked");
            ceilingBool.ceiling2 = +$("#ceiling2").is(":checked");
            ceilingBool.ceiling3 = +$("#ceiling3").is(":checked");
            flooringBool.laminate = +$("#laminat").is(":checked");
            flooringBool.vinyl = +$("#vynil").is(":checked");
            flooringBool.parquet = +$("#parket").is(":checked");   
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
    };
