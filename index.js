const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

// Middleware for parsing POST form data
app.use(express.urlencoded({ extended: true }));

// Set views folder and view engine properly
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};

// Index route
app.get("/chats", async (req,res)=>{
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs",{chats});
});

// New Chat Form Route
app.get("/chats/new",(req,res)=>{
  res.render("new.ejs");
});

// Handle new chat form submission
app.post("/chats", async (req,res)=>{
  let { from, msg, to } = req.body;
  let newChat = new Chat({ from, msg, to });
  await newChat.save();
  res.redirect("/chats");
  console.log(newChat);
  res.send("Working");
});

app.get("/",(req,res)=>{
  res.send("Working Root");
});

app.listen(8080, () => {
  console.log("App is Listening on port 8080");
});
