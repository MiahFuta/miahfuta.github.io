includeHTML();

window.onload = async function() {

    document.getElementById("menu").style.width = "50px";

    var checkbox = document.querySelector("input[name=checkbox]");

    checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById("menu").style.width = "50px";
    } else {
        document.getElementById("menu").style.width = "200px";
    }
    });

}