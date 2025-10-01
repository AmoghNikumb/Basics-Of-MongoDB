const mongoose = require('mongoose');

main()
    .then(()=>{
        console.log("Connection Successful");
    })
    .catch((err)=>console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required : true,
    },
    author:{
        type:String,
        required : true,
    },
    price:{
        type:Number,
    },        
});
const Book = mongoose.model("Book",bookSchema);
let book1 = new Book({
    title:'Mathematics XII',
    author:'R.D. Sharma',
    price:1200
});
book1.save().then(res =>{
    console.log(res);
}).catch(err =>{
    console.log(err);
});
let book2 = new Book({
    title:'Physics XII',
    author:'H.C.Verma',
    price:1000
});
book2.save().then(res =>{
    console.log(res);
}).catch(err =>{
    console.log(err);
});