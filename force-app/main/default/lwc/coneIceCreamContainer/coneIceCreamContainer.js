import { LightningElement, track } from "lwc";

export default class ConeIceCreamContainer extends LightningElement {
  @track
  coneStack = [];

  processing = true;
  handleConeFlavorStack(event) {
    this.setSpinnerDelay();
    console.log("On Container", event.detail);
    this.coneStack = [...event.detail];
  }

  setSpinnerDelay() {
    this.processing = true;

    setTimeout(() => {
      this.processing = false;
    }, 1000);
  }
  connectedCallback() {
    this.setSpinnerDelay();
  }
}
