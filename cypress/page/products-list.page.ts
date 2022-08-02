class ProductsListPage {
  private addToCart: string;
  private containerCart: string;
  private product: string;
  private buttonContainer: string;

  constructor() {
    this.containerCart = ".available-now";
    this.addToCart = "[title='Add to cart']";
    this.product = "Proceed to checkout";
    this.buttonContainer = ".button-container";
  }

  public goToAddToCart(): void {
    cy.get(this.containerCart).click();
    cy.get(this.addToCart).click();
  }

  public goToCheckout(): void {
    cy.contains(this.buttonContainer, this.product).click();
  }
}

export {ProductsListPage};
