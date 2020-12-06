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
            return price;
        }
        return data.feed.entry.find((entry) => entry.title.$t == range).content.$t;
    }
    /*let cookies = document.cookie.split(";").map((cookie) => cookie.split("=")).reduce((accumulator, [key, value]) => ({...accumulator,[key.trim()]: decodeURIComponent(value),}),{});
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
    }*/
        for (let i = 0; i < 6; i++) {
        let $container = $(".list-container");
        $container.append("<div class=\"division-block\"></div>");
        $container.append("<div class=\"option-block\"></div>");
        $container.last(".list-option.container").append(`<span class=\"name\">${parseData("F"+(72+i))}, ${parseData("G"+(72+i))}</span><span class=\"list-text\">${parseData("H"+(72+i))} грн.</span>`);
    }
};
