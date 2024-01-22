// let timer = null;

// document.getElementById("start-btn").addEventListener("click", function () {
//   timer = setTimeout(function () {
//     console.log("Timer Started");
//   }, 5000);
// });

// document.getElementById("stop-btn").addEventListener("click", function () {
//   clearTimeout(timer);
// });

count = 1;
let t = setInterval(function(){
    if(count===5)
    {
        clearInterval(t);
    }
    console.log("Print");
    count++;
},3000)

