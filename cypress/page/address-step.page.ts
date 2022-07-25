class AddressStepPage {
  private address: string;

  constructor() {
    this.address = "Proceed to checkout";
  }

  public goToCheckout(): void {
    cy.get("p").contains(this.address).click();
  }
}

export {AddressStepPage};
