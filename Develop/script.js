var today = moment();
$("#output").text(today.format("ddd, MMM do,  YYYY"))
console.log(today.format("ddd MMM do  YYYY"))
$("#time").text(today.format("h:mm a"))
console.log(today.format("h:mm a"))

var text = document.getElementById ("text")
let chores = []

localStorage.setItem('text', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('text'))

  