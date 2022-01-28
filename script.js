const tags = [
    "in",
    "50",
    "60",
    "70",
    "75",
    "80",
    "85",
    "90",
    "so"
];
window.addEventListener("scroll", function () {
    for (const tag of tags) {
        var element = document.getElementById("c" + tag);
        if (window.scrollY + 200 > (element.offsetTop) && window.scrollY < (element.offsetTop + element.offsetHeight)) {
            document.getElementById("n" + tag).classList.add("active");
        } else {
            document.getElementById("n" + tag).classList.remove("active");
        }
    }
});