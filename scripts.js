alert("Hello TEJ!");

var volume1 = 0; // initial result value for Samosa
var volume2 = 0; // initial result value for Tea

document.getElementById("price1").value = 0;
document.getElementById("price2").value = 0;
document.getElementById("totalPrice").textContent = 0;
document.getElementById("result1").textContent = 0;
document.getElementById("result2").textContent = 0;
document.getElementById("grandTotal").textContent = 0;

function updateResult(quantityId, value) {
  if (quantityId === "quantity1") {
    volume1 += value;
    document.getElementById(quantityId).innerHTML = volume1;
  } else if (quantityId === "quantity2") {
    volume2 += value;
    document.getElementById(quantityId).innerHTML = volume2;
  }
  event.preventDefault(); // prevent form submission
}
function total() {
  let price1 = parseInt(document.getElementById("price1").value);
  let quantity1 = parseInt(document.getElementById("quantity1").innerHTML); //"innerHTML" to get the content from "span"
  let total1 = price1 * quantity1;
  document.getElementById("result1").textContent = total1;

  let price2 = parseInt(document.getElementById("price2").value);
  let quantity2 = parseInt(document.getElementById("quantity2").innerHTML); //"innerHTML" to get the content from "span"
  let total2 = price2 * quantity2;
  document.getElementById("result2").textContent = total2;

  let totalPrice = total1 + total2;
  document.getElementById("totalPrice").textContent = totalPrice;

  let vat = totalPrice * 0.13;
  document.getElementById("vat").value = vat;
  let tip = totalPrice * 0.1;
  document.getElementById("tip").value = tip;

  let grandTotal = total1 + total2 + vat + tip;
  document.getElementById("grandTotal").textContent = grandTotal;
}
