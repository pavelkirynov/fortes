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
        //console.log(comparableData);
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
                        console.log("threshold " + threshold + " sign " + sign + " value " + value + " price " + price + " data " + comparableData);
                        return price;
                    }
                }
                if (sign === ">=") {
                    if (+comparableData >= +threshold) {
                        console.log("threshold " + threshold + " sign " + sign + " value " + value + " price " + price + " data " + comparableData);
                        price = value;
                    }
                }
                /*console.log(formulaRaw);
                console.log(formulaRaw[0][2] + " test");
                value = formulaRaw[0][3];
                sign = formulaRaw[0][2];*/
                //formulaRaw.splice(0, formulaRaw.length);
                //return price;
            }
            //console.log(price);
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
        if (!!appliancesBoolTotal) {
            if (!!appliancesBool.standardGorenje) {
                let element = appliances.nabor1;
                let i = 1;
                for (let key in element) {
                    $(`#element${i}`).html(element[key]);
                    i++;
                }
                i = 1;
            }
        }
};
