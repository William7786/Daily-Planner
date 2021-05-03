var today = moment();
$("#output").text(today.format("ddd, MMM Do,  YYYY"))
console.log(today.format("ddd MMM   YYYY"))
$("#time").text(today.format("h:mm a"))
console.log(today.format("h:mm a"))


const storage = document.querySelector(".store");
const text = document.querySelector(".text2");
const btn = document.querySelector(".saveBtn");
const stored = localStorage.getItem("text", text.textContent)
if(storage){
text.textContent = stored
}   
storage.addEventListener("input", p => {
text.textContent = p.target.value
console.log(p.target.value)
})
const save = () => {
localStorage.setItem("text", text.textContent)
}

btn.addEventListener("click", save)







