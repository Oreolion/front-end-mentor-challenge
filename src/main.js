let menuBar = document.querySelector("#menubar")
let mobileMenu = document.querySelector(".mobile-navbar")

menuBar.onclick = ( ) => {
    menuBar.classList.toggle("fa-times")
    mobileMenu.classList.toggle("active")
}
window.onscroll = ( ) => {
    menuBar.classList.remove("fa-times")
    mobileMenu.classList.remove("active")
}


