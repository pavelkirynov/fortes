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
                fridge: parseFloat(parseData("A163")),
                oven: parseFloat(parseData("A164")),
                varochnayaPanel: parseFloat(parseData("A165")),
                microwave: parseFloat(parseData("A166")),
                vytyazhka: parseFloat(parseData("A167")),
                washingMachine: parseFloat(parseData("A168")),
                dishwasher: parseFloat(parseData("A169")),
                boiler: parseFloat(parseData("A170")),
                TV: parseFloat(parseData("A171")),
                delivery: parseFloat(parseData("A172")),
            },
            nabor2: {
                fridge: parseFloat(parseData("A177")),
                oven: parseFloat(parseData("A178")),
                varochnayaPanel: parseFloat(parseData("A179")),
                microwave: parseFloat(parseData("A180")),
                vytyazhka: parseFloat(parseData("A181")),
                washingMachine: parseFloat(parseData("A182")),
                sushylnaMachina: parseFloat(parseData("A183")),
                dishwasher: parseFloat(parseData("A184")),
                boiler: parseFloat(parseData("A185")),
                TV: parseFloat(parseData("A186")),
                delivery: parseFloat(parseData("A187")),
            },
            nabor3: {
                fridge: parseFloat(parseData("A192")),
                oven: parseFloat(parseData("A193")),
                varochnayaPanel: parseFloat(parseData("A194")),
                vytyazhka: parseFloat(parseData("A195")),
                washingMachine: parseFloat(parseData("A196")),
                sushylnaMachina: parseFloat(parseData("A197")),
                dishwasher: parseFloat(parseData("A198")),
                boiler: parseFloat(parseData("A199")),
                TV: parseFloat(parseData("A200")),
                delivery: parseFloat(parseData("A201")),
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
