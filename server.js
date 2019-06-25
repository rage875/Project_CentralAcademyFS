const express = require('express')
const app = express()
const port = parseInt(process.argv[2])

if((0 <= port) && (port < 65536)){
    app.use(express.static("public"))
    app.listen(port)
}
else{
    console.log(`Invalid port number: ${port}`);
}