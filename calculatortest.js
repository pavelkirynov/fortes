let style = "";
$(".tab").on("click", function (e) {
     number = parseInt($(this).attr("data-slider-index"));
     if (number == 0) {
         style = "cozy";
     } else if (number == 1) {
         style = "fusion";
     } else if (number == 2) {
         style = "japandi";
     } else if (number == 3) {
         style = "modern";
     } else if (number == 4) {
         style = "neoclassic";
     }
 });
if (style) {
  style = "fusion";
}
 let space = 50,
     amountOfRooms = 2,
     amountOfBathrooms = 2,
     furnitureBool = 1,
     appliancesBoolTotal = 1,
     bathtub = 1,
     shower = 1,
     optionsBool = {
         hygienicShower: 1,
         floorScreed: 1,
         heatedFlooring: 1,
         denoising: 1,
         entranceDoors: 1,
         conditioning: 1,
     },
     ceilingBool = {
         ceiling1: 1,
         ceiling2: 0,
         ceiling3: 0,
     },
     flooringBool = {
         laminate: 1,
         vinyl: 0,
         parquet: 0,
     },
     appliancesBool = {
         standardGorenje: 1,
         standardBosch: 0,
         premiumMiele: 0,
     };
 for (let key in appliancesBool) {
     console.log(appliancesBool[key]);
 }
 const onDataLoaded = (data) => {
     let sign = "",
         value = 0,
         formulaRaw = [],
         morethan = ">=",
         lessthan = "<=",
         equals = "=",
         price = 0,
         threshold = 0;

     function parseData(range, comparableData) {
         console.log(comparableData);
         let rawData = data.feed.entry.find((entry) => entry.title.$t == range).gs$cell.inputValue;
         if (rawData.includes("=IF")) {
             while (rawData[rawData.length - 1] == ")") {
                 rawData = rawData.substring(0, rawData.length - 1);
                 console.log("e");
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
                 console.log(sign);
                 if (!price) {
                     price = value;
                 }
                 if (sign === "<=") {
                     if (+comparableData <= +threshold) {
                         price = value;
                         //console.log(threshold + " " + value + " " + price  + " " + comparableData);
                         return price;
                     }
                 }
                 if (sign === ">=") {
                     if (+comparableData >= +threshold) {
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
     let work = {
         cozy: {
             doorInstallation: parseFloat(parseData("F40")),
             electricity: parseFloat(parseData("F41")),
             denoising: parseFloat(parseData("F42", space)),
             kafel: parseFloat(parseData("F44", space)),
             shower: parseFloat(parseData("F45")),
             bathtub: parseFloat(parseData("F46")),
             ceiling1: parseFloat(parseData("F48")),
             ceiling2: parseFloat(parseData("F49", space)),
             ceiling3: parseFloat(parseData("F50", space)),
             wallPainting: parseFloat(parseData("F52", space)),
             ceilingPainting: parseFloat(parseData("F53", space)),
             mouldings: parseFloat(parseData("F54")),
             laminate: parseFloat(parseData("F56", space)),
             vinyl: parseFloat(parseData("F57", space)),
             parquet: parseFloat(parseData("F58", space)),
             plinth: parseFloat(parseData("F60", space)),
             plinthHidden: parseFloat(parseData("F61", space)),
             water: parseFloat(parseData("F62", space)),
             canalisation: parseFloat(parseData("F63", space)),
             ventilation: parseFloat(parseData("F64", space)),
             doors: parseFloat(parseData("F65")),
         },
         japandi: {
             doorInstallation: parseFloat(parseData("H40")),
             electricity: parseFloat(parseData("H41")),
             denoising: parseFloat(parseData("H42", space)),
             kafel: parseFloat(parseData("H44", space)),
             shower: parseFloat(parseData("H45")),
             bathtub: parseFloat(parseData("H46")),
             ceiling1: parseFloat(parseData("H48")),
             ceiling2: parseFloat(parseData("H49", space)),
             ceiling3: parseFloat(parseData("H50", space)),
             wallPainting: parseFloat(parseData("H52", space)),
             ceilingPainting: parseFloat(parseData("H53", space)),
             mouldings: parseFloat(parseData("H54")),
             laminate: parseFloat(parseData("H56", space)),
             vinyl: parseFloat(parseData("H57", space)),
             parquet: parseFloat(parseData("H58", space)),
             plinth: parseFloat(parseData("H60", space)),
             plinthHidden: parseFloat(parseData("H61", space)),
             water: parseFloat(parseData("H62", space)),
             canalisation: parseFloat(parseData("H63", space)),
             ventilation: parseFloat(parseData("H64", space)),
             doors: parseFloat(parseData("H65")),
         },
         fusion: {
             doorInstallation: parseFloat(parseData("J40")),
             electricity: parseFloat(parseData("J41")),
             denoising: parseFloat(parseData("J42", space)),
             kafel: parseFloat(parseData("J44", space)),
             shower: parseFloat(parseData("J45")),
             bathtub: parseFloat(parseData("J46")),
             ceiling1: parseFloat(parseData("J48")),
             ceiling2: parseFloat(parseData("J49", space)),
             ceiling3: parseFloat(parseData("J50", space)),
             wallPainting: parseFloat(parseData("J52", space)),
             ceilingPainting: parseFloat(parseData("J53", space)),
             mouldings: parseFloat(parseData("J54", space) * 140),
             laminate: parseFloat(parseData("J56", space)),
             vinyl: parseFloat(parseData("J57", space)),
             parquet: parseFloat(parseData("J58", space)),
             plinth: parseFloat(parseData("J60", space)),
             plinthHidden: parseFloat(parseData("J61", space)),
             water: parseFloat(parseData("J62", space)),
             canalisation: parseFloat(parseData("J63", space)),
             ventilation: parseFloat(parseData("J64", space)),
             doors: parseFloat(parseData("J65")),
         },
         modern: {
             doorInstallation: parseFloat(parseData("L40")),
             electricity: parseFloat(parseData("L41")),
             denoising: parseFloat(parseData("L42", space)),
             kafel: parseFloat(parseData("L44", space)),
             shower: parseFloat(parseData("L45")),
             bathtub: parseFloat(parseData("L46")),
             ceiling1: parseFloat(parseData("L48")),
             ceiling2: parseFloat(parseData("L49", space)),
             ceiling3: parseFloat(parseData("L50", space)),
             wallPainting: parseFloat(parseData("L52", space)),
             ceilingPainting: parseFloat(parseData("L53", space)),
             mouldings: parseFloat(parseData("L54", space) * 140),
             laminate: parseFloat(parseData("L56", space)),
             vinyl: parseFloat(parseData("L57", space)),
             parquet: parseFloat(parseData("L58", space)),
             plinth: parseFloat(parseData("L60", space)),
             plinthHidden: parseFloat(parseData("L61", space)),
             water: parseFloat(parseData("L62", space)),
             canalisation: parseFloat(parseData("L63", space)),
             ventilation: parseFloat(parseData("L64", space)),
             doors: parseFloat(parseData("L65")),
         },
     };
     let options = {
         cozy: {
             floorScreed: parseFloat(parseData("F103", space)),
             hygienicShower: parseFloat(parseData("F104")),
             heatedFlooring: parseFloat(parseData("F105")),
             gypsumCeilingDenoising: parseFloat(parseData("F106", space)),
             tensionCeilingDenoising: parseFloat(parseData("F107")),
             wallsDenoising: parseFloat(parseData("F108", space)),
             conditioningSplit: parseFloat(parseData("F109", space)),
             entranceDoor: parseFloat(parseData("F111")),
         },
         japandi: {
             floorScreed: parseFloat(parseData("H103", space)),
             hygienicShower: parseFloat(parseData("H104")),
             heatedFlooring: parseFloat(parseData("H105")),
             gypsumCeilingDenoising: parseFloat(parseData("H106", space)),
             tensionCeilingDenoising: parseFloat(parseData("H107")),
             wallsDenoising: parseFloat(parseData("H108", space)),
             conditioningSplit: parseFloat(parseData("H109", space)),
             entranceDoor: parseFloat(parseData("H111")),
         },
         fusion: {
             floorScreed: parseFloat(parseData("J103", space)),
             hygienicShower: parseFloat(parseData("J104")),
             heatedFlooring: parseFloat(parseData("J105")),
             gypsumCeilingDenoising: parseFloat(parseData("J106", space)),
             tensionCeilingDenoising: parseFloat(parseData("J107")),
             wallsDenoising: parseFloat(parseData("J108", space)),
             conditioningSplit: parseFloat(parseData("J109", space)),
             entranceDoor: parseFloat(parseData("J111")),
         },
         modern: {
             floorScreed: parseFloat(parseData("L103", space)),
             hygienicShower: parseFloat(parseData("L104")),
             heatedFlooring: parseFloat(parseData("L105")),
             gypsumCeilingDenoising: parseFloat(parseData("L106", space)),
             tensionCeilingDenoising: parseFloat(parseData("L107")),
             wallsDenoising: parseFloat(parseData("L108", space)),
             conditioningSplit: parseFloat(parseData("L109", space)),
             entranceDoor: parseFloat(parseData("L111")),
         },

     };
     let materials = {
         cozy: {
             door: parseFloat(parseData("F72")),
             kafel: parseFloat(parseData("F73")),
             corniceWall: parseFloat(parseData("F74")),
             corniceCeiling: parseFloat(parseData("F75")),
             plinth: parseFloat(parseData("F76")),
             electricalFurniture: parseFloat(parseData("F77")),
             sink: parseFloat(parseData("F79")),
             stand: parseFloat(parseData("F80")),
             waterMixer: parseFloat(parseData("F81")),
             bathShelf: parseFloat(parseData("F82")),
             bathtub: parseFloat(parseData("F83")),
             ladder: parseFloat(parseData("F84")),
             shower: parseFloat(parseData("F85")),
             bathShowerMixer: parseFloat(parseData("F86")),
             toilet: parseFloat(parseData("F87")),
             towelHolder: parseFloat(parseData("F89")),
             bathMirror: parseFloat(parseData("F90")),
             laminate: parseFloat(parseData("F92")),
             quartzvinyl: parseFloat(parseData("F93")),
             parquet: parseFloat(parseData("F94")),
             delivery: parseFloat(parseData("F95")),
         },
         japandi: {
             door: parseFloat(parseData("H72")),
             kafel: parseFloat(parseData("H73")),
             corniceWall: parseFloat(parseData("H74")),
             corniceCeiling: parseFloat(parseData("H75")),
             plinth: parseFloat(parseData("H76")),
             electricalFurniture: parseFloat(parseData("H77")),
             sink: parseFloat(parseData("H79")),
             stand: parseFloat(parseData("H80")),
             waterMixer: parseFloat(parseData("H81")),
             bathShelf: parseFloat(parseData("H82")),
             bathtub: parseFloat(parseData("H83")),
             ladder: parseFloat(parseData("H84")),
             shower: parseFloat(parseData("H85")),
             bathShowerMixer: parseFloat(parseData("H86")),
             toilet: parseFloat(parseData("H87")),
             towelHolder: parseFloat(parseData("H89")),
             bathMirror: parseFloat(parseData("H90")),
             laminate: parseFloat(parseData("H92")),
             quartzvinyl: parseFloat(parseData("H93")),
             parquet: parseFloat(parseData("H94")),
             delivery: parseFloat(parseData("H95")),
         },
         fusion: {
             door: parseFloat(parseData("J72")),
             kafel: parseFloat(parseData("J73")),
             corniceWall: parseFloat(parseData("J74")),
             corniceCeiling: parseFloat(parseData("J75")),
             plinth: parseFloat(parseData("J76")),
             electricalFurniture: parseFloat(parseData("J77")),
             sink: parseFloat(parseData("J79")),
             stand: parseFloat(parseData("J80")),
             waterMixer: parseFloat(parseData("J81")),
             bathShelf: parseFloat(parseData("J82")),
             bathtub: parseFloat(parseData("J83")),
             ladder: parseFloat(parseData("J84")),
             shower: parseFloat(parseData("J85")),
             bathShowerMixer: parseFloat(parseData("J86")),
             toilet: parseFloat(parseData("J87")),
             towelHolder: parseFloat(parseData("J89")),
             bathMirror: parseFloat(parseData("J90")),
             laminate: parseFloat(parseData("J92")),
             quartzvinyl: parseFloat(parseData("J93")),
             parquet: parseFloat(parseData("J94")),
             delivery: parseFloat(parseData("J95")),
         },
         modern: {
             door: parseFloat(parseData("L72")),
             kafel: parseFloat(parseData("L73")),
             corniceWall: parseFloat(parseData("L74")),
             corniceCeiling: parseFloat(parseData("L75")),
             plinth: parseFloat(parseData("L76")),
             electricalFurniture: parseFloat(parseData("L77")),
             sink: parseFloat(parseData("L79")),
             stand: parseFloat(parseData("L80")),
             waterMixer: parseFloat(parseData("L81")),
             bathShelf: parseFloat(parseData("L82")),
             bathtub: parseFloat(parseData("L83")),
             ladder: parseFloat(parseData("L84")),
             shower: parseFloat(parseData("L85")),
             bathShowerMixer: parseFloat(parseData("L86")),
             toilet: parseFloat(parseData("L87")),
             towelHolder: parseFloat(parseData("L89")),
             bathMirror: parseFloat(parseData("L90")),
             laminate: parseFloat(parseData("L92")),
             quartzvinyl: parseFloat(parseData("L93")),
             parquet: parseFloat(parseData("F94")),
             delivery: parseFloat(parseData("L95")),
         },
     };
     let furniture = {
         cozy: {
             kitchen: parseFloat(parseData("F117")),
             kitchenSink: parseFloat(parseData("F118")),
             kitchenSinkMixer: parseFloat(parseData("F119")),
             table: parseFloat(parseData("F120")),
             chairs: parseFloat(parseData("F121")),
             otherKitchenFurniture: parseFloat(parseData("F122")),
             barStool: parseFloat(parseData("F123")),
             sofa: parseFloat(parseData("F125")),
             livingroomChair: parseFloat(parseData("F126")),
             coffeeTable: parseFloat(parseData("F127")),
             //otherFurniture: parseFloat(parseData("F128")),
             bed: parseFloat(parseData("F130")),
             cupboard: parseFloat(parseData("F131")),
             bedChair: parseFloat(parseData("F132")),
             desk: parseFloat(parseData("F133")),
             mirror: parseFloat(parseData("F134")),
             spotlight: parseFloat(parseData("F136")),
             chandelier: parseFloat(parseData("F137")),
             bedsideLight: parseFloat(parseData("F138")),
             kitchenWallLight: parseFloat(parseData("F139")),
             kitchenCeilingLight: parseFloat(parseData("F140")),
             livingroomFloorLight: parseFloat(parseData("F141")),
             //hangingLight: parseFloat(parseData("F142")),
             curtains: parseFloat(parseData("F144")),
             tulle: parseFloat(parseData("F145")),
             cornice: parseFloat(parseData("F146")),
             jalousie: parseFloat(parseData("F147")),
         },
         japandi: {
             kitchen: parseFloat(parseData("H117")),
             kitchenSink: parseFloat(parseData("H118")),
             kitchenSinkMixer: parseFloat(parseData("H119")),
             table: parseFloat(parseData("H120")),
             chairs: parseFloat(parseData("H121")),
             otherKitchenFurniture: parseFloat(parseData("H122")),
             barStool: parseFloat(parseData("H123")),
             sofa: parseFloat(parseData("H125")),
             livingroomChair: parseFloat(parseData("H126")),
             coffeeTable: parseFloat(parseData("H127")),
             //otherFurniture: parseFloat(parseData("H128")),
             bed: parseFloat(parseData("H130")),
             cupboard: parseFloat(parseData("H131")),
             bedChair: parseFloat(parseData("H132")),
             desk: parseFloat(parseData("H133")),
             mirror: parseFloat(parseData("H134")),
             spotlight: parseFloat(parseData("H136")),
             chandelier: parseFloat(parseData("H137")),
             bedsideLight: parseFloat(parseData("H138")),
             kitchenWallLight: parseFloat(parseData("H139")),
             kitchenCeilingLight: parseFloat(parseData("H140")),
             livingroomFloorLight: parseFloat(parseData("H141")),
             //hangingLight: parseFloat(parseData("H142")),
             curtains: parseFloat(parseData("H144")),
             tulle: parseFloat(parseData("H145")),
             cornice: parseFloat(parseData("H146")),
             jalousie: parseFloat(parseData("H147")),
         },
         fusion: {
             kitchen: parseFloat(parseData("J117")),
             kitchenSink: parseFloat(parseData("J118")),
             kitchenSinkMixer: parseFloat(parseData("J119")),
             table: parseFloat(parseData("J120")),
             chairs: parseFloat(parseData("J121")),
             otherKitchenFurniture: parseFloat(parseData("J122")),
             barStool: parseFloat(parseData("J123")),
             sofa: parseFloat(parseData("J125")),
             livingroomChair: parseFloat(parseData("J126")),
             coffeeTable: parseFloat(parseData("J127")),
             //otherFurniture: parseFloat(parseData("J128")),
             bed: parseFloat(parseData("J130")),
             cupboard: parseFloat(parseData("J131")),
             bedChair: parseFloat(parseData("J132")),
             desk: parseFloat(parseData("J133")),
             mirror: parseFloat(parseData("J134")),
             spotlight: parseFloat(parseData("J136")),
             chandelier: parseFloat(parseData("J137")),
             bedsideLight: parseFloat(parseData("J138")),
             kitchenWallLight: parseFloat(parseData("J139")),
             kitchenCeilingLight: parseFloat(parseData("J140")),
             livingroomFloorLight: parseFloat(parseData("J141")),
             //hangingLight: parseFloat(parseData("J142")),
             curtains: parseFloat(parseData("J144")),
             tulle: parseFloat(parseData("J145")),
             cornice: parseFloat(parseData("J146")),
             jalousie: parseFloat(parseData("J147")),
         },
         modern: {
             kitchen: parseFloat(parseData("L117")),
             kitchenSink: parseFloat(parseData("L118")),
             kitchenSinkMixer: parseFloat(parseData("L119")),
             table: parseFloat(parseData("L120")),
             chairs: parseFloat(parseData("L121")),
             otherKitchenFurniture: parseFloat(parseData("L122")),
             barStool: parseFloat(parseData("L123")),
             sofa: parseFloat(parseData("L125")),
             livingroomChair: parseFloat(parseData("L126")),
             coffeeTable: parseFloat(parseData("L127")),
             //otherFurniture: parseFloat(parseData("L128")),
             bed: parseFloat(parseData("L130")),
             cupboard: parseFloat(parseData("L131")),
             bedChair: parseFloat(parseData("L132")),
             desk: parseFloat(parseData("L133")),
             mirror: parseFloat(parseData("L134")),
             spotlight: parseFloat(parseData("L136")),
             chandelier: parseFloat(parseData("L137")),
             bedsideLight: parseFloat(parseData("L138")),
             kitchenWallLight: parseFloat(parseData("L139")),
             kitchenCeilingLight: parseFloat(parseData("L140")),
             livingroomFloorLight: parseFloat(parseData("L141")),
             //hangingLight: parseFloat(parseData("L142")),
             curtains: parseFloat(parseData("L144")),
             tulle: parseFloat(parseData("L145")),
             cornice: parseFloat(parseData("L146")),
             jalousie: parseFloat(parseData("L147")),
         },
     };
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
     let conditioning = {
         conditioner: parseFloat(parseData("F155")),
     };
     let AccessorriesMarkup = parseFloat(parseData("N100")),
         FurnitureMarkup = parseFloat(parseData("N152")),
         ClimaticMarkup = parseFloat(parseData("N160"));

     let months = parseFloat(parseData("D8", space));
     console.log(months);
     //console.log(style);
     function handleFurniture() {
         let element = "",
             kitchenTotal = 0,
             livingroomTotal = 0,
             bedroomTotal = 0,
             lightingTotal = 0,
             decorationsTotal = 0;
         if (style == "modern") {
             element = furniture.modern;
         } else if (style == "fusion") {
             element = furniture.fusion;
         } else if (style == "cozy") {
             element = furniture.cozy;
         } else if (style == "japandi") {
             element = furniture.japandi;
         }

         if (furnitureBool) {
             kitchenTotal = element.kitchen + element.kitchenSink + element.kitchenSinkMixer + element.table + (element.chairs * 4) + (element.barStool * 4);
             livingroomTotal = element.sofa + element.livingroomChair /*+ element.coffeeTable*/ ;
             bedroomTotal = (element.bed * (amountOfRooms - 1)) + element.cupboard + element.bedChair + element.desk + element.mirror;
             lightingTotal = (element.spotlight * (0.48 * space)) + element.chandelier * (amountOfRooms - 1) + element.bedsideLight * 2 + element.kitchenWallLight + element.kitchenCeilingLight * 2 + element.livingroomFloorLight /* + element.hangingLight*/ ;
             decorationsTotal = (element.curtains * 3) + element.tulle * amountOfRooms + element.cornice * 3 + element.jalousie;
         }
         let furnitureTotal = (kitchenTotal + livingroomTotal + bedroomTotal + lightingTotal + decorationsTotal) * 1.03 * (1 + (FurnitureMarkup / 100));
         return furnitureTotal;
     }

     function handleWork() {
         let element = "",
             ceilingTotal = 0,
             paintingTotal = 0,
             flooringTotal = 0,
             plinthTotal = 0,
             generalTotal = 0;
         if (style == "modern") {
             element = work.modern;
         } else if (style == "fusion") {
             element = work.fusion;
         } else if (style == "cozy") {
             element = work.cozy;
         } else if (style == "japandi") {
             element = work.japandi;
         }
         generalTotal = (element.doorInstallation * (amountOfBathrooms + amountOfRooms)) + (element.electricity * space) + (element.kafel * amountOfBathrooms * space) + (element.bathtub * bathtub) + (element.shower * shower) + (element.denoising * space);
         ceilingTotal = (element.ceiling1 * ceilingBool.ceiling1 + element.ceiling2 * ceilingBool.ceiling2 + element.ceiling3 * ceilingBool.ceiling3) * space;
         flooringTotal = (element.laminate * flooringBool.laminate + element.vinyl * flooringBool.vinyl + element.parquet * flooringBool.parquet) * space;
         paintingTotal = (element.wallPainting + element.ceiling2 * ceilingBool.ceiling2) * space + element.mouldings;
         plinthTotal = (element.plinth + element.plinthHidden + element.water + element.canalisation + amountOfBathrooms * amountOfBathrooms * element.ventilation) * space + optionsBool.entranceDoors * element.doors;
         let workTotal = (generalTotal + ceilingTotal + flooringTotal + paintingTotal + plinthTotal) * 1.022 + ((space * 100) + (months * 2 * 1200) + 3000);
         return workTotal;
     }

     function handleMaterials() {
         let element = "",
             generalTotal = 0,
             bathroomTotal = 0,
             flooringTotal = 0,
             materialsTotal = 0;
         if (style == "modern") {
             element = materials.modern;
         } else if (style == "fusion") {
             element = materials.fusion;
         } else if (style == "cozy") {
             element = materials.cozy;
         } else if (style == "japandi") {
             element = materials.japandi;
         }
         generalTotal = element.door * (amountOfBathrooms + amountOfRooms) + element.kafel * amountOfBathrooms * 35 + 0.66 * element.corniceWall * space + 0.66 * element.corniceCeiling * space + 0.59 * element.plinth * space + parseFloat(parseData("E77", space)) * element.electricalFurniture;
         bathroomTotal = amountOfBathrooms * (element.sink + element.stand + element.waterMixer + element.bathShelf) + element.bathtub * bathtub + (element.shower + element.ladder) * shower + (bathtub + shower) * element.bathShowerMixer + amountOfBathrooms * element.toilet + (element.towelHolder + element.bathMirror) * amountOfBathrooms;
         let vinylAmount, laminateAmount, parquetAmount;
         if (space < 100) {

             vinylAmount = parquetAmount = laminateAmount = space - (bathtub * 7);
         } else if (space > 100) {
             vinylAmount = parquetAmount = space - (bathtub * 9);
             laminateAmount = space - (bathtub * 10);

         }
         flooringTotal = element.laminate * laminateAmount + element.quartzvinyl * vinylAmount + element.parquet * parquetAmount;
         materialsTotal = generalTotal + bathroomTotal + flooringTotal + furnitureBool * element.delivery;
         return materialsTotal;
     }

     function handleOptions() {
         let element = "",
             optionsTotal = 0;
         if (style == "modern") {
             element = options.modern;
         } else if (style == "fusion") {
             element = options.fusion;
         } else if (style == "cozy") {
             element = options.cozy;
         } else if (style == "japandi") {
             element = options.japandi;
         }
         optionsTotal = optionsBool.floorScreed * element.floorScreed * space + (optionsBool.hygienicShower - 1 * amountOfBathrooms * element.hygienicShower) + optionsBool.heatedFlooring * element.heatedFlooring + ((optionsBool.denoising + ceilingBool.ceiling3) * element.gypsumCeilingDenoising * space + (ceilingBool.ceiling1 + ceilingBool.ceiling2 + optionsBool.denoising) * element.tensionCeilingDenoising * space + element.wallsDenoising * optionsBool.denoising + optionsBool.conditioning * element.conditioningSplit * space) + optionsBool.entranceDoors * element.entranceDoor;
         return optionsTotal;
     }

     function handleConditioning() {
         return conditioning.conditioner * 1.05 * (1 + (ClimaticMarkup / 100));
     }

     function handleAppliances() {
         let element = "";
         if (appliancesBool.standardGorenje) {
             element = appliances.nabor1;
         } else if (appliancesBool.standardBosch) {
             element = appliances.nabor2;
         } else if (appliancesBool.premiumMiele) {
             element = appliances.nabor3;
         }
         let sum = 0;
         for (let key in element) {
             sum += +element[key];
             console.log(key + " " + element[key]);
         }
         return sum;
     }
     let total = (handleAppliances() + handleConditioning() + handleFurniture() + ((handleMaterials() + handleWork()) * (1 + (AccessorriesMarkup / 100))) + handleOptions()) / (28.4 * space);
     //console.log((1 + (AccessorriesMarkup / 100)));
     $("#total").html(total);
 };
