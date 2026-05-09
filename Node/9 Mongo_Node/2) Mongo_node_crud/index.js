
const dbConnect= require('./conn');


// SELECT ALL USER COLLECTION DATA

/*
const getdata=async ()=>{
   let data = await dbConnect();
   let result = await data.find({}).toArray();
   console.log(result)
}
getdata();
*/


// SELECT SINGLE COLLECTION DATA

/*
const singledata=async ()=>{
   let data = await dbConnect();
   let result = await data.find({'id':100}).toArray();
   console.log(result)
}
singledata();
*/



// insert COLLECTION DATA
/*
const insertdata=async ()=>{
   let data = await dbConnect();
   let result = await data.insertMany([
          {userId:11,id:101,title:"data 1",body:'1at nam consequatur ea labore ea harum'},
          {userId:11,id:102,title:"data 2",body:'2at nam consequatur ea labore ea harum'},
          {userId:11,id:103,title:"data 3",body:'3at nam consequatur ea labore ea harum'}
      ]
	);
	if(result)
	{
		console.log('data inserted success');
	}
}
insertdata();
*/
/*
const updateData=async ()=>{
    let data = await dbConnect();
    let result = await data.updateMany(
        { userId:11},
        {
            $set:{title:'New Title'}
        }
      )
	if(result)
	{
		console.warn("data is Updated")
	}
}
updateData();
*/

/*
const deleteData=async ()=>{
	let data = await dbConnect();
	let result = await data.deleteMany({userId:11});
	if(result)
	{
		console.warn("data is Deleted")
	}
}
deleteData();
*/ 
