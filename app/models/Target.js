export default class Target {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.quantity = 10
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
