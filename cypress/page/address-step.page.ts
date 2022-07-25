class AddressStepPage {
  private address: string;

  constructor() {
    this.address = ".cart_navigation.clearfix > button";
  }

  public goToCheckout(): void {
    cy.get(this.address).click();
  }
}

export {AddressStepPage};
