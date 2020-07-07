import Target from "../models/Target.js";

let _target = new Target()
let items = ["Doritos", "Mike and Ikes", "M&Ms", "Granola Bar"]
export default class VendorService {

  constructor() {

  }

  buy(itemName) {
    money -= _target.price
    _target.quantity -= 1;
  }

  get Target() {
    return new Target(_target.name, _target.price, _target.quantity)
  }

}