var today = moment();
$("#output").text(today.format("ddd, MMM do,  YYYY"))
console.log(today.format("ddd MMM do  YYYY"))
$("#time").text(today.format("h:mm a"))
console.log(today.format("h:mm a"))


  