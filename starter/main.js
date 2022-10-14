// ES5

// console.log("send me your account number")
// var writeup = "I am hungry"
// alert(writeup)
// console.log(document)
// document.querySelector(".hamburger")


var hamburgerdiv = document.querySelector(".hamburger");
// console.log(hamburgerdiv)
var mobileLinks = document.querySelector(".mobile-links-holder");
var mybackup = document.querySelector(".backdrop")
function dosomething() {
    hamburgerdiv.classList.toggle("showburger")
    mobileLinks.classList.toggle("show-mobile-links-holder")
    mybackup.classList.toggle("show-backdrop")
}