const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
const fitnesstracker= require('./schema.js')

const app = express();
app.use(express.json())
app.use(cors());
const port = process.env.PORT||8000

app.get('/item',(req,res)=>{
    res.status(200).json({message:'hello'})
})

app.post('/item', async(req,res)=>{
    try{
const {user,data ,duration, calories} = req.body
if(!user || !data || !duration || !calories)
    return res.status(404).json('fitness not reached')
return res.status(200).json({message:'hello'})
const fitnesstracker = new fitnesstracker({user,data,duration,calories})
 await fitnesstracker.save();


}catch(e){
    console.log(e)
}

})

 const db =  async()=>{
    try{
await mongoose.connect(process.env.mongodb)
  console.log('MongoDB Server Connected')}

catch(e){
  console.log(e)
}
 }
 db();

app.put("/fitnesstracker/:id", async(req,res) =>{
    try {
      const updatefitnesstracker = await fitnesstracker.findByIdAndUpdate(
        req.params.id, 
       req.body,
        { new: true }
      );
      if (!updatedfitnesstracker) 
        return res.status(400).json({ error: "fitnesstracker not found" });
      res.json(updatedItem);
    } catch (err) {
      res.status(400).json('error occured');
    }
  });
  
  app.delete("/fitnesstracker/:id", async(req,res) =>{
    try {
      const deletedfitnesstracker = await fitnesstracker.findByIdAndDelete(req.params.id);

      if (!deletedItem)
         return res.status(400).json({ error: "validation is failed:[field] is required" });
      res.json({ message: "workout not found" });
    } catch (error) {
      res.status(400).json('error some thing went wrong');
    }
  });

  app.listen(port,()=>{
       console.log(`Connected Successfully: http://localhost:${port}`);
  });








  
