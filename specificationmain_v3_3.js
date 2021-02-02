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
        let gorenje = [168, 9],
        bosch = [182, 10],
        miele = [197, 9];
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
        let furnitureRate = 1 + parseFloat((parseData("S164") / 100)),
        workRate = parseData("S42"),
        materialsRate = parseData("S72"),
        months = ((style == "modern") || (style == "neoclassic")) ? parseData("G8", space) + 1 : parseData("G8", space);

        $("#months").html(months);

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

        let workPriceArray = [water, canalisation, vents, electricity, parseFloat(parseData(`${letter + 46}`, space)), parseFloat(parseData(`${letter + 47}`, space)), parseFloat(parseData(`${letter + 48}`, space)) * space, parseFloat(parseData(`${letter + 49}`, space)) * space, parseFloat(parseData(`${letter + 50}`)), parseFloat(parseData(`${letter + 52}`, space)) * space, parseFloat(parseData(`${letter + 54}`)), parseFloat(parseData(`${letter + 53}`, space)) * 140, parseFloat(parseData(letter + ceilingNum, space)) * space, parseFloat(parseData(letter + flooringNum, space)) * space, parseFloat(parseData(`${letter + 64}`, space)) * space, parseFloat(parseData(`${letter + 65}`, space)) * space, ((months * 2 * 1200) + 3000 + (space * 100))];
        let workAmountArray = [1, 1, 1, parseFloat(amountOfBathrooms), parseInt(shower), parseInt(bath), 1, amountOfBathrooms, (parseFloat(amountOfRooms) + parseFloat(amountOfBathrooms)), 1, 1, mouldings, 1, 1, 1, 1, 1];
        let workAdressesArray = [42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 54, 53, ceilingNum, flooringNum, 64, 65, 67];

        for (let i = 0; i < workAdressesArray.length; i++) {
        let price = workPriceArray[i] * workAmountArray[i] * parseData("S42");

        if ((price === 0) || (price == NaN)) {
            continue;   
        }
        console.log(parseData("F" + workAdressesArray[i]) + " " + price);
        workSum+= price;
        textObject = `<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"><span class=\'name\'>${parseData("F" + workAdressesArray[i])}</span><span class=\'list-text amount\'> </span><span class=\'list-text\'>${Math.round(price)} грн.</span></div></div>`;
        $("#workList").append(textObject);
        }
        textObject = `<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"><span class=\'name\'>${parseData("F" + 66)}</span><span class=\'list-text amount\'> </span><span class=\'list-text\'>${Math.round((workSum - (vents + canalisation + electricity + water)* parseData("S42")) * 0.022 * parseData("S42"))} грн.</span></div></div>`;
        $("#workList").append(textObject);
        workSum += (workSum - (vents + canalisation + electricity + water) * parseData("S42")) * 0.022 * parseData("S42");

        $("#workList").append("</div><div class=\"list-option-container margined\"></div>");
        $("#workList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Комплектуючі та чистові матеріали</h4><span class=\'notation amount\'> </span><span class=\'notation\'>Ціна</span>`);

        let materialsPriceArray = [parseFloat(parseData(`${letter+72}`, space)), parseFloat(parseData(`${letter+73}`, space)), parseFloat(parseData(`${letter+74}`, space)), parseFloat(parseData(`${letter+75}`, space)), parseFloat(parseData(`${letter+76}`, space)), parseFloat(parseData(`${letter+77}`, space)), parseFloat(parseData(`${letter+79}`, space)), parseFloat(parseData(`${letter+80}`, space)), parseFloat(parseData(`${letter+81}`, space)), parseFloat(parseData(`${letter+82}`, space)), parseFloat(parseData(`${letter+83}`, space)), parseFloat(parseData(`${letter+84}`, space)), parseFloat(parseData(`${letter+85}`, space)), parseFloat(parseData(`${letter+86}`, space)), parseFloat(parseData(`${letter+87}`, space)), parseFloat(parseData(`${letter+88}`, space)), parseFloat(parseData(`${letter+89}`, space)), parseFloat(parseData(`${letter+flooringNum2}`, space)), space*100];
        let materialsAmountArray = [(parseFloat(amountOfBathrooms) + parseFloat(amountOfRooms)), parseFloat(amountOfBathrooms) * 35, 0.66 * space, 0.66 * space, 0.59 * space, parseFloat(parseData("H77", space)), 1, 1, 1, 1, bath, shower, shower, bath, amountOfBathrooms, amountOfBathrooms, amountOfBathrooms, space < 100 ? (space - parseFloat(amountOfBathrooms) * 7) : (space - parseFloat(amountOfBathrooms) * 10), 1];
        let materialsAdressesArray = [72, 73, 74, 75, 76, 77, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, flooringNum2, 94];
        let materialsDimArray = [null, null, null, null, null, null, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, flooringNum2, 94];

        for (let i = 0; i < materialsAdressesArray.length; i++) {

        let price = materialsPriceArray[i] * materialsAmountArray[i] * parseData("S72");
        if ((price === 0) || (price == NaN)) {
            continue;   
        }
        console.log(parseData("F" + materialsAdressesArray[i]) + " " + price);
        workSum += price;
        textObject = `<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"><span class=\'name\'>${parseData("F" + materialsAdressesArray[i])}, ${parseData(letterModel + materialsAdressesArray[i])}</span><span class=\'list-text amount\'> </span><span class=\'list-text\'>${Math.round(price)} грн.</span></div></div>`;
        $("#workList").append(textObject);
        }

        /////
        $("#workList").append("</div><div class=\"list-option-container margined\"></div>");
        $("#workList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Витрати компанії</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`);
        textObject = `<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"><span class=\'name\'>${parseData("F100")}</span><span class=\'list-text amount\'>${months} міс.</span><span class=\'list-text\'> </span></div></div>`;
        $("#workList").append(textObject);

        let casualtiesPriceArray = [parseData(`${letter+101}`), parseData(`${letter+102}`)];
        let casualtiesAmountArray = [months, months];
        let casualtiesAdressesArray = [101, 102];

        for (let i = 0; i < casualtiesAdressesArray.length; i++) {
        let price = casualtiesPriceArray[i] * casualtiesAmountArray[i];
        workSum += price;
        textObject = `<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"><span class=\'name\'>${parseData("F" + casualtiesAdressesArray[i])}</span><span class=\'list-text amount\'>${Math.round(price/months)} грн./місяць</span><span class=\'list-text\'>${Math.round(price)} грн.</span></div></div>`;
        $("#workList").append(textObject);
        }

        if (furnitureBool) {
        $("#furnitureList").append("</div><div class=\"list-option-container\"></div>");
        $("#furnitureList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Кухня</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`);

        appendFurnitureOption(parseData("F127"), parseData(letterModel + "127"), 1, parseFloat(parseData(`${letter+127}`, space)), parseData("G120"));
        furnitureSum += Math.round(parseFloat(parseData(`${letter+129}`, space) * furnitureRate)) + Math.round(parseFloat(parseData(`${letter+128}`, space) * furnitureRate));
        $furniture.append("<div class=\"option-block\"><div class=\"division-block pricelist small-heading\"></div><div class=\"list-option-container\"></div></div>");
        $("#furnitureList .option-block .list-option-container").last().append(`<span class=\'name\'>${parseData("F128")}</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${spacedNum(Math.round(parseFloat(parseData(`${letter+128}`, space) * furnitureRate))) } грн.</span>`);
        $furniture.append("<div class=\"option-block\"><div class=\"division-block pricelist small-heading\"></div><div class=\"list-option-container\"></div></div>");
        $("#furnitureList .option-block .list-option-container").last().append(`<span class=\'name\'>${parseData("F129")}</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${spacedNum(Math.round( parseFloat(parseData(`${letter+129}`, space) * furnitureRate))) } грн.</span>`);

        appendFurnitureOption(parseData("F130"), parseData(letterModel + "130"), 1, parseFloat(parseData(`${letter+130}`, space)), parseData("G130"));
        appendFurnitureOption(parseData("F131"), parseData(letterModel + "131"), 1, parseFloat(parseData(`${letter+131}`, space)), parseData("G131"));
        appendFurnitureOption(parseData("F132"), parseData(letterModel + "132"), 1, parseFloat(parseData(`${letter+132}`, space)), parseData("G132"));
        appendFurnitureOption(parseData("F133"), parseData(letterModel + "133"), 4, parseFloat(parseData(`${letter+133}`, space)), parseData("G133"));
        appendFurnitureOption(parseData("F134"), parseData(letterModel + "134"), 1, parseFloat(parseData(`${letter+134}`, space)), parseData("G134"));

        $("#furnitureList").append("</div><div class=\"list-option-container margined\"></div>");
        $("#furnitureList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Вітальня</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`);
        appendFurnitureOption(parseData("F138"), parseData(letterModel + "138"), 1, parseFloat(parseData(`${letter+138}`, space)), parseData("G138"));
        appendFurnitureOption(parseData("F139"), parseData(letterModel + "139"), 1, parseFloat(parseData(`${letter+139}`, space)), parseData("G139"));
        }

        $("#furnitureList").append("</div><div class=\"list-option-container margined\"></div>");
        $("#furnitureList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Спальня</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`);

        appendFurnitureOption(parseData("F141"), parseData(letterModel + "141"), 1, parseFloat(parseData(`${letter+141}`, space)), parseData("G141"));
        appendFurnitureOption(parseData("F142"), parseData(letterModel + "142"), 1, parseFloat(parseData(`${letter+142}`, space)), parseData("G142"));
        appendFurnitureOption(parseData("F143"), parseData(letterModel + "143"), 2, parseFloat(parseData(`${letter+143}`, space)), parseData("G143"));
        if (furnitureBool) {
        appendFurnitureOption(parseData("F144"), parseData(letterModel + "144"), 1, parseFloat(parseData(`${letter+144}`, space)), parseData("G144"));
        appendFurnitureOption(parseData("F145"), parseData(letterModel + "145"), 1, parseFloat(parseData(`${letter+145}`, space)), parseData("G145"));
        appendFurnitureOption(parseData("F146"), parseData(letterModel + "146"), 1, parseFloat(parseData(`${letter+146}`, space)), parseData("G146"));
        }

        $("#furnitureList").append("</div><div class=\"list-option-container margined\"></div>");
        $("#furnitureList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Світильники</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`);

        if (furnitureBool) {
        appendFurnitureOption(parseData("F148"), parseData(letterModel + "148"), Math.round(space * 0.48), parseFloat(parseData(`${letter+148}`, space)), parseData("G148"));
        appendFurnitureOption(parseData("F149"), parseData(letterModel + "149"), 1, parseFloat(parseData(`${letter+149}`, space)), parseData("G149"));
        appendFurnitureOption(parseData("F151"), parseData(letterModel + "151"), 1, parseFloat(parseData(`${letter+151}`, space)), parseData("G151"));
        appendFurnitureOption(parseData("F153"), parseData(letterModel + "153"), 1, parseFloat(parseData(`${letter+153}`, space)), parseData("G153"));
        appendFurnitureOption(parseData("F154"), parseData(letterModel + "154"), 1, parseFloat(parseData(`${letter+154}`, space)), parseData("G154"));
        }
        appendFurnitureOption(parseData("F150"), parseData(letterModel + "150"), 2, parseFloat(parseData(`${letter+150}`, space)), parseData("G150"));
        appendFurnitureOption(parseData("F152"), parseData(letterModel + "152"), 2, parseFloat(parseData(`${letter+152}`, space)), parseData("G152"));

        $("#furnitureList").append("</div><div class=\"list-option-container margined\"></div>");
        $("#furnitureList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Декор</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`);

        appendFurnitureOption(parseData("F156"), parseData(letterModel + "156"), amountOfRooms, parseFloat(parseData(`${letter+156}`, space)), parseData("G156"));
        appendFurnitureOption(parseData("F157"), parseData(letterModel + "157"), amountOfRooms, parseFloat(parseData(`${letter+157}`, space)), parseData("G157"));
        appendFurnitureOption(parseData("F158"), parseData(letterModel + "158"), amountOfRooms, parseFloat(parseData(`${letter+158}`, space)), parseData("G158"));
        if (furnitureBool) {
        appendFurnitureOption(parseData("F159"), parseData(letterModel + "159"), 1, parseFloat(parseData(`${letter+159}`, space)), parseData("G159"));
        }
        appendFurnitureOption(parseData("F160"), parseData(letterModel + "160"), amountOfRooms - 1, parseFloat(parseData(`${letter+160}`, space)), parseData("G160"));


        $("#furnitureList").append("<div class=\"division-block pricelist\"></div><div class=\"list-option-container summary\"></div>");
        $("#furnitureList .list-option-container").last().append(`<span class=\'name summary\'>Всього по меблях:</span><span class=\'list-text summary work\'>${spacedNum(furnitureSum)} грн.</span>`);
        furnitureSum = furnitureSum + (furnitureSum * 0.03 * furnitureRate);

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
        $("#workList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}, ${manufacturer}</span><span class=\'list-text\'>${amount} ${dim} </span>`);
        }
        if (!!parseInt(hygienicShower) || !!parseInt(secondGypsumLayer) || !!parseInt(floorScreed) || !!parseInt(heatedFlooring) || !!parseInt(denoising) || !!parseInt(entranceDoors) || !!parseInt(conditioning)) {
        $("#workList").append("</div><div class=\"list-option-container margined\"></div>");
        $("#workList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\"> Опції</h4><span class=\'notation amount\'> </span><span class=\'notation\'>Ціна</span>`);
        }

                
        let optionsPriceArray = [space * parseFloat(parseData(`${letter+109}`, space)), +hygienicShower * parseFloat(parseData(`${letter+110}`, space)), +heatedFlooring * parseFloat(parseData(`${letter+111}`, space)), space * parseFloat(parseData(`${letter+112}`, space)), (+denoising + mouldings) * space * parseFloat(parseData(`${letter+113}`, space)), +floorScreed * parseFloat(parseData(`${letter+114}`, space)), +denoising * parseFloat(parseData(`${letter+115}`, space)), +conditioning * parseFloat(parseData(`${letter+120}`, space)) * furnitureRate];
        let optionsAmountArray = [+floorScreed, +hygienicShower, +heatedFlooring, +secondGypsumLayer, +denoising + mouldings, +floorScreed, +denoising, +conditioning];
        let optionsAdressesArray = [109, 110, 111, 112, 113, ((+denoising + +gapless + stretch) > 2) ? 114 : null, 120];

        for (let i = 0; i < optionsAdressesArray.length; i++) {

        let price = optionsPriceArray[i] * optionsAmountArray[i];
        if ((price === 0) || (price == NaN) || (optionsAdressesArray[i] == null)) {
            continue;   
        }
        console.log(parseData("F" + optionsAdressesArray[i]) + " " + price);
        workSum += price;
        textObject = `<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"><span class=\'name\'>${parseData("F" + optionsAdressesArray[i])}, ${parseData(letterModel + optionsAdressesArray[i])}</span><span class=\'list-text amount\'> </span><span class=\'list-text\'>${Math.round(price)} грн.</span></div></div>`;
        $("#workList").append(textObject);
        }

        if (!appliancesBoolTotal) {
        $(".comfy-section").toggle(false);
        }
        if (!furnitureBool) {
        $("#furnitureList").toggle(false);
        }

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
        furnitureSum += price * furnitureRate * amount;
        console.log(price * furnitureRate * amount + " " + amount + " " + name);
        $furniture.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"></div></div>");
        if (!manufacturer) {
            $("#materialsList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}</span><span class=\'list-text\'>${amount} ${dim} </span>`);
            return;
        }
        $("#furnitureList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}, ${manufacturer}</span><span class=\'list-text amount\'>${amount} ${dim}</span><span class=\'list-text\'>${spacedNum(Math.round(price * amount * (1 + parseFloat(parseData("S164")/100))))} грн.</span>`);
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


        $("#materialsList").append("<div class=\"division-block pricelist\"></div><div class=\"list-option-container summary\"></div>");
        $("#materialsList .list-option-container").last().append(`<span class=\'name summary\'>Всього по будівельній частині:</span><span class=\'list-text summary work\'>${Math.round(workSum)} грн.</span>`);
        let sum = 0;



        let $appliances = $("#appliancesList");
        let $appliancesList = $("#appliancesListTotal");
        let array;

        if (appliances === "gorenje") {
            array = gorenje;
        } else if (appliances === "bosch") {
            array = bosch;
        } else if (appliances === "miele") {
            array = miele;
        }
        let quantity = 0;
        if (appliances !== "undefined") {
            quantity = 1;
            for (let i = 0; i < array[1]; i++) {
                $appliances.append("<div class=\"option-block\"><div class=\"division-block white\"></div><div class=\"list-option-container appliances\"></div></div>");
                $("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class=\'name white\'>${parseData("F" + (array[0] + i))} ${parseData("E" + (array[0] + i))}</span><span class=\'list-text white\'>${spacedNum(parseData("D"+ (array[0]+i)))} грн.</span>`);
                if (!!appliancesBoolTotal) {
                    $appliancesList.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"></div></div>");
                    $("#appliancesListTotal .option-block .list-option-container").last().append(`<span class=\'name\'>${parseData("F" + (array[0] + i))} ${parseData("E" + (array[0] + i))}</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${spacedNum(parseData("D"+ (array[0]+i)))} грн.</span>`);
                }
                sum += parseFloat(parseData("D" + (array[0] + i)));
                sum += parseFloat(parseData("G36"));
                quantity++;
            }


        if (!!parseInt(appliancesBoolTotal)) {
            sum += parseFloat(parseData("G36"));
            $appliancesList.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"></div></div>");
            $("#appliancesListTotal .option-block .list-option-container").last().append(`<span class=\'name\'>Доставка техніки</span><span class=\'list-text amount\'></span><span class=\'list-text\'>${parseFloat(quantity) * parseFloat(parseData("G36"))} грн.</span>`);
            $appliances.append("<div class=\"option-block\"><div class=\"division-block white\"></div><div class=\"list-option-container appliances\"></div></div>");
            $("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class=\'name white\'>Доставка техніки</span><span class=\'list-text white\'>${parseFloat(quantity) * parseFloat(parseData("G36"))} грн.</span>`);
            $appliancesList.append("<div class=\"division-block pricelist\"></div><div class=\"list-option-container summary\"></div>");
            $("#appliancesTotal").html(spacedNum(sum));
            $("#appliancesTotalDiscount").html(parseFloat(spacedNum(sum * 0.9)));

            $("#appliancesListTotal .list-option-container").last().append(`<span class=\'name summary\'>Всього по техніці:</span><span class=\'list-text summary work\'>${spacedNum(sum)} грн.</span>`);
            $("#appliancesListTotal .list-option-container").last().append(`<span class=\'name summary\'><b>Всього по техніці, зі знижкою</b>:</span><span class=\'list-text summary work\'>${spacedNum(Math.round(sum * 0.9))} грн.</span>`);

        } else {
            $("#appliancesListTotal").toggle(false);
        }
        }


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

        let kitchenMontage = parseData(`${styleLetter + 127}`);
        let kitchenDelivery = parseData(`${styleLetter + 128}`);
        let kitchenPrice = parseData(`${styleLetter + 129}`);
        let kitchenTotal = kitchenMontage + kitchenPrice + kitchenDelivery;
        $("#kitchenPrice").html(spacedNum(kitchenPrice) + " грн.");
        $("#kitchenMontage").html(spacedNum(kitchenMontage) + " грн.");
        $("#kitchenDelivery").html(spacedNum(kitchenDelivery) + " грн.");
        $("#kitchenTotal").html(spacedNum(kitchenTotal) + " грн");
        $("#kitchenTotalPrice").html(spacedNum(sum) + " грн");
        $("#kitchenTotalPriceDiscount").html(spacedNum(Math.round(sum * 0.9)));
        $("#discountTotal").html(`<span class='bold-text-7'>${spacedNum(Math.round(sum - sum * 0.9))} грн.</span>`);
        $("#totalPriceTotal").html(spacedNum(Math.round(furnitureSum + workSum + parseInt(appliancesBoolTotal) * sum * 0.9)) + " грн. *");
        };
