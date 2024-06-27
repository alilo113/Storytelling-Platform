const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const User = require("./models/userSchema");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const dotenv = require('dotenv');

dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/usersDb")
  .then(() => console.log("Database connected"))
  .catch((error) => console.log({ message: error }));

// Middleware to authenticate token
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded._id });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).send('Please authenticate');
  }
};

app.post("/api/users", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ userName: username, password, email });
    await newUser.save();
    res.status(201).send("User created");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/log-in", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ userName: username });

    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).send("Invalid username or password");
    }

    const token = user.generateAuthToken();
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/profile', auth, (req, res) => {
  res.json({ username: req.user.userName, email: req.user.email });
});

app.listen(port, () => console.log(`Listening to port ${port}`));