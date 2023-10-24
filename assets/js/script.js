window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("header");
    } else {
        header.classList.remove("header");
    }
}