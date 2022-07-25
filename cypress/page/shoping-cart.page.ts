class ShopingCartPage {
  private proceedToCheckoutButton: string;

  constructor() {
    this.proceedToCheckoutButton = "Proceed to checkout";
  }

  public goToCheckout(): void {
    cy.get("p").contains(this.proceedToCheckoutButton).click();
  }
}

export {ShopingCartPage};
