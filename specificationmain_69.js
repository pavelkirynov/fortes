const onDataLoaded = (data) => {
    let sign = "",
        value = 0,
        morethan = ">=",
        lessthan = "<=",
        equals = "=",
        price = 0,
        threshold = 0;

    function parseData(range, comparableData) {
        if (!data.feed.entry.find((entry) => entry.title.$t == range)) {
            return "";
        }

        let rawData = data.feed.entry.find((entry) => entry.title.$t == range).gs$cell.inputValue;
        if (rawData.includes("=IF")) {
            while (rawData[rawData.length - 1] == ")") {
                rawData = rawData.substring(0, rawData.length - 1);
            }
            let formulaData = rawData.split("IF");
            formulaData = formulaData.map(item => item.split(";"));
            for (let i = 1; i < formulaData.length; i++) {
                value = parseFloat(formulaData[i][1].replace(",", "."));

                let item = formulaData[i][0].slice(1, formulaData[i][0].length).split("=");
                threshold = formulaData[i][0].slice(1, formulaData[i][0].length).split("=")[1];
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
        return data.feed.entry.find((entry) => entry.title.$t == range).content.$t;
    }
    //first cell of furniture price column + amount of items to count
    let gorenje = [161, 9],
        bosch = [175, 10],
        miele = [190, 9];
    let cookies = document.cookie.split(";").map((cookie) => cookie.split("=")).reduce((accumulator, [key, value]) => ({
        ...accumulator,
        [key.trim()]: decodeURIComponent(value),
    }), {});
    let appliances = cookies._appliances;

    let styleURL = window.location.href.split("/");
    let style = styleURL[styleURL.length - 1].split("-")[0];
    let appliancesBoolTotal = +cookies._appliancesBoolTotal,
        furnitureBool = +cookies._furnitureBool,
        space = +cookies._space,
        bath = cookies._bath,
        shower = cookies._shower,
        amountOfRooms = cookies._amountOfRooms,
        amountOfBathrooms = cookies._amountOfBathrooms,
        letter,
        letterModel,
        ceiling = cookies._ceiling,
        hygienicShower = +cookies._hygienicShower,
        secondGypsumLayer = +cookies._secondGypsumLayer,
        floorScreed = cookies._floorScreed,
        heatedFlooring = +cookies._heatedFlooring,
        denoising = cookies._denoising,
        entranceDoors = cookies._entranceDoors,
        conditioning = cookies._conditioning,
        flooring = cookies._flooring,
        workSum = 0,
        furnitureSum = 0,
        $furniture = $("#furnitureList");


    if (style == "cozy") {
        letter = "I";
        letterModel = "A";
    } else if (style == "japandi") {
        letter = "K";
        letterModel = "B";
    } else if (style == "fusion") {
        letter = "M";
        letterModel = "C";
    } else if (style == "modern") {
        letter = "O";
        letterModel = "D";
    } else if (style == "neoclassic") {
        letter = "Q";
        letterModel = "E";
    }
    let flooringNum, ceilingNum, flooringNum2, mouldings, laminat = 0,
        parket = 0,
        vynil = 0,
        gapless = 0,
        stretch = 0,
        gypsum = 0;
    if (flooring == "laminat") {
        flooringNum = "60";
        flooringNum2 = "91";
        laminat = 1;
    } else if (flooring == "vynil") {
        flooringNum = "61";
        vynil = 1;
        flooringNum2 = "92";
    } else if (flooring == "parket") {
        flooringNum = "62";
        parket = 1;
        flooringNum2 = "93";
    }
    if (ceiling == "stretch ceiling") {
        ceilingNum = "56";
        mouldings = 0
    } else if (ceiling == "gapless") {
        ceilingNum = "57";
        mouldings = 0;
    } else if (ceiling == "gypsum") {
        ceilingNum = "58";
        mouldings = 1;
    }

    let textObject = "";

    let water = parseFloat(parseData(`${letter+42}`, space)) * space,
        canalisation = parseFloat(parseData(`${letter+43}`, space)) * space,
        vents = parseFloat(parseData(`${letter+44}`, space)) * space,
        electricity = parseFloat(parseData(`${letter+45}`, space)) * space;

    let workPriceArray = [water, canalisation, electricity, vents, parseFloat(parseData(`${letter + 46}`, space)), parseFloat(parseData(`${letter + 47}`, space)), parseFloat(parseData(`${letter + 48}`, space)) * space, parseFloat(parseData(`${letter + 49}`, space)) * space, parseFloat(parseData(`${letter + 50}`)), parseFloat(parseData(`${letter + 52}`, space)) * space, parseFloat(parseData(`${letter + 54}`)), parseFloat(parseData(`${letter + 53}`, space)) * 140, parseFloat(parseData(letter + ceilingNum, space)) * space, parseFloat(parseData(letter + flooringNum, space)) * space, parseFloat(parseData(`${letter + 64}`, space)) * space, parseFloat(parseData(`${letter + 65}`, space)) * space, Math.round((parseFloat(workSum) / 100) * 1.56), (parseFloat(parseData("G8", space) * 2 * 1200) + 3000 + (space * 100))];
    let workAmountArray = [1, 1, parseFloat(amountOfBathrooms), 1, parseInt(shower), parseInt(bath), 1, amountOfBathrooms, (parseFloat(amountOfRooms) + parseFloat(amountOfBathrooms)), 1, 1, mouldings, 1, 1, 1, 1, 1, 1];
    let workAdressesArray = [42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 54, 53, ceilingNum, flooringNum, 64, 65, 66, 67];

    for (let i = 0; i < workAdressesArray.length; i++) {
        workSum = appendNewPricelistEntry($("#work"), workSum, parseData("F" + workAdressesArray[i]), parseData("G" + workAdressesArray[i]), workAmountArray[i], workPriceArray[i]);
        textObject = `<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"><span class=\'name\'>${parseData("F" + workAdressesArray[i])}</span></div></div>`;
        $("#workList").append(textObject);
        console.log("test " + parseData("F" + workAdressesArray[i]) + " " + parseFloat(workPriceArray[i]) * parseFloat(workAmountArray[i]));
    }
    textObject = `<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"><span class=\'name\'>${parseData("F" + 66)}</span></div></div>`;
    workSum += (workSum - (vents + canalisation + electricity + water)) * 0.022;
    console.log(workSum + " first");

    $("#workList").append("</div><div class=\"list-option-container margined\"></div>");
    $("#workList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Комплектуючі та чистові матеріали</h4><span class=\'notation amount\'> </span><span class=\'notation\'>Кількість</span>`);

    let materialsPriceArray = [parseFloat(parseData(`${letter+72}`, space)), parseFloat(parseData(`${letter+73}`, space)), parseFloat(parseData(`${letter+74}`, space)), parseFloat(parseData(`${letter+75}`, space)), parseFloat(parseData(`${letter+76}`, space)), parseFloat(parseData(`${letter+77}`, space)), parseFloat(parseData(`${letter+79}`, space)), parseFloat(parseData(`${letter+80}`, space)), parseFloat(parseData(`${letter+81}`, space)), parseFloat(parseData(`${letter+82}`, space)), parseFloat(parseData(`${letter+83}`, space)), parseFloat(parseData(`${letter+84}`, space)), parseFloat(parseData(`${letter+85}`, space)), parseFloat(parseData(`${letter+86}`, space)), parseFloat(parseData(`${letter+87}`, space)), parseFloat(parseData(`${letter+88}`, space)), parseFloat(parseData(`${letter+89}`, space))];
    let materialsAmountArray = [(parseFloat(amountOfBathrooms) + parseFloat(amountOfRooms)), parseFloat(amountOfBathrooms) * 35, 0.66 * space, 0.66 * space, 0.59 * space, parseFloat(parseData("H77", space)), 1, 1, 1, 1, bath, shower, shower, bath, amountOfBathrooms, amountOfBathrooms, amountOfBathrooms];
    let materialsAdressesArray = [72, 73, 74, 75, 76, 77, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89];
    let materialsDimArray = [null, null, null, null, null, null, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89];

    for (let i = 0; i < materialsAdressesArray.length; i++) {

        workSum = appendNewPricelistEntry($("#work"), workSum, parseData("F" + materialsAdressesArray[i]), parseData("G" + materialsAdressesArray[i]), parseFloat(materialsAmountArray[i]), materialsPriceArray[i] /*, materialsDimArray[i]*/ );
        textObject = `<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"><span class=\'name\'>${parseData("F" + materialsAdressesArray[i])}</span></div></div>`;
        $("#workList").append(textObject);
    }
    console.log(workSum + " second");

    if (space < 100) {
        appendMaterialsOption(parseData(`F${flooringNum2}`), parseData(letterModel + flooringNum2), (space - parseFloat(amountOfBathrooms) * 7), parseFloat(parseData(`${letter+flooringNum2}`, space)), null);
    } else {
        appendMaterialsOption(parseData(`F${flooringNum2}`), parseData(letterModel + flooringNum2), (space - parseFloat(amountOfBathrooms) * 10), parseFloat(parseData(`${letter+flooringNum2}`, space)), null);
    }
    if (furnitureBool) {
        appendMaterialsOption(parseData("F94"), parseData(letterModel + "94"), 1, space * 100, null);
    }

    workSum = Math.round(workSum * (1 + parseFloat(parseData("S99") / 100)));


    if (furnitureBool) {
        $("#furnitureList").append("</div><div class=\"list-option-container\"></div>");
        $("#furnitureList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Кухня</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`);

        appendFurnitureOption(parseData("F120"), parseData(letterModel + "120"), 1, parseFloat(parseData(`${letter+120}`, space)), parseData("G120"));
        furnitureSum += Math.round(parseFloat(parseData(`${letter+122}`, space) * (1 + (parseData("S157") / 100)))) + Math.round(parseFloat(parseData(`${letter+121}`, space) * (1 + (parseData("S157") / 100))));
        $furniture.append("<div class=\"option-block\"><div class=\"division-block pricelist small-heading\"></div><div class=\"list-option-container\"></div></div>");
        $("#furnitureList .option-block .list-option-container").last().append(`<span class=\'name\'>${parseData("F121")}</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${spacedNum(Math.round(parseFloat(parseData(`${letter+121}`, space) * (1 +( parseData("S157")/100))))) } грн.</span>`);
        $furniture.append("<div class=\"option-block\"><div class=\"division-block pricelist small-heading\"></div><div class=\"list-option-container\"></div></div>");
        $("#furnitureList .option-block .list-option-container").last().append(`<span class=\'name\'>${parseData("F122")}</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${spacedNum(Math.round( parseFloat(parseData(`${letter+122}`, space) * (1 +( parseData("S157")/100))))) } грн.</span>`);

        appendFurnitureOption(parseData("F123"), parseData(letterModel + "123"), 1, parseFloat(parseData(`${letter+123}`, space)), parseData("G123"));
        appendFurnitureOption(parseData("F124"), parseData(letterModel + "124"), 1, parseFloat(parseData(`${letter+124}`, space)), parseData("G124"));
        appendFurnitureOption(parseData("F125"), parseData(letterModel + "125"), 1, parseFloat(parseData(`${letter+125}`, space)), parseData("G125"));
        appendFurnitureOption(parseData("F126"), parseData(letterModel + "126"), 4, parseFloat(parseData(`${letter+126}`, space)), parseData("G126"));
        appendFurnitureOption(parseData("F127"), parseData(letterModel + "127"), 1, parseFloat(parseData(`${letter+127}`, space)), parseData("G127"));

        $("#furnitureList").append("</div><div class=\"list-option-container margined\"></div>");
        $("#furnitureList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Вітальня</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`);
        appendFurnitureOption(parseData("F131"), parseData(letterModel + "131"), 1, parseFloat(parseData(`${letter+131}`, space)), parseData("G131"));
        appendFurnitureOption(parseData("F132"), parseData(letterModel + "132"), 1, parseFloat(parseData(`${letter+132}`, space)), parseData("G132"));
    }


    $("#furnitureList").append("</div><div class=\"list-option-container margined\"></div>");
    $("#furnitureList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Спальня</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`);

    appendFurnitureOption(parseData("F134"), parseData(letterModel + "134"), 1, parseFloat(parseData(`${letter+134}`, space)), parseData("G134"));
    appendFurnitureOption(parseData("F135"), parseData(letterModel + "135"), 1, parseFloat(parseData(`${letter+135}`, space)), parseData("G135"));
    appendFurnitureOption(parseData("F136"), parseData(letterModel + "136"), 2, parseFloat(parseData(`${letter+136}`, space)), parseData("G136"));
    if (furnitureBool) {
        appendFurnitureOption(parseData("F137"), parseData(letterModel + "137"), 1, parseFloat(parseData(`${letter+137}`, space)), parseData("G137"));
        appendFurnitureOption(parseData("F138"), parseData(letterModel + "138"), 1, parseFloat(parseData(`${letter+138}`, space)), parseData("G138"));
        appendFurnitureOption(parseData("F139"), parseData(letterModel + "139"), 1, parseFloat(parseData(`${letter+139}`, space)), parseData("G139"));
    }

    $("#furnitureList").append("</div><div class=\"list-option-container margined\"></div>");
    $("#furnitureList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Світильники</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`);

    if (furnitureBool) {
        appendFurnitureOption(parseData("F141"), parseData(letterModel + "141"), Math.round(space * 0.48), parseFloat(parseData(`${letter+141}`, space)), parseData("G141"));
        appendFurnitureOption(parseData("F142"), parseData(letterModel + "142"), 1, parseFloat(parseData(`${letter+142}`, space)), parseData("G142"));
        appendFurnitureOption(parseData("F144"), parseData(letterModel + "144"), 1, parseFloat(parseData(`${letter+144}`, space)), parseData("G144"));
        appendFurnitureOption(parseData("F146"), parseData(letterModel + "146"), 1, parseFloat(parseData(`${letter+146}`, space)), parseData("G146"));
        appendFurnitureOption(parseData("F147"), parseData(letterModel + "147"), 1, parseFloat(parseData(`${letter+147}`, space)), parseData("G147"));
    }
    appendFurnitureOption(parseData("F143"), parseData(letterModel + "143"), 2, parseFloat(parseData(`${letter+143}`, space)), parseData("G143"));
    appendFurnitureOption(parseData("F145"), parseData(letterModel + "145"), 2, parseFloat(parseData(`${letter+145}`, space)), parseData("G145"));

    $("#furnitureList").append("</div><div class=\"list-option-container margined\"></div>");
    $("#furnitureList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Декор</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`);



    appendFurnitureOption(parseData("F149"), parseData(letterModel + "149"), amountOfRooms, parseFloat(parseData(`${letter+149}`, space)), parseData("G149"));
    appendFurnitureOption(parseData("F150"), parseData(letterModel + "150"), amountOfRooms, parseFloat(parseData(`${letter+150}`, space)), parseData("G150"));
    appendFurnitureOption(parseData("F151"), parseData(letterModel + "151"), amountOfRooms, parseFloat(parseData(`${letter+151}`, space)), parseData("G151"));
    if (furnitureBool) {
        appendFurnitureOption(parseData("F152"), parseData(letterModel + "152"), 1, parseFloat(parseData(`${letter+152}`, space)), parseData("G152"));
    }
    appendFurnitureOption(parseData("F153"), parseData(letterModel + "153"), amountOfRooms - 1, parseFloat(parseData(`${letter+153}`, space)), parseData("G153"));


    $("#furnitureList").append("<div class=\"division-block pricelist\"></div><div class=\"list-option-container summary\"></div>");
    $("#furnitureList .list-option-container").last().append(`<span class=\'name summary\'>Всього по меблях:</span><span class=\'list-text summary work\'>${spacedNum(furnitureSum)} грн.</span>`);
    furnitureSum = furnitureSum + (furnitureSum * 0.03 * (1 + (parseData("S157") / 100)));

    function appendWorkOption(name, manufacturer, amount, price) {
        if ((amount == 0) || (amount == undefined) || (price == 0) || !(price)) {
            return;
        }
        let $work = $("#workList");
        workSum += price * amount;
        $work.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"></div></div>");
        $("#workList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}</span>`);
    }

    function appendMaterialsOption(name, manufacturer, amount, price, dim) {
        let $materials = $("#workList");
        if (dim == null) {
            workSum += price * amount;
            $materials.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container materials\"></div></div>");
            $("#workList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}</span>`);
            return;
        }
        if ((amount == 0) || (!amount) || !(price)) {
            return;
        }

        workSum += price * amount;
        $materials.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container materials\"></div></div>");
        if (!manufacturer) {
            $("#workList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}</span><span class=\'list-text\'>${amount} ${dim} </span>`);
            return;
        }
        console.log(price * amount + " " + name + " " + workSum);
        $("#workList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}, ${manufacturer}</span><span class=\'list-text\'>${amount} ${dim} </span>`);
    }
    if (!!parseInt(hygienicShower) || !!parseInt(secondGypsumLayer) || !!parseInt(floorScreed) || !!parseInt(heatedFlooring) || !!parseInt(denoising) || !!parseInt(entranceDoors) || !!parseInt(conditioning)) {
        $("#workList").append("</div><div class=\"list-option-container margined\"></div>");
        $("#workList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\"> Опції</h4><span class=\'notation amount\'> </span><span class=\'notation\'>Кількість</span>`);
    }
    appendOptionsOption(parseData("F102"), parseData(letterModel + "102"), +floorScreed, space * parseFloat(parseData(`${letter+102}`, space)));
    appendOptionsOption(parseData("F103"), parseData(letterModel + "103"), +hygienicShower * parseFloat(amountOfBathrooms), +hygienicShower * parseFloat(parseData(`${letter+103}`, space)));
    appendOptionsOption(parseData("F104"), parseData(letterModel + "104"), +heatedFlooring, +heatedFlooring * parseFloat(parseData(`${letter+104}`, space)));
    appendOptionsOption(parseData("F105"), parseData(letterModel + "105"), +secondGypsumLayer, space * parseFloat(parseData(`${letter+105}`, space)));
    appendOptionsOption(parseData("F106"), parseData(letterModel + "106"), +denoising + mouldings, (+denoising + mouldings) * space * parseFloat(parseData(`${letter+106}`, space)));
    if ((+denoising + +gapless + stretch) > 2) {
        appendOptionsOption(parseData("F107"), parseData(letterModel + "107"), +floorScreed, +floorScreed * parseFloat(parseData(`${letter+107}`, space)));
    }

    appendOptionsOption(parseData("F108"), parseData(letterModel + "108"), +floorScreed, +floorScreed * parseFloat(parseData(`${letter+108}`, space)));
    appendOptionsOption(parseData("F113"), parseData(letterModel + "113"), +conditioning, +conditioning * parseFloat(parseData(`${letter+113}`, space)) * (1 + parseFloat(parseData("S113") / 100)));

    $("#workList").append("<div class=\"division-block pricelist\"></div><div class=\"list-option-container summary\"></div>");
    $("#workList .list-option-container").last().append(`<span class=\'name summary\'>Всього по будівельній частині:</span><span class=\'list-text summary work\'>${spacedNum(Math.round(workSum))} грн.</span>`);

    function appendOptionsOption(name, manufacturer, amount, price) {
        if ((amount == 0) || (!amount) || !(price)) {
            return;
        }
        let $workList = $("#workList");
        workSum += price * amount;
        $workList.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container margined\"></div></div>");
        if (!manufacturer) {
            $("#workList .option-block .list-option-container margined").last().append(`<span class=\'name\'>${name}</span><span class=\'list-text\'>${amount}</span>`);
            return;
        }
        $("#workList .option-block .list-option-container margined").last().append(`<span class=\'name\'>${name}, ${manufacturer}</span><span class=\'list-text\'>${amount} шт.</span>`);
    }

    function appendFurnitureOption(name, manufacturer, amount, price, dim) {

        if ((amount == 0) || (!amount) || !(price)) {
            return;
        }
        furnitureSum += price * (1 + parseFloat(parseData("S157") / 100)) * amount;
        $furniture.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"></div></div>");
        if (!manufacturer) {
            $("#materialsList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}</span><span class=\'list-text\'>${amount} ${dim} </span>`);
            return;
        }
        $("#furnitureList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}, ${manufacturer}</span><span class=\'list-text amount\'>${amount} ${dim}</span><span class=\'list-text\'>${spacedNum(Math.round(price * amount * (1 + parseFloat(parseData("S157")/100))))} грн.</span>`);
    }

    function appendOptionsOption(name, manufacturer, amount, price, dim) {
        if ((amount == 0) || (!amount) || !(price)) {
            return;
        }
        let $materials = $("#workList");
        workSum += price * amount;
        $materials.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container materials\"></div></div>");
        if (!manufacturer) {
            $("#workList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}</span><span class=\'list-text\'>${amount}</span>`);
            return;
        }
        $("#workList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}, ${manufacturer}</span><span class=\'list-text\'>${amount}</span>`);
    }

    function appendNewPricelistEntry(object, sumVar, name, manufacturer, amount, price) {
        if ((amount == 0) || (amount == undefined) || !(price)) {
            return sumVar;
        }
        return (sumVar + parseFloat(price) * parseFloat(amount));
    }


    $("#materialsList").append("<div class=\"division-block pricelist\"></div><div class=\"list-option-container summary\"></div>");
    $("#materialsList .list-option-container").last().append(`<span class=\'name summary\'>Всього по будівельній частині:</span><span class=\'list-text summary work\'>${Math.round(workSum)} грн.</span>`);
    let sum = 0;

    let $appliances = $("#appliancesList");
    let $appliancesList = $("#appliancesListTotal");
    let array;
    console.log(appliances);
    if (appliances === "gorenje") {
        array = gorenje;
    } else if (appliances === "bosch") {
        array = bosch;
    } else if (appliances === "miele") {
        array = miele;
    }
    for (let i = 0; i < array[1]; i++) {
        $appliances.append("<div class=\"option-block\"><div class=\"division-block white\"></div><div class=\"list-option-container appliances\"></div></div>");
        $("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class=\'name white\'>${parseData("F" + (array[0] + i))} ${parseData("E" + (array[0] + i))}</span><span class=\'list-text white\'>${spacedNum(parseData("D"+ (array[0]+i)))} грн.</span>`);
        if (!!appliancesBoolTotal) {
            $appliancesList.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"></div></div>");
            $("#appliancesListTotal .option-block .list-option-container").last().append(`<span class=\'name\'>${parseData("F" + (array[0] + i))} ${parseData("E" + (array[0] + i))}</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${spacedNum(parseData("D"+ (array[0]+i)))} грн.</span>`);
        }
        sum += parseFloat(parseData("D" + (array[0] + i)));
        sum += parseFloat(parseData("G36"));
    }
    sum += parseFloat(parseData("G36"));
    if (!!appliancesBoolTotal) {
        $appliancesList.append("<div class=\"division-block pricelist\"></div><div class=\"list-option-container summary\"></div>");
        $("#appliancesTotal").html(spacedNum(sum));
        $("#appliancesTotalDiscount").html(parseFloat(spacedNum(sum * 0.9)));
        $("#appliancesListTotal .list-option-container").last().append(`<span class=\'name summary\'>Всього по техніці:</span><span class=\'list-text summary work\'>${spacedNum(sum)} грн.</span>`);
        $("#appliancesListTotal .list-option-container").last().append(`<span class=\'name summary\'><b>Всього по техніці, зі знижкою</b>:</span><span class=\'list-text summary work\'>${spacedNum(Math.round(sum * 0.9))} грн.</span>`)
    };

    let styleLetter = "J";
    if (style == "cozy") {
        styleLetter = "J";
    } else if (style == "japandi") {
        styleLetter = "L";
    } else if (style == "fusion") {
        styleLetter = "N";
    } else if (style == "modern") {
        styleLetter = "P";
    } else if (style == "neoclassic") {
        styleLetter = "R";
    }

    function spacedNum(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    let kitchenMontage = parseData(`${styleLetter + 121}`);
    let kitchenDelivery = parseData(`${styleLetter + 122}`);
    let kitchenPrice = parseData(`${styleLetter + 120}`);
    let kitchenTotal = kitchenMontage + kitchenPrice + kitchenDelivery;
    $("#kitchenPrice").html(spacedNum(kitchenPrice) + " грн.");
    $("#kitchenMontage").html(spacedNum(kitchenMontage) + " грн.");
    $("#kitchenDelivery").html(spacedNum(kitchenDelivery) + " грн.");
    $("#kitchenTotal").html(spacedNum(kitchenTotal) + " грн");
    $("#kitchenTotalPrice").html(spacedNum(sum) + " грн");
    $("#kitchenTotalPriceDiscount").html(spacedNum(Math.round(sum * 0.9)));
    $("#discountTotal").html(`<span class='bold-text-7'>${spacedNum(Math.round(sum - sum * 0.9))} грн.</span>`);
    $("#totalPriceTotal").html(spacedNum(Math.round(furnitureSum + workSum + parseInt(appliancesBoolTotal) * sum * 0.9)) + " грн. *");
    console.log("test"+ furnitureSum + " " + workSum + " " + furnitureSum+ " " +Math.round(sum * 0.9));
};
