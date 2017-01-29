var express=require("express");
var path=require("path")
var app = express()
const MonthChoice=['January','February','Month','April','May','June','July','August','September','October','November','December']
app.use('/assets',express.static('assets'))


app.get('/:parsed', function (req, res) {
  
  if (isNaN(req.params.parsed)) {
    const time=new Date(req.params.parsed)
    if (typeof time=='number') {
      res.json({
        unix: time/1000,
        natural:MonthChoice[time.getMonth()]+' '+time.getDate()+', '+time.getFullYear()
    })
    } else {
      res.json({
        unix: null,
        time: null
      })
    }
  } else {
    const d = new Date(req.params.parsed*1000)
    res.json({
      unix: req.params.parsed,
      natural: MonthChoice[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear()
    })
  }
  console.log(req.url)
})

app.get('/',function(req,res) {
    console.log(req.url)
    res.sendFile(path.join(__dirname+'/index.html'))
    
})



app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})