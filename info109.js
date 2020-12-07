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
        if (!data.feed.entry.find((entry) => entry.title.$t == range)) {
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
        style = cookies._style,
        space = cookies._space,
        bath = cookies._bath,
        shower = cookies._shower,
        amountOfRooms = cookies._amountOfRooms,
        amountOfBathrooms = cookies._amountOfBathrooms,
        letter,
        ceiling = cookies._ceiling,
        flooring = cookies._flooring,
        workSum = 0;
        
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
        let flooringNum, ceilingNum, mouldings;
        if (flooring == "laminat") {
            flooringNum = "60";
        } else if (flooring == "vynil") {
            flooringNum = "61";
        } else if (flooring == "parket") {
            flooringNum = "62";
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
        console.log(flooring+" " + ceiling);
        appendWorkOption(parseData("F42"), parseData("G42"), 1, parseFloat(parseData(`${letter+42}`, space)) * space);
        appendWorkOption(parseData("F43"), parseData("G43"), 1, parseFloat(parseData(`${letter+43}`, space)) * space);
        appendWorkOption(parseData("F44"), parseData("G44"), amountOfBathrooms, parseFloat(parseData(`${letter+44}`, space)) * space * parseFloat(amountOfBathrooms));
        appendWorkOption(parseData("F45"), parseData("G45"), 1, parseFloat(parseData(`${letter+45}`, space)) * space);
        appendWorkOption(parseData("F46"), parseData("G46"), bath, parseFloat(parseData(`${letter + 46}`, space)));
        appendWorkOption(parseData("F47"), parseData("G47"), shower, parseFloat(parseData(`${letter + 47}`, space)));
        appendWorkOption(parseData("F48"), parseData("G48"), 1, parseFloat(parseData(`${letter + 48}`, space)) * space);
        appendWorkOption(parseData("F49"), parseData("G49"), amountOfBathrooms, parseFloat(parseData(`${letter + 49}`, space)) * space);
        appendWorkOption(parseData("F50"), parseData("G50"), (parseFloat(amountOfBathrooms) + parseFloat(amountOfRooms)), parseFloat(parseData(`${letter + 50}`)) * (parseFloat(amountOfRooms) + parseFloat(amountOfBathrooms)));
        appendWorkOption(parseData("F52"), parseData("G52"), 1, parseFloat(parseData(`${letter + 52}`, space)) * space);
        appendWorkOption(parseData("F54"), parseData("G54"), 1, parseFloat(parseData(`${letter + 54}`)));
        appendWorkOption(parseData("F53"), parseData("G53"), mouldings, parseFloat(parseData(`${letter + 53}`, space)) * 140);        
        appendWorkOption(parseData("F"+ceilingNum), parseData("G" + ceilingNum), 1, parseFloat(parseData(letter + ceilingNum, space)) * space);
        appendWorkOption(parseData("F" + flooringNum), parseData("G" + flooringNum), 1, parseFloat(parseData(letter + flooringNum, space)) * space);
        appendWorkOption(parseData("F64"), parseData("G64"), 1, parseFloat(parseData(`${letter + 64}`, space)) * space);
        appendWorkOption(parseData("F66"), 0, 1, Math.round(((workSum - (parseFloat(parseData(`${letter+42}`, space)) + parseFloat(parseData(`${letter+43}`, space)) + parseFloat(parseData(`${letter+44}`, space)) * parseFloat(amountOfBathrooms) + parseFloat(parseData(`${letter+45}`, space))) + parseFloat(parseData(`${letter+45}`, space))) * space)/100)*2.2);
        appendWorkOption(parseData("F67"), 0, 1, (parseFloat(parseData("G8", space) * 2 * 1200) + 3000 + (space * 100)));
    
        function appendWorkOption(name, manufacturer, amount, price) {
            if ((amount == 0) || (amount == undefined) || (price == 0)) {
                return;       
            }
            let $work = $("#workList");
            workSum += parseFloat(price);
            $work.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"></div></div>");
            if (!manufacturer) {
               $("#workList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}</span><span class=\'list-text amount-work\'>${amount} шт.</span><span class=\'list-text work\'>${price} грн.</span>`);
                    return;
            }            
            $("#workList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}, ${manufacturer}</span><span class=\'list-text amount-work\'>${amount} шт.</span><span class=\'list-text work\'>${price} грн.</span>`);
    }
        $("#workList").append("<div class=\"division-block pricelist\"></div><div class=\"list-option-container summary\"></div>");
        $("#workList .list-option-container").last().append(`<span class=\'name summary\'>Всього по будівельній частині:</span><span class=\'list-text summary work\'>${workSum} грн.</span>`);
    
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
