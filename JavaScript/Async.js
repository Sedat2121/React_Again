// Asyncronous Programming 
console.log ('» index.js is running');

let id = setTimeout( () =>  {
    console. log('» async programming is amazing');
}, 2000);
console.log(id);
clearTimeout(id); // cancel the previous timeout function

let id2 = setTimeout(() => {
console. log ('»22 async programming is amazing');
}, 2000);
console. log (id2);
