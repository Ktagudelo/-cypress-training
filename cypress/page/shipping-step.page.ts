class ShippingSteptPage {
  private termsOfService: string;

  constructor() {
    this.termsOfService = "#cgv";
  }

  public acceptTermsOfService(): void {
    cy.get(this.termsOfService).click();
  }

  public goToCheckout(): void {
    cy.get("[name=processCarrier]").click();
  }
}

export {ShippingSteptPage};
