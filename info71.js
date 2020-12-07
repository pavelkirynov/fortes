let appliancesBool = {
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
        if (data.feed.entry.find((entry) => entry.title.$t == range) == undefined) {
                return "";       
        }
            
        let rawData = data.feed.entry.find((entry) => entry.title.$t == range).gs$cell.inputValue;
        if (rawData.includes("=IF")) {
            while (rawData[rawData.length - 1] == ")") {
                rawData = rawData.substring(0, rawData.length - 1);
                //console.log("e");
            }
            let formulaData = rawData.split("IF");
            //console.log(Fdata);
            formulaData = formulaData.map(item => item.split(";"));
            //console.log(formulaData[1][1]);
            for (let i = 1; i < formulaData.length; i++) {
                //console.log(formulaData.length);
                //console.log(i);
                value = parseFloat(formulaData[i][1]);
                //console.log(value);

                let item = formulaData[i][0].slice(1, formulaData[i][0].length).split("=");
                threshold = formulaData[i][0].slice(1, formulaData[i][0].length).split("=")[1];
                //console.log(threshold);
                if (item[0].indexOf(">") > -1) {
                    sign = morethan;
                } else if (item[0].indexOf("<") > -1) {
                    sign = lessthan;
                } else {
                    sign = equals;
                }
                //console.log(sign);
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
                //formulaRaw.splice(0, formulaRaw.length);
                //return price;
            }
            //console.log(price);
            return parseFloat(price);
        }
        return data.feed.entry.find((entry) => entry.title.$t == range).content.$t;
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
    let cookies = document.cookie.split(";").map((cookie) => cookie.split("=")).reduce((accumulator, [key, value]) => ({...accumulator,[key.trim()]: decodeURIComponent(value),}),{});
    let appliancesCookie = cookies._appliances;
    if (!appliancesCookie) {
            appliancesCookie = "gorenje";
    }
    let appliancesBoolTotal = +cookies._appliancesBoolTotal,
        furnitureBool = +cookies._furnitureBool,
        style = +cookies._style,
        space = +cookies._space,
        bath = +cookies._bath,
        shower = +cookies._shower,
        amountOfRooms = +cookies._amountOfRooms,
        amountOfBathrooms = +cookies._amountOfBathrooms,
        letter,
        ceiling = cookies._ceiling,
        flooring = cookies._flooring;
        
        if (style == "cozy") {
            letter = "I";
        } else if (style == "japandi") {
            letter = "K";  
        } else if (style == "fusion") {
            letter = "M";       
        } else if (style == "modern") {
            letter = "O";      
        } else if (style == "neoclassic") {
            letter = "Q";       
        }
        appendWorkOption(parseData("F42"), parseData("G42"), 1, parseData(letter+42, space) * space);
        appendWorkOption(parseData("F43"), parseData("G43"), 1, parseData(letter+43, space) * space);
        appendWorkOption(parseData("F44"), parseData("G44"), amountOfBathrooms, parseData(letter+44, space) * space * amountOfBathrooms);
        appendWorkOption(parseData("F45"), parseData("G45"), 1, parseFloat(parseData(letter+45, space)) * space);
        appendWorkOption(parseData("F46"), parseData("G46"), bath, parseData(letter+46, space));
        appendWorkOption(parseData("F47"), parseData("G47"), shower, parseData(letter+47, space));
        appendWorkOption(parseData("F48"), parseData("G48"), 1, parseData(letter+48, space) * space);
        appendWorkOption(parseData("F49"), parseData("G49"), amountOfBathrooms, parseData(letter+49) * space);
        appendWorkOption(parseData("F50"), parseData("G50"), parseFloat(amountOfBathrooms)+parseFloat(amountOfRooms), parseData(letter+50) * (amountOfRooms + amountOfBathrooms));
        
        
        
    function appendWorkOption(name, manufacturer, amount, price) {
            if ((amount == 0) || (amount == undefined)) {
                return;       
            }
            let $work = $("#workList");
            $work.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"></div></div>");
            if (!manufacturer) {
               $("#workList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}</span><span class=\'list-text amount\'>${amount}</span><span class=\'list-text work\'>${price} грн.</span>`);
                    return;
            }
            $("#workList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}, ${manufacturer}</span><span class=\'list-text amount\'>${amount}</span><span class=\'list-text work\'>${price} грн.</span>`);
    }
    
    if (!appliancesBoolTotal) {
        $(".comfy-section").css("display", "none");
        $("#appliancesListTotal").css("display", "none");
    }
    if (!!appliancesBoolTotal) {
        let $appliances = $("#appliancesList");
        let $appliancesList = $("#appliancesListTotal");
        let sum = 0;
        if (appliancesCookie == "gorenje") {
            let element = appliances.gorenje;
            let i = 0;

            for (let key in element) {
                $appliances.append("<div class=\"option-block\"><div class=\"division-block white\"></div><div class=\"list-option-container appliances\"></div></div>");
                $("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class=\'name white\'>${parseData("F" + (161 + i))} ${parseData("E" + (161 + i))}</span><span class=\'list-text white\'>${parseFloat(parseData("D"+ (161+i)))} грн.</span>`);
                $appliancesList.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"></div></div>");
                $("#appliancesListTotal .option-block .list-option-container").last().append(`<span class=\'name\'>${parseData("F" + (161 + i))} ${parseData("E" + (161 + i))}</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${parseFloat(parseData("D"+ (161+i)))} грн.</span>`);
                sum += parseFloat(parseData("D"+ (161+i)));
                i++;
            }
            
        } else if (appliancesCookie == "bosch") {
            let element = appliances.bosch;
            let i = 0;
            for (let key in element) {
                $appliances.append("<div class=\"option-block\"><div class=\"division-block white\"></div><div class=\"list-option-container appliances\"></div></div>");
                $("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class=\'name white\'>${parseData("F" + (175 + i))} ${parseData("E" + (175 + i))}</span><span class=\'list-text white\'>${parseFloat(parseData("D"+ (175+i)))} грн.</span>`);
                $appliancesList.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"></div></div>");
                $("#appliancesListTotal .option-block .list-option-container").last().append(`<span class=\'name\'>${parseData("F" + (175 + i))} ${parseData("E" + (175 + i))}</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${parseFloat(parseData("D"+ (175+i)))} грн.</span>`);
                sum += parseFloat(parseData("D"+ (175+i)));
                i++;
            }
        } else if (appliancesCookie == "miele") {
            let element = appliances.miele;
            let i = 0;
            for (let key in element) {
                $appliances.append("<div class=\"option-block\"><div class=\"division-block white\"></div><div class=\"list-option-container appliances\"></div></div>");
                $("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class=\'name white\'>${parseData("F" + (190 + i))} ${parseData("E" + (190 + i))}</span><span class=\'list-text white\'>${parseFloat(parseData("D"+ (190+i)))} грн.</span>`);
                $appliancesList.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"></div></div>");
                $("#appliancesListTotal .option-block .list-option-container").last().append(`<span class=\'name\'>${parseData("F" + (190 + i))} ${parseData("E" + (190 + i))}</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${parseFloat(parseData("D"+ (190+i)))} грн.</span>`);
                sum += parseFloat(parseData("D"+ (190+i)));
                i++;
            }
        }
        $appliancesList.append("<div class=\"division-block pricelist\"></div><div class=\"list-option-container summary\"></div>");
        $("#appliancesListTotal .list-option-container").last().append(`<span class=\'name summary\'>Всього по техніці:</span><span class=\'list-text summary work\'>${sum} грн.</span>`);
        i = 0;
    }
    if (!furnitureBool) {
        $("#kitchenSection").css("display", "none");   
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
    let kitchenMontage = parseFloat(parseData(`${styleLetter + 121}`));
    let kitchenDelivery = parseFloat(parseData(`${styleLetter + 122}`));
    let kitchenPrice = parseFloat(parseData(`${styleLetter + 120}`));
    let kitchenTotal = kitchenMontage + kitchenPrice + kitchenDelivery;
    $("#kitchenPrice").html(kitchenPrice + " грн.");
    $("#kitchenMontage").html(kitchenMontage + " грн.");
    $("#kitchenDelivery").html(kitchenDelivery + " грн.");
    $("#kitchenTotal, #kitchenTotalPrice").html(kitchenTotal + " грн");
    $("#kitchenTotalPriceDiscount").html(kitchenTotal * 0.9);
    /*    for (let i = 0; i < 6; i++) {
        let $container = $(".list-container");
        $container.append("<div class=\"division-block\"></div>");
        $container.append("<div class=\"option-block\"></div>");
        $container.last(".list-option.container").append(`<span class=\"name\">${parseData("F"+(72+i))}, ${parseData("G"+(72+i))}</span><span class=\"list-text\">${parseData("H"+(72+i))} грн.</span>`);
    }*/
};
