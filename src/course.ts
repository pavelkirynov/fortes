import { Cell } from "./models/Cell";
import { Table } from "./models/Table";
import { Row } from "./interfaces/Row";

$(function () {
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

      const responseRows: Array<Row> = response.table.rows;

      const table: Table = new Table(
        responseRows
          .map((row: Row, outerIndex: number) => {
            return row.c
              .map(function (cell, index: number): Cell {
                if (cell === null || cell.v === null) {
                  return;
                }

                return new Cell(
                  `${numberToEncodedLetter(index + 1)}${outerIndex + 1}`,
                  cell.v
                );
              })
              .filter((cell) => cell != null);
          })
          .reduce((pv, cv) => [...pv, ...cv])
      );

      $("#dollarCourse").html(table.getCell("C6").formattedNumerical);
    });

  function numberToEncodedLetter(number: number): string | undefined {
    if (isNaN(number)) {
      return undefined;
    }

    number = Math.abs(Math.floor(number));

    const dictionary: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let index = number % 26;
    let quotient = number / 26;
    let result: string;

    if (number <= 26) {
      return numToLetter(number);
    }

    if (quotient >= 1) {
      if (index === 0) {
        quotient--;
      }
      result = numberToEncodedLetter(quotient);
    }

    if (index === 0) {
      index = 26;
    }

    return result + numToLetter(index);

    function numToLetter(number: number): string | undefined {
      if (number > 26 || number < 0) {
        return undefined;
      }

      if (number === 0) {
        return "";
      } else {
        return dictionary.slice(number - 1, number);
      }
    }
  }
});
