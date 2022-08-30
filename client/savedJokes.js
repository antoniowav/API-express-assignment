fetch("http://localhost:3000/jokes/saved").then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data);
            document.getElementById('savedJoke').innerHTML = data
        })