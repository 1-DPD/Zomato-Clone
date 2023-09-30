myButton.addEventListener("click", function () {
    myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
    myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup) {
        myPopup.classList.remove("show");
    }
});
myButton1.addEventListener("click", function () {
    myPopup1.classList.add("show");
});
closePopup1.addEventListener("click", function () {
    myPopup1.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup1) {
        myPopup1.classList.remove("show");
    }
});

// function ValidateEmail(mail) 
// {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//     {
//         return (true)
//     }
//         alert("You have entered an invalid email address!")
//         return (false)
// }




