// // window.addEventListener("load", ()=>{
// //     console.log("window loaded");
// // });

// // window.onload = ()=>{
// //     console.log("window onloaded");
// // }

// let myButton = document.getElementById("button");

// myButton.addEventListener("click", ()=>{
//     alert("my button in clicked!");
// });

// let mail = document.getElementById("email");
// mail.addEventListener("mouseover", ()=>{
//     mail.innerText = "Are you sure you want to send";
//     mail.style.color = "green";
// });

// mail.addEventListener("mouseout", ()=>{
//     mail.innerText = "Email Address";
//     mail.style.color = "black";
// });

// // code challenge:  Bubbling => property transfers from a child to its parents

// const randomNumber = () => Math.round(Math.random() * 255);
// const randomColor = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

// // child
// let password = document.getElementById("pass");

// password.addEventListener("click", ()=> {
//     password.style.backgroundColor = randomColor();
// });

// // Parent
// password.parentElement.addEventListener("click", ()=> {
//     password.parentElement.style.backgroundColor = randomColor();
// });

// // grandParent
// password.parentElement.parentElement.addEventListener("click", ()=> {
//     password.parentElement.parentElement.style.backgroundColor = randomColor();
// });



// // character limitation challenge:

// let comm = document.getElementById("comment");
// let charCount = document.getElementById("charCount");
// comm.addEventListener("keyup", ()=> {
//     charCount.innerText = comm.value.length + " / 40";
// });


// // Display birthday alert

// let yourbirthday = document.getElementById("date");
// yourbirthday.addEventListener("change", ()=> {
//     let year = new Date().getFullYear() - new Date(yourbirthday.value).getFullYear();
//     alert("Your are " + year + " years old.")
// });

