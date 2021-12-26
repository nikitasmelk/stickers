var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/get/nikiboy.art/total-visits");
xhr.responseType = "json";
xhr.onload = function() {
  document.getElementById("total_visits").innerHTML = this.response.value;
}
xhr.send();

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/get/nikiboy.art/total-interactions");
xhr.responseType = "json";
xhr.onload = function() {
  document.getElementById("total_interactions").innerHTML = this.response.value;
}
xhr.send();







