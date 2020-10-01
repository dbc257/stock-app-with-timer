let stockTextBox = document.getElementById("stockTextBox")
let stockButton = document.getElementById("stockButton")
let showStock = document.getElementById("showStock")
stockButton.addEventListener("click", function () {
  let symbol = stockTextBox.value
  setInterval(function () {
    let stockQuote = getStockQuote(symbol)
    showStock.innerHTML = `${stockQuote.name} - $${stockQuote.price}`
  }, 1000)
})
