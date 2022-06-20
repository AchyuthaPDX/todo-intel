const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
const db ="mongodb+srv://achyutha:achyutha@todointel.f2usln9.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(db, ({useNewUrlParser:true}))
.then(console.log("connected to MongoDB"))
.catch(err=> console.log(err))

const addlistSchema = new mongoose.Schema({
    title: String,
    complete:{
        type:Boolean, 
        default:false
    }

})
const Addlist= mongoose.model('addlist', addlistSchema)

app.get("/addlists", (req,res)=>{
    Addlist.find().then(addlist => res.json(addlist))
})

app.post("/addlists", (req, res)=>{
    const newAddlist = new Addlist({
        title:req.body.title
    })
    newAddlist.save().then(addlist=>res.json(addlist))
})
app.delete("/addlists/:id", (req, res)=>{
    Addlist.findByIdAndDelete(req.params.id)
    .then(()=> res.json({remove:true}))
})

app.listen(5000, ()=>{
    console.log("Server is running at Port 5000")
})