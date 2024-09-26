var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://mohd_shinas:shinas@cluster0.iaiyb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(err)
});
