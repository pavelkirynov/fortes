import { Table } from "./models/Table";
import { Cell } from "./models/Cell";
import { ResponseRow } from "./interfaces/Row";
import { Utils } from "./utils/Utils";

fetch(
  "https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json"
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
                cell.v
              );
            })
            .filter((cell) => cell != null);
        })
        .reduce((pv, cv) => [...pv, ...cv])
    );

    console.log(
      JSON.stringify(table.cells.filter((cell) => cell.value === null))
    );
    console.log(table.getCell("I45").numeric());
    console.log(table.getCell("K45").numeric());
    console.log(table.getCell("M45").numeric());
    console.log(table.getCell("O45").numeric());
    console.log(table.getCell("Q45").numeric());
    let amountOfRooms = 2;
    let amountOfBathrooms = 1;
    let space = 50;
    let bath = true;
    let shower = false;
    const workInflation = table.getCell("S44").numeric();
    const s42 = table.getCell("S42").numeric();

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

    console.log(water);
    console.log(canalisation);
    console.log(vents);
    let letter = "I";

    console.log(
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
      ) + " грн."
    );

    console.log(Math.round(canalisation * s42) + " грн.");
    console.log(Math.round(vents * s42 * workInflation) + " грн.");
  });
