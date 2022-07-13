// includeHTML();

window.onload = async function() {

    // let y = 0;
    // setTimeout(() => {
    //     for (i=0; i<10; i++) {
    //        y++;
    //     }
    // }, 3000);

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