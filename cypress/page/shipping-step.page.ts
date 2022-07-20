class ShippingSteptPage {
  private termsOfService: string;
  private buttonShipping: string;

  constructor() {
    this.termsOfService = "#cgv";
    this.buttonShipping = ".cart_navigation.clearfix > button";
  }

  public submitShipping(): void {
    cy.get(this.termsOfService).click();
    cy.get(this.buttonShipping).click();
  }
}

export {ShippingSteptPage};
