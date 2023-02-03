// // Asyncronous Programming 
// // console.log ('» index.js is running');

// // let id = setTimeout( () =>  {
// //     console. log('» async programming is amazing');
// // }, 2000);
// // console.log(id);
// // clearTimeout(id); // cancel the previous timeout function

// // let id2 = setTimeout(() => {
// // console. log ('»22 async programming is amazing');
// // }, 2000);
// // console. log (id2);

// // Example ----------------------------------------------------------------
// // const slowTask = () => {
// //     let i = 0;
// //     let result = { firstName: 'John', lastName: 'Doe' };
// //     do {
// //         i++;       // some Long operation
// //     } while (i < 2_000_000_000);
// //     return result;
// // };

// // console.log ('» ...1'); 
// // console.log ('» ...2'); 

// // setTimeout(() => {
// //     let res = slowTask();
// //     console. log (res);
// // });

// // console.log('» ...3');
// // console. log("» ...4");
// // ------------------------------------------------------------------------------

// // Console Time Methods
// // console.time(">> >>  value: ");
// // console.log("Hello");
// // console.timeLog(">> >> new value: ");


// // setTimeout Example -----------------------------------------------------
// // setTimeout(() => {    // Nested callback functions
// //     console.log("John: Hi");
// //     setTimeout(() => {
// //         console.warn("Sarah: Hello");
// //         setTimeout(() => {
// //             console.log("John: How are you doing?");
// //             setTimeout(() => {
// //                 console.warn("Sarah: Fine, What about you?");
// //             }, 1000);
// //         }, 1000);
// //     }, 1000);
// // }, 1000); 
// // --------------------------------------------------------------------------


// //  SetInterval  --------------------------------------------------------------
// // function hello() {
// //     console.log("Hello world");
// // }

// // setInterval(hello, 2000);

// // SetInterval Example ------------------------------------------------------
// // let count = 0; 
// // let interval = setInterval(function() {
// //     count +=1;
// //     if (count === 5) {
// //         clearInterval(interval);
// //     }
// //     let dateTime = new Date();
// //     let time = dateTime.toLocaleTimeString();
// //     console.log(time);
// // }, 2000);

// // Promises ------------------------------------------------------------------------------

// // const promise = new Promise((resolve, reject) => {
// //     // some calculations
// //     const data = "some results";
// //     const success = true;
// //     if (success) {
// //         resolve(data);
// //     }
// //     reject(new Error("an error occurred"));
// // })


// // Promise Example  -----------------------
// // const promise = new Promise((resolve, reject) => {
// //     // some calculations
// //     wait(2000);
// //     const userData = {
// //         firstName: "Alperen",
// //         birthYear: 2021,
// //     };
// //     let successful = Math.floor(Math.random() * 2);
// //     if (successful) resolve(userData);
// //     reject(new Error("an error occurred"));
// // });

// // promise.then(                      // this is one way of using promise.then()
// //     (result) => {
// //         console.log(result);
// //     },
// //     (error) => {
// //         console.log(error);
// //     }
// // );

// // promise                                   // this way is better to use "promise.then".           // this method is called promise chain
// //     .then((result) => {
// //         console.log(result);
// //     })
// //     .catch((error) => {
// //         console.log(error);
// //     });


// // Async Await ----------------------------------------------------------------

// // const prom = new Promise ((resolve, reject) => {
// //     wait (2000);
// //     // console. log ('Promise is created');
// //     resolve ('Promise is resolved');
// // });

// // const func1 = async () =>  {
// //     wait(2000);
// //     return 'Async function is resolved';
// // }

// // async function func2() {            //  when we add the word "async" in the beginning of the function, it becomes a promise.
// //     wait(1000);
// //     return 'bla bla';
// // }

// // console.log ('prom instanceof Promise :>> ' , prom instanceof Promise);
// // console. log ('func1 instanceof Promise :>>  ', func1() instanceof Promise);
// // console. log ('func2 instanceof Promise :>> ' , func2() instanceof Promise);


// // FETCH  ------------------------------------------------------------------------------------

// // const url = 'https: // jsonplaceholder.typicode.com/users/8';

// // fetch(url)
// //     .then ((response) =>  {
// //     // console. log (response);
// //     return response. json();
// //     });
// //     then ((data) => {
// //     console. log (data);
// //     });


// // Fetch Example
// // const url = 'https: // jsonplaceholder.typicode.com/users/8';

// // function usingFetch (url) {
// //     fetch(url)
// //         .then ((res) => {
// //             console.log (res);
// //             if (res.status !== 200) {
// //                 throw new Error ('Something went wrong!');
// //             }
// //             res.json();
// //         })
// //         .then ((data) => { 
// //             // console. Log('user »', data);
// //         })
// //         .catch((err) => console.error('ERROR >>', err));
// // }

// // usingFetch(url);


// // Fetch with JSON

// // fetch( 'https: //restcountries.com/V3.1/name/Turkey')
// //     .then ((response) => { 
// //         console.log (response);
// //         return response. json();
// //     })
// //     .then ((data) => { 
// //         console. log (data);
// //         console. log (data[0].capital, data[0].name. common);
// //     });

// // const getCountry = async (countryName) => {
// //     const response = await fetch(`https: //restcountries.com/V3.1/name/${countryName}`);
// //     const data = await response.json();
// //     console.log(data);
// //     console.log(data[0].capital, data[0].name.common);
// // };

// // getCountry('Turkey');

// (async () => {
//     console.log('» index.js is running');
  
//     function wait(ms) {
//       const start = new Date().getTime();
//       let end = start;
//       while (end < start + ms) {
//         end = new Date().getTime();
//       }
//     }
  
//     // *=====================================================
//     // *                   PROMISES
//     // *=====================================================
  
//     const promise = new Promise((resolve, reject) => {
//       // some calculation
//       wait(2000);
//       const userData = {
//         firstName: 'Barry',
//         birthYear: 1977,
//       };
//       /* let successful = Math.floor(Math.random() * 2);
//     if (successful)  */
//       resolve(userData);
//       reject(new Error('Something went wrong!'));
//     });
  
//     // promise.then(
//     //   (result) => {
//     //     console.log(result);
//     //   },
//     //   (error) => {
//     //     console.log(error);
//     //   }
//     // );
  
//     /* promise
//     .then((res) => {
//       console.log(res);
//       return 'selam';
//     })
//     .then((r) => {
//       console.log(r);
//     })
//     .catch((error) => {
//       console.log(error);
//     }); */
  
//     const cayDemle = () => {
//       // suyuKaynat(); ->  cayEkle(); ->  bekle(); ->  afiyet();
//       suyuKaynat()
//         .then((durum1) => {
//           console.log(durum1);
//           return cayEkle();
//         })
//         .then((durum2) => {
//           console.log(durum2);
//           bekle(1500);
//           return afiyet();
//         })
//         .then((durum3) => {
//           console.log(durum3);
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     };
  
//     const suyuKaynat = () => {
//       return new Promise((resolve, reject) => {
//         const nasip = Math.floor(Math.random() * 5);
//         if (nasip) {
//           bekle(2000);
//           resolve('✅ Su kaynadi');
//         }
//         reject(new Error('❌ Kettle arizali'));
//       });
//     };
  
//     const cayEkle = () => {
//       return new Promise((resolve, reject) => {
//         const cayNasibi = Math.floor(Math.random() * 10);
//         if (cayNasibi) {
//           bekle(500);
//           resolve('✅ Cay eklendi.');
//         }
//         reject('❌ Cay bitmis');
//       });
//     };
  
//     const bekle = (ms) => {
//       const start = new Date().getTime();
//       while (new Date().getTime() < start + ms);
//     };
  
//     const afiyet = (m) => {
//       return '🫖 Cay hazir afiyet olsun';
//     };
  
//     // cayDemle();
  
//     // *=====================================================
//     // *                   ASYNC AWAIT
//     // *=====================================================
  
//     const prom = new Promise((resolve, reject) => {
//       // console.log('Promise is created');
//       resolve('Promise is resolved');
//     });
  
//     const func1 = async () => {
//       return 'Async function is resolved';
//     };
  
//     async function func2() {
//       wait(1000);
//       return 'bla bla';
//     }
  
//     // console.log('prom instanceof Promise :>> ', prom instanceof Promise);
//     // console.log('func1() instanceof Promise :>> ', func1() instanceof Promise);
  
//     // console.log(func2());
  
//     // async function func3() {
//     //   wait();
//     //   throw new Error('something went wrong');
//     //   // return Promise.reject(new Error('errror'));
//     // }
  
//     // func3();
  
//     const cayDemle2 = async () => {
//       try {
//         const durum1 = await suyuKaynat();
//         const durum2 = await cayEkle();
//         bekle(1500);
//         const durum3 = await afiyet();
//         console.log(durum1);
//         console.log(durum2);
//         console.log(durum3);
//       } catch (error) {
//         console.error(error);
//       }
//     };
  
//     // cayDemle2();
  
//     // *-----------------------------------------------------
//     // *                       FETCH
//     // *-----------------------------------------------------
  
//     /*
//   GET https://jsonplaceholder.typicode.com/users/8
//   */
  
//     /* fetch(url)
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
//   */
  
//     const url = 'https://jsonplaceholder.typicode.com/users/8';
  
//     function usingFetch(url) {
//       fetch(url)
//         .then((res) => {
//           console.log(res);
//           if (res.status !== 200) {
//             throw new Error('Something went wrong!');
//           }
//           res.json();
//         })
//         .then((data) => {
//           // console.log('user »', data);
//           return data;
//         })
//         .catch((err) => console.error('ERROR »', err));
//     }
  
//     // usingFetch(url);
  
//     async function usingAsyncFetch(url) {
//       try {
//         // ...
//         const res = await fetch(url);
//         if (!res.ok) {
//           throw new Error('Somethin wrong!');
//         }
//         const userData = await res.json();
//         // console.log('user data -> ', userData);
//         for (const [key, value] of Object.entries(userData)) {
//           console.log(key, ' ::=> ', value);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     }
  
//     // usingAsyncFetch(url);
  
//     async function usingAsyncFetch2(url) {
//       try {
//         const res = await fetch(url);
//         if (!res.ok) {
//           throw new Error('Somethin wrong!');
//         }
//         return await res.json();
//       } catch (err) {
//         console.error(err);
//       }
//     }
  
//     usingAsyncFetch2(url).then((d) => {
//       console.log(d);
//     });
//     // console.log(usingFetch2(url));
//     // console.log(usingAsyncFetch2(url));
//     const f1 = async () => {
//       const sonuc = await usingAsyncFetch2(url);
//       console.log(sonuc);
//     };
  
//     f1();
  
//     const sonuc = await usingAsyncFetch2(url);
//     console.log(sonuc);
  
//     // -----------
//     // tüm dosya
//     const url2 = 'https://jsonplaceholder.typicode.com/todos';
//     const todoList = await usingAsyncFetch2(url2);
//     // console.log(todoList);
//     todoList.forEach((todoItem) => {
//       console.log(`${todoItem.id} \n${todoItem.title} \n${todoItem.completed}`);
//     });
//   });