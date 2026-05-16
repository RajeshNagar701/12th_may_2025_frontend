
/*
Node.js Mongoose is a MongoDB object modeling tool designed to work 
in an asynchronous environment.

Provide model & schema 

Schema: field control in mongoose 

With the help of Mongoose, we can model our data.
For example, consider that we are operating a store. Store has items. 
Each item could have properties : name, id, price, discount price, etc. 
With Mongoose we can model our items and do insertions or reads from 
the MongoDB Collection in terms of model objects, not bothering about 
the details of an object. Mongoose provides abstraction at Model level.

Exa : Note : ( if we have table & 3 columns then we add only 3 columns 
but sometimes by mistake we add extra columns like 4 or 5 columns 
& not proper data type in table by api then problem occurs. 
So for solution Mongoose prevent & provide model & schema for 
perfect column with perfect data type so provide validation)
we shall learn about the Mongoose package, how to install it, 
and different operations that are available with MongoDB.

// install
$ npm install mongoose

// import

var mongoose = require('mongoose');


*/

// connectivity

var mongoose = require('mongoose'); // import mongoose module
mongoose.connect('mongodb://localhost:27017/shop_db'); // conect mongodb

/*

create schema

Datatype of schema

String
Number
Date
Buffer
Boolean
Mixed
Union
ObjectId
Array
Decimal128
Map
Schema
UUID
BigInt
Double
Int32
*/

// validation schema
var emp_schema=mongoose.Schema({	
	name: string
	email:string
	password:string
	mobile:number
	dob:Date
});


// create model & apply schema on model
var emp_model = mongoose.model('emp_model', emp_schema, 'employees');



