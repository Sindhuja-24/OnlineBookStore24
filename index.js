const express = require('express')
const cors = require('cors')
const {MongoClient, ObjectId} = require('mongodb')

const app=express()

app.use(cors())
app.use(express.json())
const client =new MongoClient('mongodb+srv://admin:admin@cluster0.l3xwtm7.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db = client.db('counselling1')
const col = db.collection('register')
//col.insertOne({'student':"123"})

app.post('/register', (req, res)=>{
col.insertOne(req.body)
console.log(req.body)
res.send('Inserted successfully')
})

app.put('/users/:id', async (req,res)=>{ 
    const {id}= req.params 
    const {name, role, email, password}=req.body 
    const result= await col.updateOne({_id: new ObjectId(id)}, {$set:{name, role, email, password} }) 
    res.send('updated') 
})

app.delete('/users/:id', async(req,res)=>{
    const{id}=req.params
    const result=await col.deleteOne({_id: new ObjectId(id)})
    res.json({message: 'deleted successfully'})
});

app.post('/signin', async (req, res)=>{
    const {email, password } = req.body;
    console.log(email)
    const user = await col.findOne({email});
    //console.log(user.email, user.password, password)
    if(!user || !(password===user.password)){
        return res.status(401).json({ message: 'Invalid email or password'})
    }

    //const token = jwt.sign({ userId: user._id}, 'secretKey', {expi})

    res.json({ username: user.name });
});

app.get('/retrieve', async (req, res)=>{
    const result= await col.find().toArray()
    console.log(result)
    res.send(result)
})

app.get('/', (req,res)=>{
    res.send('<h1>Hello World</h1>')
})
app.get('/about', (req,res)=>{
    res.send('<h1>This is about page</h1>')
})
app.listen('8080', ()=>{
    console.log('Just check it')})