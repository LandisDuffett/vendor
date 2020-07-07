import VendorService from "../services/VendorService.js";

// PRIVATE AREA
let _vendorService = new VendorService()

function _draw() {
  document.getElementById("target").innerHTML = _vendorService.Target.Template
}

// PUBLIC AREA
export default class VendorController {
  constructor() {
    _draw()
  }

  buy(itemName) {
    _vendorService.buy(itemName)
    _draw()
  }


}