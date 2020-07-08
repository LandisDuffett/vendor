import VendorService from "../services/VendorService.js";
import Target from "../models/Target.js";

// PRIVATE AREA
let _vendorService = new VendorService()

function _draw() {
  let items = _vendorService.items
  for (let i = 0; i < items.length; i++) {
    let item = new Target(items[i])
    console.log(items[i].name);
    document.getElementById(`target${i}`).innerHTML = item.Template;

  }
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