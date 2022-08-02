class ShippingSteptPage {
  private termsOfService: string;
  private processCarrier: string;

  constructor() {
    this.termsOfService = "#cgv";
    this.processCarrier = "[name='processCarrier']";
  }

  public acceptTermsOfService(): void {
    cy.get(this.termsOfService).click();
  }

  public goToCheckout(): void {
    cy.get(this.processCarrier).click();
  }
}

export {ShippingSteptPage};
