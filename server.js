import express from "express"

const app = express()
const port = 3000

app.listen(port, () => {
    console.log("App is running on port" + port)
})

app.get('/', (req, res) => {

    res.send('Hello! This is a test :)')

})

