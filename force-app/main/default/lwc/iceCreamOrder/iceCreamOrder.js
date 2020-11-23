import { LightningElement } from "lwc";

export default class IceCreamOrder extends LightningElement {
  coneFlavorList = [];
  iceCreamItemList = [
    {
      flavor: "chocolate",
      price: 1
    },
    {
      flavor: "vanilla",
      price: 1
    },
    {
      flavor: "strawberry",
      price: 1
    },
    {
      flavor: "orange",
      price: 1
    },
    {
      flavor: "lemon",
      price: 1
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
