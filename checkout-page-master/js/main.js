// Price calculator

const items = document.querySelectorAll(".js-item-price"),
      itemsOld = document.querySelectorAll(".js-item-old-price"),
      shipping = document.querySelector(".js-shipping-price"),
      total = document.querySelector(".js-total-output"),
      quantityItems = document.querySelectorAll(".js-quantity-output"),
      quantityButtons = document.querySelectorAll(".js-quantity-btn");

function updatesValues() {
  let newTotal =parseInt(shipping.dataset.price);
  items.forEach(item => {
    let index = Array.from(items).indexOf(item);
    let newQuantity = quantityItems[index].dataset.quantity;
    let newPrice = (item.dataset.price * newQuantity).toFixed(2);
    quantityItems[index].innerHTML = newQuantity;
    item.innerHTML = `$${newPrice}`;
    itemsOld[index].innerHTML = `$${(itemsOld[index].dataset.price * newQuantity).toFixed(2)}`;

    newTotal += parseFloat(newPrice);
  });
  total.innerHTML = `$${newTotal.toFixed(2)}`;
}

quantityButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    let index = Array.from(quantityButtons).indexOf(btn) <= 1 ? 0 : 1;
    let newQuantity = eval(quantityItems[index].dataset.quantity + btn.dataset.type + "1");
    if (newQuantity >= 1) {
      quantityItems[index].dataset.quantity = newQuantity;
      updatesValues();
    }
  });
});