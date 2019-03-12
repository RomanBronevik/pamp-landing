let express = require('express')
let serveStatic = require('serve-static')
const path = require('path')
let app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))
let port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)
