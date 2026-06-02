
var mongoose = require('mongoose'); // import mongoose module
mongoose.connect('mongodb://localhost:27017/12th_may_mern'); // conect mongodb

var express = require('express');
const app = express();
app.use(express.json());

// validation schema
/*
var emp_schema=mongoose.Schema({	
	name:{
		type: String,
		required: true},
	email:{
		type: String,
		unique: true,
		required: true},
	password:{
		type: String,
		required: true},
	mobile:{ 
		type: String,
		required: [true, "Mobile number is required"],
		match: [/^[0-9]{10}$/, "Enter valid 10 digit mobile number"]},
	dob:{ 
		type: Date,default: Date.now}
});
*/

var user_schema =new  mongoose.Schema({
	userId: {
		type: Number,
		required: [true, "UserId number is required"]
	},
	id: {
		type: Number,
		required: [true, "UserId number is required"]
	},
	title: {
		type: String,
		required: [true, "Title is required"]
	},
	body: {
		type: String,
		required: [true, "Body is required"]
	}
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
	let data = await user_model.find({ userId: 1 });
	resp.send(data);
})

// get data by id  http://localhost:5000/get_params/69f1826acefb9d39e7cc6a89
app.get("/get_params/:_id", async (req, resp) => {
	console.log(req.params)
	let data = await user_model.find({ _id: req.params });
	resp.send(data);
})

// search data by patern column  http://localhost:5000/get_search/raj
app.get("/get_search/:pattern", async (req, resp) => {
	//console.log(req.params.key);
	let data = await user_model.find({
		"$or": [
			{ title: { $regex: req.params.pattern, $options: "i" } },  //$option  for case incensitive
			{ body: { $regex: req.params.pattern, $options: "i" } }
		]
	});
	resp.send(data);
});


//================================================================================== 

// get data by id  http://localhost:5000/post_data
app.post("/post_data", async (req, resp) => {
    try {
        let data = new user_model(req.body);
        const result = await data.save();
        console.log(result);
        resp.status(201).send(result);

    } catch (error) {
        console.log(error);
        resp.status(500).send({
            message: error.message
        });
    }
});

app.delete("/delete_data/:_id", async (req, resp) => {
    try {
        let result = await user_model.deleteOne(req.params);
        console.log(result);
        resp.status(200).send(result);

    } catch (error) {
        console.log(error);
        resp.status(500).send({
            message: error.message
        });
    }
});

app.put("/update_data/:_id", async (req, resp) => {
    try {
        let result = await user_model.updateOne(req.params,
        {$set: req.body});
        console.log(result);
        resp.status(200).send(result);

    } catch (error) {
        console.log(error);
        resp.status(500).send({
            message: error.message
        });
    }
});

app.listen(5000);