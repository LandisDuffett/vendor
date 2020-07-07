import VendorController from "./controllers/VendorController.js";

class App {
  constructor() {
    this.vendorController = new VendorController()
  }
}

window["app"] = new App()