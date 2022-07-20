class ShopingCartPage {
  private buttonShoping: string;

  constructor() {
    this.buttonShoping = ".cart_navigation span";
  }

  public addShoping(): void {
    cy.get(this.buttonShoping).click();
  }
}

export {ShopingCartPage};
