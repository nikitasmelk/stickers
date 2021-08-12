//window.location.replace('https://www.instagram.com/nikitasmelk/');
var names = ['Дима', 'Костя', 'Вася'];

// function readTextFile(file){

//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function (){
//         if(rawFile.readyState === 4){
//             if(rawFile.status === 200 || rawFile.status == 0){
//                 var allText = rawFile.responseText;
//                 names = allText.split("\n");
//                 console.log(names);
//                 // alert(allText);
//             }
//         }
//     }
//     rawFile.send(null);
// }

for(let i = 0; i < names.length; i++){
  document.body.appendChild(div);
}

// function runPythonCode() {
//   var xhr = new XMLHttpRequest();
//   var val = xhr.open("GET", "inputName.py", true);
//   // console.log(val);
//   xhr.responseType = "JSON";
//   xhr.onload = function(e) {
//     var arrOfStrings = JSON.parse(xhr.response);
//   }
//   xhr.send();
// }

// runPythonCode();
// readTextFile("names.txt");