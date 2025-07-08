// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(["next moving....", "Hello world"]);
//   }, 3000);
// });

// myPromise
//   .then(([m1, m2]) => {
//     console.log(m1);
//     console.log(m2);
//     console.log("both promises are in fulflled state");
    
//   })
//   .catch((err) => console.log(err));

  const mypromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Hello world get placement");
    }, 4000);
  })
  const mypromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello world get placement 2");
    }, 4000);
  });

  const mypromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello world get placement 3");
    }, 4000);
  });

  const mypromise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello world get placement 4");
    }, 4000);
  });

  mypromise.then(()=>console.log("Hello world")
  ).catch((err)=>console.log(err))

