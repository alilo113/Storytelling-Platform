const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose")
const user = require("./models/userSchema")
const cors = require("cors")

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/usersDb", )
.then(() => console.log("Database connected"))
.catch((Error) => console.log({message: Error}))

app.post("/api/users", async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const newUser = new user({userName: username, Password: password, email: email });
        console.log(newUser);
        const saveUser = await newUser.save();
    } catch (error) {
        res.json({Message: error})
    }
})

app.post("/log-in", async (req, res) => {
    try {
        const {username, password} = req.body
        const existUser = await user.findOne({userName: username, Password: password});

        if(!existUser){
            res.status(401).send("Invalid username or password")
        }else{
            res.status(200).send("log in successfuly")
        }
    }catch (error){
        console.log(error)
    }
})

app.listen(port, console.log(`listent to port ${port}`))