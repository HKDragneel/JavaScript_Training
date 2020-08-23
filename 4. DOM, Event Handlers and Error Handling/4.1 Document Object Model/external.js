/**
 * Event handlers are defined as functions here
 */

/**
 * document object represents the webpage(DOM) and this object can be used to access
 * the html elements defined within it 
 */
 function byTagNames() {
    let tagNames = document.getElementsByTagName("p");
    document.getElementById("p3").innerHTML = tagNames[0].innerHTML;
}

function changeP2() {
    document.getElementById("p2").innerHTML = document.getElementById("p1").firstChild.nodeValue;
}