// Asyncronous Programming 
// console.log ('» index.js is running');

// let id = setTimeout( () =>  {
//     console. log('» async programming is amazing');
// }, 2000);
// console.log(id);
// clearTimeout(id); // cancel the previous timeout function

// let id2 = setTimeout(() => {
// console. log ('»22 async programming is amazing');
// }, 2000);
// console. log (id2);

// Example ----------------------------------------------------------------
// const slowTask = () => {
//     let i = 0;
//     let result = { firstName: 'John', lastName: 'Doe' };
//     do {
//         i++;       // some Long operation
//     } while (i < 2_000_000_000);
//     return result;
// };

// console.log ('» ...1'); 
// console.log ('» ...2'); 

// setTimeout(() => {
//     let res = slowTask();
//     console. log (res);
// });

// console.log('» ...3');
// console. log("» ...4");
// ------------------------------------------------------------------------------

// Console Time Methods
// console.time(">> >>  value: ");
// console.log("Hello");
// console.timeLog(">> >> new value: ");


// setTimeout Example -----------------------------------------------------
setTimeout(() => {
    console.log("John: Hi");
    setTimeout(() => {
        console.log("Sarah: Hello");
        setTimeout(() => {
            console.log("John: How are you doing?");
            setTimeout(() => {
                console.log("Sarah: Fine, What about you?");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000); 
// --------------------------------------------------------------------------

