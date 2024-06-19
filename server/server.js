const express = require("express")
const app = express()
const port = 5000

app.get('/api', (req, res) => {
    res.json({message: "This is from the backend"})
})

app.listen(port, console.log(`listent to port ${port}`))