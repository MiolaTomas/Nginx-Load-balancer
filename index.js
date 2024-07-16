const express = require('express')
const os = require('os')

const app = express()

app.use('/', async (req, res) =>{
  console.log(os.hostname())
  res.json({message: 'Working...', hostame: os.hostname()})
})

app.listen(3000, ()=>{
  console.log('Server listening on port 3000')
})