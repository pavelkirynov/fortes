import { Cell } from "./models/Cell";
import { Table } from "./models/Table";
import { ResponseRow } from "./interfaces/Row";
import { LocalStorageHandler } from "./utils/LocalStorageHandler";
import { Utils } from "./utils/Utils";
import { Formatter } from "./utils/Formatter";

fetch(
  "https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json&gid=1219923480"
)
  .then((res: Response) => res.text())
  .then((text: string) => {
    const response = JSON.parse(
      text
        .substring(text.length - 2, 0)
        .replace(`/*O_o*/\ngoogle.visualization.Query.setResponse(`, "")
    );

    const responseRows: Array<ResponseRow> = response.table.rows;

    const table: Table = new Table(
      responseRows
        .map((row: ResponseRow, outerIndex: number) => {
          return row.c
            .map(function (cell, index: number): Cell {
              if (cell === null || cell.v === null) {
                return;
              }

              return new Cell(
                `${Utils.numberToEncodedLetter(index + 1)}${outerIndex + 1}`,
                cell.v ?? cell.f
              );
            })
            .filter((cell) => cell != null);
        })
        .reduce((pv, cv) => [...pv, ...cv])
    );

    const storage = new LocalStorageHandler();
    let appliances = storage.get("appliances");

    const style: string = storage.get("style");
    const styleLetter = getRightStyleLetter(style);
    let appliancesBoolTotal = Boolean(storage.get("appliances_bool_total")),
      furnitureBool: boolean = Boolean(storage.get("furniture_bool")),
      space: number = storage.get("space"),
      bath: boolean = Boolean(storage.get("bath")),
      shower: boolean = Boolean(storage.get("shower")),
      amountOfRooms: number = storage.get("amount_of_rooms"),
      amountOfBathrooms: number = storage.get("amount_of_bathrooms"),
      letter: string = "",
      letterModel: string = "",
      ceiling: string = storage.get("ceiling"),
      hygienicShower: boolean = storage.get("hygienic_shower"),
      secondGypsumLayer: boolean = storage.get("second_gypsum_layer"),
      demontage: boolean = storage.get("demontage"),
      windows: number = storage.get("windows_installtion"),
      heatedFlooring: number = storage.get("heated_flooring"),
      denoising: boolean = storage.get("denoising"),
      entranceDoors: boolean = storage.get("entrance_doors"),
      conditioning: number = storage.get("conditioning"),
      flooring = storage.get("flooring"),
      workSum = 0,
      furnitureSum = 0,
      $furniture = $("#furnitureList");

    const furnitureRate = table.getCell("T147").numeric();
    const conditionerRate = 1 + table.getCell("S111").numeric() / 100;
    let months =
      space <= 40
        ? 3
        : space <= 80
        ? 4
        : space <= 100
        ? 5
        : space <= 130
        ? 6
        : space <= 150
        ? 7
        : space <= 175
        ? 8
        : 9;
    if (style == "modern" || style == "neoclassic") {
      months += 1;
    }
    $("#months").html(months.toString());
    const workInflation = table.getCell("S44").numeric();
    const s42 = table.getCell("S42").numeric();

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
    let flooringPrice = 0;
    let flooringNum, ceilingNum, flooringNum2, mouldings;

    if (flooring == "laminat") {
      flooringNum = "61";
      flooringNum2 = "87";
      flooringPrice = space * (space <= 70 ? 201.26 : 198.81) * workInflation;
    } else if (flooring == "vynil") {
      flooringNum = "61";
      flooringNum2 = "87";
      flooringPrice = space * (space <= 70 ? 220.33 : 161.8) * workInflation;
    } else if (flooring == "parket") {
      flooringNum = "62";
      flooringNum2 = "87";
      flooringPrice = space * (space <= 80 ? 369.96 : 240.31) * workInflation;
    }

    let $work = $("#workList");
    let textObject = "";
    let water =
      2523 *
      ((amountOfRooms > 0 ? 6 : 0) +
        (bath ? 2 : 0) +
        (shower ? 2 : 0) +
        amountOfBathrooms * 2) *
      //inflation
      workInflation;
    let canalisation =
      1974 *
      ((amountOfRooms > 0 ? 3 : 0) +
        (bath ? 1 : 0) +
        (shower ? 1 : 0) +
        amountOfBathrooms * 2) *
      //inflation
      workInflation;
    let vents = space * amountOfBathrooms * (space <= 100 ? 83.2 : 33.98);
    const electricity = table.getCell(`${letter}45`).numeric() * space;

    const workPriceArray = [
      space *
        (space <= 60
          ? 1142.78
          : space <= 95
          ? 883.87
          : space <= 125
          ? 819.43
          : 925.61) *
        workInflation,
      space *
        (space <= 60
          ? 700.67
          : space <= 100
          ? 687.36
          : space <= 130
          ? 341.25
          : 317.36) *
        workInflation *
        1.1,
      table.getCell(`${letter}50`).numeric(),
      space * (space <= 50 ? 1000 : 990) * workInflation,
      140 *
        (space <= 60
          ? table.getCell(`${letter}54`).numeric()
          : space <= 80
          ? 50
          : space <= 120
          ? 78
          : space <= 180
          ? 114
          : 162) *
        (style == "modern" || style == "neoclassic" ? 1 : 0),
      space *
        (space <= 60
          ? 418.86
          : space <= 100
          ? 416.29
          : space <= 135
          ? 443.73
          : 481.67) *
        (ceiling == "gypsum" ? 1 : 0) *
        workInflation,

      flooringPrice,
      space * (space <= 70 ? 114.47 : 86.84) * workInflation,
      space *
        (space <= 70 ? 206.59 : 170) *
        workInflation *
        (style == "japandi" || style == "fusion" ? 1 : 0),
    ];
    const workAmountArray = [
      1,
      amountOfBathrooms,
      amountOfRooms + amountOfBathrooms,
      1,
      1,
      mouldings,
      1,
      1,
      1,
    ];
    const workAdressesArray = [48, 49, 50, 52, 54, 53, flooringNum, 60, 60];

    workSum +=
      water * s42 +
      ((bath ? amountOfBathrooms * table.getCell(`${letter}47`).numeric() : 0) +
        (shower
          ? amountOfBathrooms * table.getCell(`${letter}46`).numeric()
          : 0)) *
        s42 -
      (800 + 950) * workInflation;
    textObject = returnObject(
      table.getCell("F42").value(),
      "",
      Math.round(
        water * s42 +
          ((bath
            ? amountOfBathrooms * table.getCell(`${letter}47`).numeric()
            : 0) +
            (shower
              ? amountOfBathrooms * table.getCell(`${letter}46`).numeric()
              : 0)) *
            s42 -
          (800 + 950) * workInflation
      ) + " €"
    );
    $("#workList").append(textObject);

    workSum += canalisation * s42;
    textObject = returnObject(
      table.getCell("F43").value(),
      "",
      Math.round(canalisation * s42) + " €"
    );
    $("#workList").append(textObject);

    workSum += vents * s42 * workInflation;
    textObject = returnObject(
      table.getCell("F44").value(),
      "",
      Math.round(vents * s42 * workInflation) + " €"
    );
    $("#workList").append(textObject);

    workSum += electricity * s42;
    textObject = returnObject(
      table.getCell("F45").value(),
      "",
      Math.round(electricity * s42) + " €"
    );
    $("#workList").append(textObject);

    if (shower) {
      //workSum += Math.round(parseInt(shower));
      textObject = returnObject(
        table.getCell("F46").value(),
        "",
        table
          .getCell(getRightStyleLetter(style) + 46)
          .numeric()
          .toString() + " €"
      );
      $("#workList").append(textObject);
    }

    if (bath) {
      //workSum += Math.round(parseInt(bath));
      textObject = returnObject(
        table.getCell("F47").value(),
        "",
        table
          .getCell(getRightStyleLetter(style) + 47)
          .numeric()
          .toString() + " €"
      );
      $("#workList").append(textObject);
    }

    for (let i = 0; i < workAdressesArray.length; i++) {
      const price = workPriceArray[i] * workAmountArray[i] * s42;

      if (price === 0 || isNaN(price)) {
        continue;
      }

      workSum += price;
      textObject = returnObject(
        table.getCell("F" + workAdressesArray[i]).value(),
        "",
        Math.round(price) + " €"
      );

      $("#workList").append(textObject);
    }

    $("#workList").append(
      '</div><div class="list-option-container margined"></div>'
    );
    $("#workList .list-option-container")
      .last()
      .append(
        `<h4 class=\"pricelist-header small no-padding\">Комплектуючі та чистові матеріали</h4><span class=\'notation amount\'> </span><span class=\'notation\'>Ціна</span>`
      );

    let materialsPriceArray = [
      table.getCell(`${letter}72`).numeric(),
      table.getCell(`${letter}73`).numeric(),
      table.getCell(`${letter}74`).numeric(),
      table.getCell(`${letter}75`).numeric(),
      table.getCell(`${letter}77`).numeric(), //76
      table.getCell(`${letter}77`).numeric(),
      table.getCell(`${letter}79`).numeric(),
      table.getCell(`${letter}80`).numeric(),
      table.getCell(`${letter}81`).numeric(),
      table.getCell(`${letter}82`).numeric(),
      table.getCell(`${letter}85`).numeric(),
      table.getCell(`${letter}85`).numeric(), //84
      table.getCell(`${letter}85`).numeric(),
      table.getCell(`${letter}86`).numeric(),
      table.getCell(`${letter}87`).numeric(),
      table.getCell(`${letter}87`).numeric(), //88
      table.getCell(`${letter}87`).numeric(), //89
      table.getCell(`${letter + flooringNum2}`).numeric(),
      space * 100 * table.getCell("S72").numeric(),
    ];
    let materialsAmountArray = [
      amountOfBathrooms + amountOfRooms,
      amountOfBathrooms * 35,
      0.66 * space,
      0.66 * space,
      0.59 * space,
      space <= 50 ? 42 : space <= 90 ? 60 : space <= 120 ? 84 : 90,
      amountOfBathrooms,
      amountOfBathrooms,
      amountOfBathrooms,
      amountOfBathrooms,
      Number(bath),
      Number(shower),
      Number(shower),
      amountOfBathrooms,
      amountOfBathrooms,
      amountOfBathrooms,
      amountOfBathrooms,
      space < 100
        ? space - amountOfBathrooms * 7
        : space - amountOfBathrooms * 10,
      1,
    ];
    let materialsAdressesArray = [
      72,
      73,
      74,
      75,
      75,
      77,
      79,
      80,
      81,
      82,
      85,
      84,
      85,
      86,
      87,
      88,
      89,
      flooringNum2,
      94,
    ];
    let materialsDimArray = [
      null,
      null,
      null,
      null,
      null,
      null,
      79,
      80,
      81,
      82,
      85,
      84,
      85,
      86,
      87,
      88,
      89,
      flooringNum2,
      94,
    ];

    for (let i = 0; i < materialsAdressesArray.length; i++) {
      let price =
        materialsPriceArray[i] *
        materialsAmountArray[i] *
        table.getCell("S72").numeric() *
        table.getCell("S70").numeric();

      if (price === 0 || isNaN(price)) {
        continue;
      }

      workSum += price;
      textObject = returnObject(
        table.getCell("F" + materialsAdressesArray[i]).value(),
        "",
        Math.round(price) + " €"
      );

      $("#workList").append(textObject);
    }

    /////
    $("#workList").append(
      '</div><div class="list-option-container margined"></div>'
    );
    $("#workList .list-option-container")
      .last()
      .append(
        `<h4 class=\"pricelist-header small no-padding\">${table
          .getCell("F92")
          .value()}</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Price</span>`
      );
    textObject = `<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"><span class=\'name\'>${table
      .getCell("F93")
      .value()}</span><span class=\'list-text amount\'>${months} months</span><span class=\'list-text\'> </span></div></div>`;
    $("#workList").append(textObject);

    const casualtiesPriceArray = [
      ((41000 * Math.round((months + 1) / 5) * workInflation * s42) /
        1.35 /
        2 /
        1.5) *
        100 *
        space,
      workSum * 0.022 * workInflation,
      months * 2 * 1200 + 3000 + space * 220 * s42 * workInflation,
    ];
    const casualtiesAdressesArray = [94, 95, 96];

    for (let i = 0; i < casualtiesAdressesArray.length; i++) {
      const price = casualtiesPriceArray[i];
      workSum += price;
      textObject = `<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"><span class=\'name\'>${table
        .getCell(`F${casualtiesAdressesArray[i]}`)
        .value()}</span><span class=\'list-text amount\'>${Math.round(
        price / months
      )} €/місяць</span><span class=\'list-text\'>${Math.round(
        price
      )} €</span></div></div>`;
      $("#workList").append(textObject);
    }

    if (furnitureBool) {
      $("#furnitureList").append(
        '</div><div class="list-option-container"></div>'
      );
      $("#furnitureList .list-option-container")
        .last()
        .append(
          `<h4 class=\"pricelist-header small no-padding\">Кухня</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`
        );

      appendFurnitureOption(
        table.getCell("F118").value(),
        table.getCell(`${letterModel}118`)?.value(),
        1,
        table.getCell(`${letter}118`).numeric(),
        table.getCell("G118").value()
      );

      furnitureSum +=
        Math.round(table.getCell(`${letter}120`).numeric() * furnitureRate) +
        Math.round(table.getCell(`${letter}119`).numeric() * furnitureRate);
      $furniture.append(
        '<div class="option-block"><div class="division-block pricelist small-heading"></div><div class="list-option-container"></div></div>'
      );
      $("#furnitureList .option-block .list-option-container")
        .last()
        .append(
          `<span class=\'name\'>${table.getCell("F118").value()}
						</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${Formatter.formatCurrency(
              table.getCell(`${letter}119`).numeric() * furnitureRate
            )} €</span>`
        );
      $furniture.append(
        '<div class="option-block"><div class="division-block pricelist small-heading"></div><div class="list-option-container"></div></div>'
      );
      $("#furnitureList .option-block .list-option-container")
        .last()
        .append(
          `<span class=\'name\'>${table
            .getCell("F119")
            .value()}</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${Formatter.formatCurrency(
            table.getCell(`${letter}120`).numeric() * furnitureRate
          )} €</span>`
        );

      appendObject(
        $("#furnitureList"),
        '</div><div class="list-option-container margined"></div>'
      );
      appendObject(
        $("#furnitureList .list-option-container").last(),
        `<h4 class=\"pricelist-header small no-padding\">Вітальня</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`
      );

      appendFurnitureOption(
        table.getCell("F122").value(),
        table.getCell(letterModel + "122")?.value(),
        1,
        table.getCell(`${letter}122`)?.numeric(),
        table.getCell("G122")?.value()
      );
      appendFurnitureOption(
        table.getCell("F123").value(),
        table.getCell(letterModel + "123")?.value(),
        1,
        table.getCell(`${letter}123`)?.numeric(),
        table.getCell("G123")?.value()
      );

      appendObject(
        $("#furnitureList"),
        '</div><div class="list-option-container margined"></div>'
      );
      appendObject(
        $("#furnitureList .list-option-container").last(),
        `<h4 class=\"pricelist-header small no-padding\">Спальня</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`
      );

      appendFurnitureOption(
        table.getCell("F125").value(),
        table.getCell(letterModel + "125")?.value(),
        1,
        table.getCell(`${letter}125`)?.numeric(),
        table.getCell("G125")?.value()
      );
      appendFurnitureOption(
        table.getCell("F126").value(),
        table.getCell(letterModel + "126")?.value(),
        1,
        table.getCell(`${letter}126`)?.numeric(),
        table.getCell("G126")?.value()
      );
      appendFurnitureOption(
        table.getCell("F127").value(),
        table.getCell(letterModel + "127")?.value(),
        2,
        table.getCell(`${letter}127`)?.numeric(),
        table.getCell("G127")?.value()
      );

      appendFurnitureOption(
        table.getCell("F128").value(),
        table.getCell(letterModel + "128")?.value(),
        1,
        table.getCell(`${letter}128`)?.numeric(),
        table.getCell("G128")?.value()
      );
      appendFurnitureOption(
        table.getCell("F129").value(),
        table.getCell(letterModel + "129")?.value(),
        1,
        table.getCell(`${letter}129`)?.numeric(),
        table.getCell("G129")?.value()
      );

      appendObject(
        $("#furnitureList"),
        '</div><div class="list-option-container margined"></div>'
      );
      $("#furnitureList .list-option-container")
        .last()
        .append(
          `<h4 class=\"pricelist-header small no-padding\">Світильники</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`
        );

      appendFurnitureOption(
        table.getCell("F131").value(),
        table.getCell(letterModel + "131")?.value(),
        Math.ceil(space * 0.48),
        table.getCell(`${letter}131`)?.numeric(),
        table.getCell("G131")?.value()
      );
      appendFurnitureOption(
        table.getCell("F132").value(),
        table.getCell(letterModel + "132")?.value(),
        1,
        table.getCell(`${letter}132`)?.numeric(),
        table.getCell("G132")?.value()
      );
      appendFurnitureOption(
        table.getCell("F134").value(),
        table.getCell(letterModel + "134")?.value(),
        1,
        table.getCell(`${letter}134`)?.numeric(),
        table.getCell("G134")?.value()
      );
      appendFurnitureOption(
        table.getCell("F136").value(),
        table.getCell(letterModel + "136")?.value(),
        1,
        table.getCell(`${letter}136`)?.numeric(),
        table.getCell("G136")?.value()
      );
      appendFurnitureOption(
        table.getCell("F137").value(),
        table.getCell(letterModel + "137")?.value(),
        1,
        table.getCell(`${letter}137`)?.numeric(),
        table.getCell("G137")?.value()
      );

      appendFurnitureOption(
        table.getCell("F133").value(),
        table.getCell(letterModel + "133")?.value(),
        amountOfRooms > 1 ? 1 : 0,
        table.getCell(`${letter}133`)?.numeric(),
        table.getCell("G133")?.value()
      );
      appendFurnitureOption(
        table.getCell("F135").value(),
        table.getCell(letterModel + "135")?.value(),
        2,
        table.getCell(`${letter}135`)?.numeric(),
        table.getCell("G135")?.value()
      );

      $("#furnitureList").append(
        '</div><div class="list-option-container margined"></div>'
      );
      $("#furnitureList .list-option-container")
        .last()
        .append(
          `<h4 class=\"pricelist-header small no-padding\">Декор</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`
        );

      appendFurnitureOption(
        table.getCell("F139").value(),
        table.getCell(letterModel + "139")?.value(),
        amountOfRooms,
        table.getCell(`${letter}139`)?.numeric(),
        table.getCell("G139")?.value()
      );
      appendFurnitureOption(
        table.getCell("F140").value(),
        table.getCell(letterModel + "140")?.value(),
        amountOfRooms,
        table.getCell(`${letter}140`)?.numeric(),
        table.getCell("G140")?.value()
      );
      appendFurnitureOption(
        table.getCell("F141").value(),
        table.getCell(letterModel + "141")?.value(),
        amountOfRooms,
        table.getCell(`${letter}141`)?.numeric(),
        table.getCell("G141")?.value()
      );

      appendFurnitureOption(
        table.getCell("F142").value(),
        table.getCell(letterModel + "142")?.value(),
        1,
        table.getCell(`${letter}142`)?.numeric(),
        table.getCell("G142")?.value()
      );
      appendFurnitureOption(
        table.getCell("F143").value(),
        table.getCell(letterModel + "143")?.value(),
        amountOfRooms - 1,
        table.getCell(`${letter}143`)?.numeric(),
        table.getCell("G143")?.value()
      );

      appendObject(
        $("#furnitureList"),
        returnObject(
          table.getCell("F144").value(),
          " ",
          Math.round(furnitureSum * 0.03 * furnitureRate) + " €"
        )
      );
      furnitureSum += furnitureSum * 0.03 * furnitureRate;
      appendObject(
        $("#furnitureList"),
        '<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'
      );
      appendObject(
        $("#furnitureList .list-option-container").last(),
        `<span class=\'name summary\'>Всього по меблях:</span><span class=\'list-text summary work\'>${Formatter.formatCurrency(
          Math.round(furnitureSum)
        )} €</span>`
      );
    }

    if (
      hygienicShower ||
      secondGypsumLayer ||
      demontage ||
      heatedFlooring ||
      denoising ||
      entranceDoors ||
      conditioning
    ) {
      $("#workList").append(
        '</div><div class="list-option-container margined"></div>'
      );
      $("#workList .list-option-container")
        .last()
        .append(
          `<h4 class=\"pricelist-header small no-padding\"> Опції</h4><span class=\'notation amount\'> </span><span class=\'notation\'>Ціна</span>`
        );
    }

    const optionInflation = table.getCell("T103").numeric();

    let optionsPriceArray = [
      space * table.getCell(`${letter}103`).numeric() * 1.25,
      +hygienicShower * table.getCell(`${letter}104`).numeric() * 1.25,
      table.getCell(`${letter}105`).numeric() * 1.25,
      space *
        1.25 *
        (space <= 60
          ? 306.26
          : space <= 95
          ? 246.43
          : space <= 125
          ? 221.2
          : 277.29) *
        optionInflation,
      (+denoising + mouldings == 2 ? 1 : 0) *
        space *
        1.25 *
        (space <= 60
          ? 60.91
          : space <= 95
          ? 64.57
          : space <= 125
          ? 63.87
          : 66.24) *
        optionInflation +
        (+denoising + mouldings === 1 ? 1 : 0) *
          space *
          table.getCell(`${letter}105`).numeric() *
          1.25,
      +denoising > 0
        ? space *
          1.25 *
          (space <= 60
            ? 90.02
            : space <= 95
            ? 60.78
            : space <= 125
            ? 58.29
            : 79.01) *
          optionInflation
        : 0,
      table.getCell(`${letter}104`).numeric() * 1.1 +
        table.getCell(`${letter}104`).numeric() * 1.25,
      table.getCell(`${letter}104`).numeric() * space * 1.25 +
        table.getCell(`${letter}104`).numeric() * conditionerRate * 1.05,
    ];
    let optionsAmountArray = [
      1,
      hygienicShower ? amountOfBathrooms : 0,
      heatedFlooring,
      secondGypsumLayer,
      denoising,
      denoising,
      entranceDoors,
      conditioning,
    ];
    let optionsAdressesArray = [103, 104, 105, 106, 107, 108, 110, 111];

    for (let i = 0; i < optionsAdressesArray.length; i++) {
      let price = optionsPriceArray[i] * Number(optionsAmountArray[i]);
      if (
        price === 0 ||
        isNaN(price) ||
        optionsAmountArray[i] == 0 ||
        optionsAdressesArray[i] == null
      ) {
        continue;
      }

      workSum += price;
      appendObject(
        $work,
        returnObject(
          table.getCell("F" + optionsAdressesArray[i])?.value() +
            ", " +
            table.getCell(`${letterModel}${optionsAdressesArray[i]}`)?.value(),
          "",
          Math.round(price) + " €"
        )
      );
    }

    if (!appliancesBoolTotal) {
      $(".comfy-section").toggle(false);
    }
    if (!furnitureBool) {
      $("#furnitureList").toggle(false);
    }

    appendObject(
      $("#workList"),
      '<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'
    );
    appendObject(
      $("#workList .list-option-container").last(),
      `<span class=\'name summary\'>Всього по будівельній частині:</span><span class=\'list-text summary work\'>${Formatter.formatCurrency(
        workSum
      )} €</span>`
    );

    function appendFurnitureOption(name, manufacturer, amount, price, dim) {
      if (!furnitureBool) {
        return;
      }

      if (amount == 0 || !amount || !price) {
        return;
      }
      furnitureSum += price * furnitureRate * amount;
      appendObject(
        $furniture,
        '<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'
      );
      if (manufacturer === null) {
        appendObject(
          $("#materialsList .option-block .list-option-container").last(),
          `<span class=\'name\'>${name}</span><span class=\'list-text\'>${amount} ${dim} </span>`
        );
        return;
      }
      appendObject(
        $("#furnitureList .option-block .list-option-container").last(),
        `<span class=\'name\'>${name}, ${manufacturer}</span><span class=\'list-text amount\'>${amount} ${dim}</span><span class=\'list-text\'>${Formatter.formatCurrency(
          price * amount * table.getCell("T147").numeric()
        )} €</span>`
      );
    }
    appendObject(
      $("#materialsList"),
      '<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'
    );
    appendObject(
      $("#materialsList .list-option-container").last(),
      `<span class=\'name summary\'>Всього по будівельній частині:</span><span class=\'list-text summary work\'>${Formatter.formatCurrency(
        workSum
      )} €</span>`
    );
    let sum = 0;

    let $appliancesList = $("#appliancesList");
    let $appliancesListTotal = $("#appliancesListTotal");
    const appliancesTuple: number[] = [];

    if (appliances === "gorenje") {
      appliancesTuple.push(...[151, 8]);
    } else if (appliances === "bosch") {
      appliancesTuple.push(...[166, 9]);
    } else if (appliances === "smeg") {
      appliancesTuple.push(...[182, 8]);
    } else {
      appliancesTuple.push(...[151, 9]);
    }

    //let appliancesString: string = "";
    if (appliancesBoolTotal) {
      let appliancesListString: string = "";
      let appliancesListTotalString: string = "";

      for (let i = 0; i < appliancesTuple[1]; i++) {
        appliancesListString += `<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"><span class=\'name white\'>${table
          .getCell("F" + (appliancesTuple[0] + i))
          .value()} ${table
          .getCell("E" + (appliancesTuple[0] + i))
          .value()}</span><span class=\'list-text white\'>${Formatter.formatCurrency(
          table.getCell("D" + (appliancesTuple[0] + i)).numeric()
        )} €</span></div></div>`;

        appliancesListTotalString += `<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class=\'name\'>${table
          .getCell("F" + (appliancesTuple[0] + i))
          .value()} ${table
          .getCell("E" + (appliancesTuple[0] + i))
          .value()}</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${Formatter.formatCurrency(
          table.getCell("D" + (appliancesTuple[0] + i)).numeric()
        )} €</span></div></div>`;

        sum += table.getCell("D" + (appliancesTuple[0] + i)).numeric();
        sum += table.getCell("G33").numeric();
      }

      const g33 = table.getCell("G33").numeric();
      sum += g33;
      appliancesListTotalString += `<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class=\'name\'>Доставка техніки</span><span class=\'list-text amount\'></span><span class=\'list-text\'>${Formatter.formatCurrency(
        (appliancesTuple[1] * g33) / table.getCell("E5").numeric()
      )} €</span></div></div>`;

      appliancesListString += `<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances">span class=\'name white\'>Доставка техніки</span><span class=\'list-text white\'>${Formatter.formatCurrency(
        ((appliancesTuple[1] * g33) / table.getCell("E5").numeric()) * 0.9
      )} €</span></div></div>`;

      $appliancesListTotal.append(
        `<div class="division-block pricelist"></div><div class="list-option-container summary"></div><span class=\'name summary\'>Всього по техніці:</span><span class=\'list-text summary work\'>${Formatter.formatCurrency(
          sum
        )} €</span>`
      );
      $("#appliancesTotal").html(Formatter.formatCurrency(sum));

      $appliancesList.append(appliancesListString);
      $appliancesListTotal.append(appliancesListTotalString);
    } else {
      $("#appliancesListTotal").toggle(false);
    }

    function returnObject(line1: string, line2: string, line3: string) {
      return `<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"><span class=\'name\'>${line1}</span><span class=\'list-text amount\'>${line2}</span><span class=\'list-text\'>${line3}</span></div></div>`;
    }

    function appendObject(obj, text) {
      obj.append(text);
    }

    function getRightStyleLetter(style) {
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

      return styleLetter;
    }

    const kitchenPrice = table.getCell(`${styleLetter}118`).numeric();
    const kitchenMontage = table.getCell(`${styleLetter}119`).numeric();
    const kitchenDelivery = table.getCell(`${styleLetter}120`).numeric();
    const kitchenTotal = kitchenMontage + kitchenPrice + kitchenDelivery;

    $("#kitchenPrice").html(Formatter.formatCurrency(kitchenPrice) + " €");
    $("#kitchenMontage").html(Formatter.formatCurrency(kitchenMontage) + " €");
    $("#kitchenDelivery").html(
      Formatter.formatCurrency(kitchenDelivery) + " €"
    );
    $("#kitchenTotal").html(Formatter.formatCurrency(kitchenTotal) + " €");
    $("#kitchenTotalPrice").html(Formatter.formatCurrency(sum) + " €");
    if (furnitureBool) {
      furnitureSum = 0;
    }
    $("#kitchenTotalPriceDiscount").html(Formatter.formatCurrency(sum * 0.9));

    if (storage.get("summedPrice") < workSum) {
      $("#totalPriceTotal").html(Formatter.formatCurrency(workSum) + " € *");
    } else {
      $("#totalPriceTotal").html(
        Formatter.formatCurrency(storage.get("summedPrice"))
      );
    }
  });
