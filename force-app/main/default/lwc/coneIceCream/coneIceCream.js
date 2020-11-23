import { api, LightningElement } from "lwc";

export default class ConeIceCream extends LightningElement {
  @api coneStack = [];

  get getConeStake() {
    return this.coneStack.length;
  }

  renderedCallback() {
    console.log("Hello this is in render", JSON.stringify(this.coneStack));
  }
}
