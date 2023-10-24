window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.background = "rgba(51, 51, 51, 0.8)"
    } else {
        document.getElementById("header").style.background = "rgba(51, 51, 51, 1)"
    }
}