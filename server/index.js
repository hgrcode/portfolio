
const express = require('express')
const app = express()
var port = 8080

app.use('/api', function (req, res) {
  res.send('api' + ' alive')
})

app.listen(port)