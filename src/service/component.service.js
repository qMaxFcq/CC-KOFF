export class ComponentService {
  constructor() {
    this.priceInput = document.getElementById("product-price");
    this.quantityInput = document.getElementById("product-quantity");
    this.shippingInput = document.getElementById("product-shipping");
    this.resultBox = document.getElementById("result");
    this.totalBtn = document.getElementById("total-btn");
  }

  getInput() {
    let price = this.priceInput.value;
    let quantity = this.quantityInput.value;
    let shipping = this.shippingInput.value;
    return [price, quantity, shipping];
  }

  setPrice(price) {
    this.resultBox.innerText = price;
  }

  onClick(callback) {
    this.totalBtn.addEventListener("click", callback);
  }
}
