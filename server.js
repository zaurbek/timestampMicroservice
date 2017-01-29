var express=require("express");
var bodyParser=require("body-parser")
var path=require("path")
var app = express()

app.use('/assets',express.static('assets'))
app.get('/:time', function (req, res) {
  res.send((+ new Date()).toString())
  console.log(req.url)
})
app.get('/',function(req,res) {
    console.log(req.url)
    res.sendFile(path.join(__dirname+'/index.html'))
    
})



app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})