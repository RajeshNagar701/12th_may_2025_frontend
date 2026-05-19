
var mongoose = require('mongoose'); // import mongoose module
mongoose.connect('mongodb://localhost:27017/12th_may_mern'); // conect mongodb

var express=require('express');
const app=express();
app.use(express.json());

// validation schema
var user_schema=mongoose.Schema({	
	userId: Number,
	id:Number,
	title:String,
	body:String
});

// create model & apply schema on model
var user_model = mongoose.model('users', user_schema);

// get all data
app.get("/get_users", async (req, resp) => {
	let result = await user_model.find()
    resp.send(result);
});

// get data by column
app.get("/get_colum", async (req, resp) => {
    let data = await user_model.find({userId:1});
    resp.send(data);
})

// get data by id  http://localhost:5000/get_params/69f1826acefb9d39e7cc6a89
app.get("/get_params/:_id", async (req, resp) => {
	console.log(req.params)
    let data = await user_model.find({_id:req.params});
    resp.send(data);
})

// search data by patern column  http://localhost:5000/get_search/raj
app.get("/get_search/:pattern", async (req, resp) => {	
	//console.log(req.params.key);
	let data = await user_model.find({
		"$or":[
                {title:{$regex:req.params.pattern,$options: "i" }},  //$option  for case incensitive
				{body:{$regex:req.params.pattern,$options: "i" }}
              ]
	});
    resp.send(data);
});

app.listen(5000);