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
  });
