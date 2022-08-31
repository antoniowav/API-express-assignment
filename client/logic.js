fetch("http://localhost:3000/jokes")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let dataInLocal = data;
    console.log(data.setup);
    console.log(data.delivery);
    document.getElementById("joke").innerHTML = dataInLocal.setup;
    document.getElementById("answer").innerHTML = dataInLocal.delivery;

    document.getElementById("save").addEventListener("click", () => {
      saveJoke(dataInLocal), reload();
    });
  });

function reload() {
  reload = location.reload();
}

async function makeRequest(url, method, body) {
  try {
    let response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    let result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
}

const saveJoke = async (joke) => {

  let url = "http://localhost:3000/jokes/saved";
  let method = "POST";
  let body = JSON.stringify(joke);
  let result = await makeRequest(url, method, body);
  console.log(result);

};

document.getElementById("shuffle").addEventListener("click", reload);
