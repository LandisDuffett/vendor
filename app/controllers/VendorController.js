import VendorService from "../services/VendorService.js";

// PRIVATE AREA
let _vendorService = new VendorService()

function _draw() {
  document.getElementById("target").innerHTML = _vendorService.Template
  document.getElementById("recent").innerHTML = _vendorService.recent

}


// PUBLIC AREA
export default class VendorController {
  constructor() {
    _draw()
  }

  addMoney() {
    _vendorService.moreMoney()
    console.log(_vendorService.money)
  }

  buy(itemName) {
    debugger
    _vendorService.buy(itemName)
    console.log("Hooray!")
  }
  _draw() {
  }


}