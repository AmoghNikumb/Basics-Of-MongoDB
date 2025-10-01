const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
    return Chat.insertMany(allChats);
  })
  .then(() => {
    console.log("Chats inserted successfully!");
  })
  .catch(err => console.log(err))
  .finally(() => {
    mongoose.connection.close();
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Neha",
    to: "Adam",
    message: "Send me the PY Questions",
    created_at: new Date()
  },
  {
    from: "Amogh",
    to: "Varad",
    message: "When is the meeting today?",
    created_at: new Date()
  },
  {
    from: "Prathmesh",
    to: "Avani",
    message: "I miss You...Can We Meet?",
    created_at: new Date()
  },
  {
    from: "Rohit",
    to: "Mohit",
    message: "Teach Me Javascript Today!",
    created_at: new Date()
  }
];
