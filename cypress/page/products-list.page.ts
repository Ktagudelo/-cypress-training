class ProductsListPage {
  private addToCart: string;
  private containerCart: string;
  private product: string;

  constructor() {
    this.containerCart = ".available-now";
    this.addToCart = ".button.ajax_add_to_cart_button.btn.btn-default";
    this.product = ".button-container span .icon-chevron-right";
  }

  public goToAddToCart(): void {
    cy.get(this.containerCart).click();
    cy.get(this.addToCart).click();
    cy.get(this.product).click();
  }
}

export {ProductsListPage};
