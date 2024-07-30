
const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware
app.use(express.static('./files'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './files/index.html'))
// })
//no use of this if index is in files folder 
//middleware will handle 

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
