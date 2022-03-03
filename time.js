
var xmlhttp = new XMLHttpRequest();
var url = "http://api.weatherapi.com/v1/current.json?key=f8e58ec36d0b48f5aca194718220203&q=praia cabo verde&aqi=yes";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
  }
}; 

xmlhttp.open("GET", url, true);

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' +
        arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;

}alert('ok');