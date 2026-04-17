/*
In Node.js Express, middleware functions act as the "plumbing" for web applications, 
intercepting and processing requests before they reach their final destination. 
They have access to the request object (req), the response object (res), 

and the next()


Types of Middleware

Application-level: Bound to the app object using app.use() or app.METHOD(). 
These run for every request to the application.

Router-level: Bound to an instance of express.Router(). 
These apply only to specific groups of routes.

*/
//Application-level middleware   // work on all routes 

var express=require('express');
var app=express();

// set middleware on all routes
const middleware =(req,resp,next)=>
{
	if (!req.query.age) {
        resp.send("Please provide your age")
    }
    else if (req.query.age<18) {
        resp.send("You are under aged")
    }
    else {
        next();  // true meanse aage jane do
    }
}

app.use(middleware); // middleware apply on whole app

app.get('/',(_,resp)=>{
	 resp.send("You are eligible for website Home page")
})
app.get('/about',(_,resp)=>{
	 resp.send("You are eligible for website About page")
})
app.get('/contact',(_,resp)=>{
	 resp.send("You are eligible for website contact page")
})


app.listen(3000);
