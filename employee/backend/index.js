var express = require("express")
require("./connection")
var empModel = require("./model/employee")



//initialize
var app=express()


//middleware
app.use(express.json())


//api creation
app.get('trial',(req,res)=>{
res.send('trial message')
})

app.get('/',(req,res) =>{
    res.send('It is an employee app')
})


//add api
app.post("/add",async(req,res)=> {
    try{
        await empModel(req.body).save()
        res.send({message:"Data added"})
    } catch (error) {
        console.log(error)
    }

})
//api to view
app.get("/view",async (req,res)) => {
    try{

//update api
app.put("/edit/:id",async (req,res) =>{
    try{
        var data = await empModel.findByIdAndUpdate(req.params.id,req.body);
        res send ({message:'updated successfully',data}
    )catch (error){
        console.log(error)

    }}
    




//port
app.listen(3804,()=>{
 console.log("port is running")   
    
    
})
//delete api
app.delete("/remove/:id",async(req,res))
try{
    await empModel.findByIdAndDelete(req.paramas)
    res.send({message:"deleted successfully!!"})
} catch(error) {
    console.log(error)

}
    })

}