
const dbConnect=require('./MongoConn');
const express=require('express');
const app=express();

app.use(express.json());

// get all data  http://localhost:5000/getdata
app.get('/getdata', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.find({}).toArray();
    resp.send(data);
	console.log(data);
});

//http://localhost:5000/getsingle

// get single or particular column data 
app.get('/getsingle1', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.find({id:1}).toArray();
    resp.send(data);
});

//http://localhost:5000/getsingle2?name=raj nagar
// get single or particular column data
app.get('/getsingle2', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.find(req.query).toArray();
	console.log(req.query);
    resp.send(data);
});

app.get('/getsingle3', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.find(req.body).toArray();
	console.log(req.body);
    resp.send(data);
});


//=========================================================================

// data insert static   http://localhost:5000/postdata1
app.get("/postdata1", async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insertOne({id: 1,name:'pinal',email:'pinal@gmail.com',password:'71234'})
    resp.send({result:"Static Data Inserted Success"});
})


// data insert dynamic http://localhost:5000/postdata2  add data in body

app.post("/postdata2", async (req, resp) => {
	let data = await dbConnect();
    let result = await data.insertOne(req.body)
	console.log(req.body);
    resp.send({result:"Postman Data Inserted Success"});
})

// update by postman body   http://localhost:5000/putdata  add data in body

//==================================================================================

app.put("/putdata", async (req, resp) => {
    const data = await dbConnect();
    let result = data.updateOne({id:req.body.id},{ $set: req.body })
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

//delete data static
// http://localhost:5000/deletedata1
app.delete("/deletedata1", async (req, resp) => {
    let data = await dbConnect();
	let result = await data.deleteOne({id:5})
    resp.send({ status: "data deleted" })
})


//delete data by body
// http://localhost:5000/deletedata2
app.delete("/deletedata2", async (req, resp) => {
    let data = await dbConnect();
	let result = await data.deleteMany(req.body)
    resp.send({ status: "data deleted" })
})

//delete data by parameter
// http://localhost:5000/deletedata3?id=5
app.delete("/deletedata3", async (req, resp) => {
    let data = await dbConnect();
	let result = await data.delete({name:req.query})
	console.log(req.query);
    resp.send({ status: "data deleted" })
})

app.listen(5000);
