// Fix header on scroll
window.onscroll = function() {fixHeaderScroll()};

function fixHeaderScroll() {
    let header = document.getElementById("nav-header");
    let sticky = header.offsetTop;

    console.log(sticky);

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}