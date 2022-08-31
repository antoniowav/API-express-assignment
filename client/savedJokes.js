fetch("http://localhost:3000/jokes/saved")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    if (data.length === 0) {

      console.log("no jokes");
      document.getElementById("jokesContainer").innerHTML = "No jokes saved!";

    } else {

      let renderedHtml = data.map(function (item) {
        return `<div id="singleJoke"><h1>${item.setup}</h1> <h1>${item.delivery}</h1></div><br>`;

      });
      
      document.getElementById("jokesContainer").innerHTML =
        renderedHtml.join(" ");
    }
  });
