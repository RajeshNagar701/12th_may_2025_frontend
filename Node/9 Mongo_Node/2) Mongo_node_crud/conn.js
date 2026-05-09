const {MongoClient} = require('mongodb')
const client= new MongoClient('mongodb://localhost:27017');

async function dbConnect()
{
    let result = await client.connect();
    db= result.db('12th_may_mern');
    return db.collection('users');
}
module.exports= dbConnect;
