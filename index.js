const express = require('express')
const {db} = require('./db')
const { user } = require('./user')
const app = express()
app.use(express.json())


app.get('/user1',async(req,res)=>{
    const data = await user.find({gender:"Female"})
    res.send(data)
})

app.get('/user2',async(req,res)=>{
    const data = await user.find({gender:"Female",language: {$in : ["Hindi","Kannada"]}})
    res.send(data)
})

app.get('/user3',async(req,res)=>{
    const data = await user.find({$or: [{ gender : "Male",language :"Hindi"},{gender:"Female",language:"Kannada"}]})
    res.send(data)
})

app.get('/user4',async(req,res)=>{
    const data = await user.find({shirt_size :"S"})
    res.send(data)
})

app.get('/user5',async(req,res)=>{
    const data = await user.find({gender :"Female",shirt_size:"XL"})
    res.send(data)
})

app.get('/user6',async(req,res)=>{
    const data = await user.find({$or : [{gender :"Male",language:"English"},{gender:"Female",language:"Hindi"}]})
    res.send(data)
})

app.get('/user7',async(req,res)=>{
    const data = await user.find({$or : [{gender :"Male",language:{$in :["English","Hindi"]}},{gender:"Female",language:{$in :["Kannada","German"]}}]})
    res.send(data)
})

app.get('/user8',async(req,res)=>{
    const data = await user.find({$or : [{gender:"Female",language:"Bengali",shirt_size:"XL"},{gender:"Male",language:"German",shirt_size:{$in : ['L','M']}}]})
    res.send(data)
})

app.get('/user9',async(req,res)=>{
    const data = await user.find({gender:"Female",language : {$in:["Hindi", "Punjabi", "Bengali", "Gujarati", "Tamil", "Malayalam"]}})
    res.send(data)
})

app.get('/user10',async(req,res)=>{
    const data = await user.find({gender:"Female",language :"Korean"})
    res.send(data)
})

app.listen(9705,()=>{
    console.log('port 9705');
    db()
})