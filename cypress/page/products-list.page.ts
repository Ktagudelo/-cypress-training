class ProductsListPage {
  private addToCart: string;
  private containerCart: string;
  private product: string;

  constructor() {
    this.containerCart = ".available-now";
    this.addToCart = ".ajax_add_to_cart_button";
    this.product = "Proceed to checkout";
  }

  public goToAddToCart(): void {
    cy.get(this.containerCart).click();
    cy.get(this.addToCart).children("span").click();
  }

  public goToCheckout(): void {
    cy.get("div").contains(this.product).click();
  }
}

export {ProductsListPage};
