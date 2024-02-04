const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()
const port = 5000
app.use(cors())

 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api' , require('./routes/UserRouter'))
app.use('/api' , require('./routes/SocieteRoute'))
app.use('/api' , require('./routes/JobsRoute'))

mongoose.connect("mongodb+srv://bouya:bouya@cluster0.ocn6nng.mongodb.net/").then(()=> {
    console.log('connected to the database')
}).catch(()=> {
    console.log('connection failed')
})


app.listen(port , ()=> {
    console.log(`server is running at http://localhost:${port}`)
})

 

 
