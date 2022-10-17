// Your code goes here
const p = document.querySelector("p")
console.log(p.textContent)

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    p.textContent="This is really cool!"
  });
