class AddressStepPage {
  private processAddress: string;
  private address: string;

  constructor() {
    this.address = "Proceed to checkout";
    this.processAddress = "[name='processAddress']";
  }

  public goToCheckout(): void {
    cy.get(this.processAddress).click();
  }
}

export {AddressStepPage};
