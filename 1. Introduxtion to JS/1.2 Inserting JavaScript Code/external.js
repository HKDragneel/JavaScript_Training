function trigger() {
    let x = 5;
    alert(typeof x);

    let element = document.getElementById("heading");
    if(x === 5) {
        element.innerHTML = "True";
    }
    else {
        element.innerHTML = "False";
    }
}