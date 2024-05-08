const dbConnect = require('./mongodb')
const express = require('express')
const app = express();
app.use(express.json())
//get API

app.get('/',async(req,res)=>{
    let result=await dbConnect();
    result=await result.find().toArray();
    res.send(result);
})
  
//post API

app.post('/',async(req,res)=>{
    let result = await dbConnect();
    result = await result.insertOne(req.body);
    res.send("Data Inserted Successfully")
})

//put API

app.put('/:username',async(req,res)=>{
    let result = await dbConnect();
    result = await result.updateOne({name:req.params.name},{$set:req.body});
    res.send("Data updated successfully")
})

//Delete API

app.delete('/:email',async(req,res)=>{
    let result = await dbConnect();
    result = await result.deleteOne({name:req.params.name})
    res.send("Data deleted successfully");
})

app.listen(7171);