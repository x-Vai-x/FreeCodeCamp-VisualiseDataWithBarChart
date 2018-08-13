const express=require('express')
const path=require('path')
const app=express()
const {XMLHttpRequest} = require("xmlhttprequest")

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname))

app.get('/',function(req,res){
	res.render('index')
})


app.listen(8080, function() {
	console.log("Listening on port 8080")
})