import { LightningElement } from "lwc";

export default class IceCreamOrder extends LightningElement {
  coneFlavorList = [];
  iceCreamItemList = [
    {
      flavor: "chocolate",
      price: 3
    },
    {
      flavor: "vanilla",
      price: 1
    },
    {
      flavor: "strawberry",
      price: 2
    },
    {
      flavor: "orange",
      price: 1
    },
    {
      flavor: "lemon",
      price: 5
    }
  ];
  connectedCallback() {
    this.formatIceCreamItemListData();
    console.log("iceCreamItemList::", this.iceCreamItemList);
  }

  formatIceCreamItemListData() {
    const result = this.iceCreamItemList.map((item, index) => {
      let id = index;
      let displayPrice = `${item.price}`.concat(" $");

      return { ...item, id: id, displayPrice: displayPrice, qty: 0 };
    });

    this.iceCreamItemList = result;
  }

  get getTotalPrice() {
    let totalPrice = this.iceCreamItemList.reduce(
      (n, { qty, price }) => n + qty * price,
      0
    );

    return totalPrice + " $";
  }

  get getTotalScoop() {
    let totalScoop = this.iceCreamItemList.reduce((n, { qty }) => n + qty, 0);

    return totalScoop;
  }

  handleAdd(event) {
    const currentFlavor = event.target.dataset.value;
    this.addConFlavorItem(currentFlavor);

    const flavorindex = event.target.dataset.flavorindex;
    this.updateIceCreamQty(flavorindex);
    this.prepareMessageForContainer();
  }

  addConFlavorItem(currentFlavor) {
    const currentCone = {
      flavor: currentFlavor,
      id: this.coneFlavorList.length,
      flavorClass: "scoop " + currentFlavor
    };

    this.coneFlavorList.push(currentCone);
    console.log("add", this.coneFlavorList);
  }

  updateIceCreamQty(flavorindex, token = "add") {
    let result = [...this.iceCreamItemList];

    let currentItem = result[flavorindex];
    if (token === "removed") {
      currentItem.qty = currentItem.qty - 1;
    } else {
      currentItem.qty = currentItem.qty + 1;
    }

    result.splice(flavorindex, 1, currentItem);
    this.iceCreamItemList = result;
  }

  handleDelete(event) {
    const currentFlavor = event.target.dataset.value;
    this.removeConFlavorItem(currentFlavor);

    const flavorindex = event.target.dataset.flavorindex;
    this.updateIceCreamQty(flavorindex, "removed");

    this.prepareMessageForContainer();
  }

  removeConFlavorItem(currentFlavor) {
    const removeFlavorIndex = this.coneFlavorList.findIndex(
      (p) => p.flavor === currentFlavor
    );
    this.coneFlavorList.splice(removeFlavorIndex, 1);
  }

  prepareMessageForContainer() {
    console.log("coneFlavorList", this.coneFlavorList);
    const sendMessageFromOrder = new CustomEvent("coneflavorstack", {
      detail: this.coneFlavorList
    });
    this.dispatchEvent(sendMessageFromOrder);
  }
}
