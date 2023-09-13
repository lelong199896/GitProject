let display = document.getElementById("display");
function inputValue(value) {
    display.value += value;
}
function result() {
    let result = eval(display.value);
    display.value = result;
}
function xoa() {
    display.value="";
}