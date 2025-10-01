const mongoose = require('mongoose');

main()
    .then(()=>{
        console.log("Connection Successful");
    })
    .catch((err)=>console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User = mongoose.model("User",userSchema);     //"User" is a connection name
const Employee = mongoose.model("Employee",userSchema);  
const user1 = new User({
    name:'Amogh',
    email:'amogh@gmail.com',
    age: 48,
});
const user2 = new User({
    name:'Adam',
    email:'adam@gmail.com',
    age: 48,
});
user1.save();
user2.save().then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});