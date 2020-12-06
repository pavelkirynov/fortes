let appliancesBoolTotal = 1;
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
                value = parseFloat(formulaData[i][1]);

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
            return price;
        }
        return data.feed.entry.find((entry) => entry.title.$t == range).content.$t;
    }
        let appliances = {
            nabor1: {
                fridge: parseData("C163"),
                oven: parseData("C164"),
                varochnayaPanel: parseData("C165"),
                microwave: parseData("C166"),
                vytyazhka: parseData("C167"),
                washingMachine: parseData("C168"),
                dishwasher: parseData("C169"),
                boiler: parseData("C170"),
                TV: parseData("C171"),
                delivery: parseData("C172"),
            },
            nabor2: {
                fridge: parseData("C177"),
                oven: parseData("C178"),
                varochnayaPanel: parseData("C179"),
                microwave: parseData("C180"),
                vytyazhka: parseData("C181"),
                washingMachine: parseData("C182"),
                sushylnaMachina: parseData("C183"),
                dishwasher: parseData("C184"),
                boiler: parseData("C185"),
                TV: parseData("C186"),
                delivery: parseData("C187"),
            },
            nabor3: {
                fridge: parseData("C192"),
                oven: parseData("C193"),
                varochnayaPanel: parseData("C194"),
                vytyazhka: parseData("C195"),
                washingMachine: parseData("C196"),
                sushylnaMachina: parseData("C197"),
                dishwasher: parseData("C198"),
                boiler: parseData("C199"),
                TV: parseData("C200"),
                delivery: parseData("C201"),
            },
        };
    for (let i = 0; i < 6; i++) {
        let $container = $(".list-container");
        let $con
        $container.append("<div class=\"division-block\"></div>");
        $container.append("<div class=\"option-block\"></div>");
        $container.last(".list-option.container").append(`<span class=\"name\">${parseData("F"+(72+i))}, ${parseData("G"+(72+i))}</span><span class=\"list-text\">${parseData("H"+(72+i))} грн.</span>`);
    }
    let cookies = document.cookie.split(";").map((cookie) => cookie.split("=")).reduce((accumulator, [key, value]) => ({...accumulator,[key.trim()]: decodeURIComponent(value),}),{});
    let appliancesCookie = cookies._appliances;
    if (!!appliancesBoolTotal) {
        if (appliancesCookie == "gorenje") {
            let element = appliances.nabor1;
            let i = 1;
            for (let key in element) {
                $(`#element${i}`).html(element[key]);
                $(`#elementArt${i}`).html(parseFloat(parseData(`B${163+i-1}`)));
                i++;
            }
            i = 1;
        } else if (appliancesCookie == "bosch") {
            let element = appliances.nabor2;
            let i = 1;
            for (let key in element) {
                $(`#element${i}`).html(element[key]);
                $(`#elementArt${i}`).html(parseFloat(parseData(`B${177+i-1}`)));
                i++;
            }
            i = 1;
        } else if (appliancesCookie == "miele") {
            let element = appliances.nabor3;
            let i = 1;
            for (let key in element) {
                $(`#element${i}`).html(element[key]);
                $(`#elementArt${i}`).html(parseFloat(parseData(`B${192+i-1}`)));
                i++;
            }
            i = 1;
        }
    }
};
