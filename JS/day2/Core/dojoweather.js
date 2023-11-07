function dismiss () {
    var container = document.querySelector(".container");
    container.remove();

}
function cel2far() {
    var Option = document.querySelector("#conversionOption").value;
    var span1 = parseFloat(document.querySelector(".span1").textContent);
    var span2 = parseFloat(document.querySelector(".span2").textContent);

    if (Option === "fahrenheit") {
        document.querySelector(".span1").textContent = (span1 * 1.8) + 32;
        document.querySelector(".span2").textContent = (span2 * 1.8) + 32;
    } else if (Option === "celsius") {
        document.querySelector(".span1").textContent = (span1 / 1.8) - 32;
        document.querySelector(".span2").textContent = (span2 / 1.8) - 32;
    }
}
