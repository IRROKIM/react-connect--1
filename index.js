const express = require('express')
const app = express()
const port = 8000

const mongoose = require('mongoose')
mongoose.connect('mongodb://irro:<7563>@cluster0-shard-00-00.hphhm.mongodb.net:27017,cluster0-shard-00-01.hphhm.mongodb.net:27017,cluster0-shard-00-02.hphhm.mongodb.net:27017/?ssl=true&replicaSet=atlas-k1szmx-shard-0&authSource=admin&retryWrites=true&w=majority'
 )
 .then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})