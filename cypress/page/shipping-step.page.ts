class ShippingSteptPage {
  private termsOfService: string;
  private proceedToCheckoutButton: string;

  constructor() {
    this.termsOfService = "#cgv";
    this.proceedToCheckoutButton = ".cart_navigation.clearfix > button";
  }

  public acceptTermsOfService(): void {
    cy.get(this.termsOfService).click();
  }

  public goToCheckout(): void {
    cy.get(this.proceedToCheckoutButton).click();
  }
}

export {ShippingSteptPage};
