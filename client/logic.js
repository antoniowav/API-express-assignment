

fetch("http://localhost:3000/jokes").then((response) => {
            return response.json()
        }).then((data) => {
            let dataInLocal = data
            console.log(data.setup);
            console.log(data.delivery);
            document.getElementById('joke').innerHTML = dataInLocal.setup
            document.getElementById('answer').innerHTML = dataInLocal.delivery
            
        })
        
        
        function reload() {
            reload = location.reload();
}

/* function saveJoke() {

    
    console.log('Joke saved');
} */


const  saveJoke = async(event) => {
    try {

        const jokeToAdd = [{
            "name": "koko",
            "age": 22
        }]

        const response = await fetch("http://localhost:3000/jokes/saved", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jokeToAdd)
        })
        const body = await response.json()
        console.log(body)
    } catch(err) {

    }
}

document.getElementById('shuffle').addEventListener('click', reload)
document.getElementById('save').addEventListener('click', saveJoke)


