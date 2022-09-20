fetch(
  "https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json"
)
  .then((res) => res.text())
  .then((text) => {
    let json = JSON.parse(text.substr(47).slice(0, -2));
    function parseData(args) {
      let col = +alphabetPosition(args.slice(0, 1)) - 1,
        row = +args.slice(1) - 2;

      function alphabetPosition(text) {
        var result = "";
        for (var i = 0; i < text.length; i++) {
          var code = text.toUpperCase().charCodeAt(i);
          if (code > 64 && code < 91) result += code - 64 + " ";
        }

        return result.slice(0, result.length - 1);
      }
      if (json.table.rows[row].c[col] !== null) {
        return json.table.rows[row].c[col].v;
      } else return "";
    }

    const hrnCourse = parseFloat(parseData("G7").replace(",", "."));
    $("#dollarCourse").html(hrnCourse.toFixed(2).toString().replace(".", ","));
  });
