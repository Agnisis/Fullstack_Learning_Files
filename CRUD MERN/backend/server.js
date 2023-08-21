const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

//database server connection
mongoose.connect("mongodb://127.0.0.1:27017/DiseasePrediction");
console.log("db connected");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model("user", userSchema);

app.use(cors()); //middleware
app.use(bodyParser.json());
// app.get('/demo',(req,res)=>{
//      res.send('hello')
// });

//CRUD
app.post("/demo", async (req, res) => {
  let user = new User();
  user.username = req.body.username;
  user.password = req.body.password;

  const doc = await user.save();
  console.log(doc);
  res.json(doc);
});

app.get("/demo", async (req, res) => {
  const docs = await User.find({});
  res.json(docs);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
