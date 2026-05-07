
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
   let result = await data.find({'phone': '9000054321'}).toArray();
   console.log(result)
}
singledata();
*/



// insert COLLECTION DATA
/*
const insertdata=async ()=>{
   let data = await dbConnect();
   let result = await data.insertMany([
          {First_Name:'akash',Last_Name:"nagar",Date_Of_Birth:"1995-01-01",e_mail:'akash@gmail.com',phone:'1234'},
          {First_Name:'patel',Last_Name:"nirav",Date_Of_Birth:"1995-01-01",e_mail:'patel@gmail.com',phone:'1234'},
          {First_Name:'mihir',Last_Name:"patel",Date_Of_Birth:"1995-01-01",e_mail:'mihir@gmail.com',phone:'1234'}
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
        { First_Name:'patidar'},
        {
            $set:{First_Name:'patidar', e_mail:'patidar@gmail.com'}
        }
      )
	if(result)
	{
		console.warn("data is Updated")
	}
}
updateData();
*/


const deleteData=async ()=>{
	let data = await dbConnect();
	let result = await data.deleteMany({First_Name:'mihir'});
	if(result)
	{
		console.warn("data is Deleted")
	}
}
 
deleteData();

