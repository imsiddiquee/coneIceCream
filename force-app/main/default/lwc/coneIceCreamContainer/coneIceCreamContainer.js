import { LightningElement, track } from "lwc";

export default class ConeIceCreamContainer extends LightningElement {
  @track
  coneStack = [];
  handleConeFlavorStack(event) {
    console.log("On Container", event.detail);
    this.coneStack = [...event.detail];
  }
}
