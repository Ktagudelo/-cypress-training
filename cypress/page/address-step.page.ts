class AddressStepPage {
  private processAddress: string;

  constructor() {
    this.processAddress = "[name='processAddress']";
  }

  public goToCheckout(): void {
    cy.get(this.processAddress).click();
  }
}

export {AddressStepPage};
