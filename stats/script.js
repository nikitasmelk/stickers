//TOTAL
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

//DETECTED
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/get/nikiboy.art/detected-visits");
xhr.responseType = "json";
xhr.onload = function() {
  document.getElementById("detected-visits").innerHTML = `${this.response.value} visits`;
}
xhr.send();

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/get/nikiboy.art/detected-clicks");
xhr.responseType = "json";
xhr.onload = function() {
  document.getElementById("detected-clicks").innerHTML = `${this.response.value} clicks`;
}
xhr.send();

//SMILE
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/get/nikiboy.art/smile-visits");
xhr.responseType = "json";
xhr.onload = function() {
  document.getElementById("smile-visits").innerHTML = `${this.response.value} visits`;
}
xhr.send();

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/get/nikiboy.art/smile-clicks");
xhr.responseType = "json";
xhr.onload = function() {
  document.getElementById("smile-clicks").innerHTML = `${this.response.value} clicks`;
}
xhr.send();

//DONT SLOUCH
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/get/nikiboy.art/dont-slouch-visits");
xhr.responseType = "json";
xhr.onload = function() {
  document.getElementById("dont-slouch-visits").innerHTML = `${this.response.value} visits`;
}
xhr.send();

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/get/nikiboy.art/dont-slouch-clicks");
xhr.responseType = "json";
xhr.onload = function() {
  document.getElementById("dont-slouch-clicks").innerHTML = `${this.response.value} clicks`;
}
xhr.send();

//PORTAL
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/get/nikiboy.art/portal-visits");
xhr.responseType = "json";
xhr.onload = function() {
  document.getElementById("portal-visits").innerHTML = `${this.response.value} visits`;
}
xhr.send();

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/get/nikiboy.art/portal-clicks");
xhr.responseType = "json";
xhr.onload = function() {
  document.getElementById("portal-clicks").innerHTML = `${this.response.value} clicks`;
}
xhr.send();

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/get/nikiboy.art/portal-teleports");
xhr.responseType = "json";
xhr.onload = function() {
  document.getElementById("portal-teleports").innerHTML = `${this.response.value} teleports`;
}
xhr.send();
