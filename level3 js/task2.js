var data = [];
function getData() {
    var source = document.getElementById("source");
    var li = source.getElementsByTagName("li");
    var b = source.getElementsByTagName("b");
    for (var i = 0; i < 7; i++) {
        data[i] = [li[i].innerText.substring(0, 7), b[i].innerHTML];
    }
    return data;
}
function sortAqiData(data) {
    data.sort(function (a, b) { return a[1] - b[1]; })
    return data;
}
function render(data) {
    var resort = document.getElementById("resort");
    var text = " ";
    for (var i = 0; i < 7; i++) {
        text += "<li>第" + (i+1) + "名： " + data[i][0] + "<b>" + data[i][1] + "</b></li>";
    }
    resort.innerHTML = text;
}
function btnHandle() {
    var aqiData = getData();
    aqiData = sortAqiData(aqiData);
    render(aqiData);
}
function init() {
    var sortbtn = document.getElementById("sort-btn");
    sortbtn.onclick = btnHandle;
}
init();