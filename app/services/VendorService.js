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

}