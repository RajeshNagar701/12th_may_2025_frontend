
const dbConnect=require('./MongoConn');
const express=require('express');
const app=express();

const cors = require("cors");  // add for real production  To enable Cross-Origin Resource Sharing (CORS) in a Node.js Express application, the standard and most reliable method is to use the cors middleware.
app.use(cors());
app.use(express.json());

const { ObjectId } = require("mongodb");

// get all data  http://localhost:5000/getdata
app.get('/getdata', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.find({}).toArray();
    resp.send(data);
	console.log(data);
});

//http://localhost:5000/getsingle

//http://localhost:5000/getsingle2/ your id
// get single or particular column data
/*
app.get('/getsingle/:_id', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.findOne({_id:new ObjectId(req.params._id)});
    console.log(data);
    resp.send(data);
});
*/


//=========================================================================


// data insert dynamic http://localhost:5000/postdata2  add data in body

app.post("/postdata", async (req, resp) => {
	let data = await dbConnect();
    let result = await data.insertOne(req.body)
	console.log(req.body);
    resp.send({result:"Postman Data Inserted Success"});
})

// update by postman body   http://localhost:5000/putdata  add data in body



//==================================================================================

app.put("/putdata/:_id", async (req, resp) => {
    const data = await dbConnect();
    let body=req.body;
    delete body._id;
    let result = data.updateOne({_id:new ObjectId(req.params._id)},{ $set: req.body })
    resp.send({ status: "updated" })
})


// update by postman body & parameter from url  
// http://localhost:5000/putdatap?id=10
app.patch("/patchdatapara", async (req, resp) => {
    const data = await dbConnect();
	console.log(req.query);
    let result = data.updateMany(
        { id: req.body.id },// or id: req.params.id UPDATE FROM column name UPDATE FROM column name
        { $set: req.body }
    )
    resp.send({ status: "multiple updated by parameter" })
})


//==========================================================



app.listen(5000);
