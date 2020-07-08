import VendorService from "../services/VendorService.js";

// PRIVATE AREA
let _vendorService = new VendorService()

function _draw() {
  document.getElementById("target").innerHTML = _vendorService.Template
  debugger
  document.getElementById("inserted").innerHTML = _vendorService.money.toString()
  document.getElementById("recent").innerHTML = _vendorService.recent
}


// PUBLIC AREA
export default class VendorController {
  constructor() {
    _draw()
  }

  addMoney() {
    _vendorService.moreMoney()
    _draw()
  }

  buy(price, quantity, index) {
    _vendorService.buy(price, quantity, index)
    _draw()
  }



}