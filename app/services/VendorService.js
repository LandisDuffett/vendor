import Target from "../models/Target.js";

let items = [
  {
    name: "Doritos",
    price: 1.25,
    quantity: 10
  },
  {
    name: "Mike and Ikes",
    price: 1.00,
    quantity: 10
  },
  {
    name: "M&Ms",
    price: 1.50,
    quantity: 10
  },
  {
    name: "Granola Bar",
    price: .75,
    quantity: 10
  }]

export default class VendorService {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.quantity = 10
  }
  get items() {
    return items;
  }


  buy(itemName) {
    money -= _target.price
    _target.quantity -= 1;
  }

  get Target() {
    return new Target(_target.name, _target.price, _target.quantity)
  }

  get Template() {
    let subTemplate = `
            <div class="col-3">
              <div class="row">${this.name}</div>
              <div class="row">${this.price}</div>
              <div class="row">${this.quantity}</div class="row"><button onclick="app.vendorController.buy('${this.name}')">BUY</button></div>
            </div>
            `
    return subTemplate
  }
}