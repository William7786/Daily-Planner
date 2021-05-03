var today = moment();
$("#output").text(today.format("ddd, MMM Do,  YYYY"))
console.log(today.format("ddd MMM   YYYY"))
$("#time").text(today.format("h:mm a"))
console.log(today.format("h:mm a"))



$("#9 .stored").val(localStorage.getItem("9"));
$("#10 .stored").val(localStorage.getItem("10"));
$("#11 .stored").val(localStorage.getItem("11"));
$("#12 .stored").val(localStorage.getItem("12"));
$("#1 .stored").val(localStorage.getItem("1"));
$("#2 .stored").val(localStorage.getItem("2"));
$("#3 .stored").val(localStorage.getItem("3"));
$("#4 .stored").val(localStorage.getItem("4"));
$("#5 .stored").val(localStorage.getItem("5"));

$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".stored").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
})


//this comment is my old code withour jquery//
// const storage = document.querySelector(".store");
// const text = document.querySelector(".text2");
// const btn = document.querySelector(".saveBtn");
// const stored = localStorage.getItem("text", text.textContent)
// if(storage){
// text.textContent = stored
// }   
// storage.addEventListener("input", p => {
// text.textContent = p.target.value
// console.log(p.target.value)
// })
// const save = () => {
// localStorage.setItem("text", text.textContent)
// }

// btn.addEventListener("click", save)







