
var username = document.querySelector("#requests");
var username = document.querySelector("#connections");


function edit() {
    var username = document.querySelector("#username");
    username.innerText = "nana";
}


function deleteElement(id) {
    var element = document.querySelector(id);
    if (element) {
        element.remove();
        requestSpan.innerText--;
    }
}
function AddElement(id) {
    var element = document.querySelector(id);
    connectionSpan.innerText++;
    element.remove();
    requestSpan.innerText--;
}

