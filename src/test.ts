fetch(
  "https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json?&range=A1:AJ217"
)
  .then((res: Response) => res.text())
  .then((text: string) => {
    const response = JSON.parse(
      text
        .substring(text.length - 2, 0)
        .replace(`/*O_o*/\ngoogle.visualization.Query.setResponse(`, "")
    );
  });
