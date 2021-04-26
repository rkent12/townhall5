var$= function (id) {
//this function returns the object for the HTML element return document.getElementByid(id);
}
var rintPage = function() {
//this is the event handler for the click event of the button window.print();
}
window.onload = function() {
//this is the event handler for the onload event $("printButton").onclick = printPage;
}
