

const dbConnect=require('./conn'); // mongo db conn file import

const express=require('express');
const app=express();

app.use(express.json()); //The express.json() function is a built-in middleware in Express that is used for parsing incoming requests with JSON payload. 

// get all data  http://localhost:5000/getdata
app.get('/getdata', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.find().toArray();
    resp.send(data);
});


// get single or particular column data 
app.get('/getsingle1', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.find({id:1}).toArray();
    resp.send(data);
});

// get single or particular column data by url argument
//http://localhost:5000/getsingle2?name=akash%20nagar

app.get('/getsingle2', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.find(req.query).toArray();
	console.log(req.query);
    resp.send(data);
});


// get particular column data by postman body argument
//http://localhost:5000/getsingle3

app.get('/getsingle3', async (req, resp) => {
    let conn = await dbConnect();
    data = await conn.find(req.body).toArray();
	console.log(req.query);
    resp.send(data);
});


//=======================================================================================



// data insert static   http://localhost:5000/postdata1
app.get("/postdata1", async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insertOne({id: 10,name:'10pate2',email:'10pate2@gmail.com',pass:'71234'})
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

app.put("/putdata", async (req, resp) => {
    const data = await dbConnect();
    let result = data.updateOne(
        { id: req.body.id },// UPDATE FROM column name
        { $set: req.body }
    )
    resp.send({ status: "updated" })
})


// update by postman body & parameter from url  
// http://localhost:5000/putdatap?id=10
app.put("/putdatap", async (req, resp) => {
    const data = await dbConnect();
	console.log(req.params);
    let result = data.updateOne(
        { id: req.query.id },// or id: req.params.id UPDATE FROM column name UPDATE FROM column name
        { $set: req.body }
    )
    resp.send({ status: "updated" })
})



app.listen(5000);