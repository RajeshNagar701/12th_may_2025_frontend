


/*

A Promise contains both the producing code and calls to the consuming code:


let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});


myPromise.then(
  function(value) { code if successful },
  function(error) { code if some error  }
);


*/



let a=20;
let b=0;


let waitingData= new Promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve(30);
   },2000)
})

waitingData.then((result)=>{
   b=result;
   console.log(a+b)
})