let money = 0
let recent = ``
let items = [{
  name: "Doritos",
  price: 2.00,
  quantity: 10
}, {
  name: "Granola Bar",
  price: 0.75,
  quantity: 10
}, {
  name: "Snickers",
  price: 1.25,
  quantity: 10
}, {
  name: "M&Ms",
  price: 1.25,
  quantity: 10
}
]

export default class VendorService {
  constructor() {
  }

  moreMoney() {
    money += 0.25
  }

  get recent() {
    return recent
  }

  get money() {
    return money
  }
  get items() {
    return items;
  }

  buy(price, quantity, index) {
    if (money >= items[index].price) {
      money -= items[index].price;
      items[index].quantity -= 1;
      recent = `${items[index].name}`
      console.log(recent)
    }
  }
  get Template() {
    let subTemplate =
      `
  <div class="row">
    <div class="col-2">Vendrrr!</div>
    <div class="col-5">1</div>
    <div class="col-5">2</div>
  </div>
  <div class="row">
    <div class="col-2">A</div>
    <div class="col-5">
      <div class="row">${items[0].name}</div>
      <div class="row">${items[0].price}</div>
      <div class="row">${items[0].quantity}</div>
      <div class="row"><button onclick="app.vendorController.buy('${items[0].price}', '${items[0].quantity}', 0)">BUY</button></div>
    </div>
    <div class="col-5">
      <div class="row">${items[1].name}</div>
      <div class="row">${items[1].price}</div>
      <div class="row">${items[1].quantity}</div>
      <div class="row"><button onclick="app.vendorController.buy('${items[1].price}', '${items[1].quantity}', 1)">BUY</button></div>
    </div>
  </div>
  <div class="row">
    <div class="col-2">B</div>
    <div class="col-5"><div class="row">${items[2].name}</div>
      <div class="row">${items[2].price}</div>
      <div class="row">${items[2].quantity}</div>
      <div class="row"><button onclick="app.vendorController.buy('${items[2].price}', '${items[2].quantity}', 2)">BUY</button></div>
    </div>
    <div class="col-5">
          <div class="row">${items[3].name}</div>
          <div class="row">${items[3].price}</div>
          <div class="row">${items[3].quantity}</div>
          <div class="row"><button onclick="app.vendorController.buy('${items[3].price}', '${items[3].quantity}', 3)">BUY</button></div>
      </div>
    </div>`
    return subTemplate

  }
}