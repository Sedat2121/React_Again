// window.addEventListener("load", ()=>{
//     console.log("window loaded");
// });

// window.onload = ()=>{
//     console.log("window onloaded");
// }

let myButton = document.getElementById("button");

myButton.addEventListener("click", ()=>{
    alert("my button in clicked!");
});

let mail = document.getElementById("email");
mail.addEventListener("mouseover", ()=>{
    mail.innerText = "Are you sure you want to send";
    mail.style.color = "green";
});

mail.addEventListener("mouseout", ()=>{
    mail.innerText = "Email Address";
    mail.style.color = "black";
});