class MenuContentPage {
  private tShirtMenu: string;
  private menuContentPageURL: string;

  constructor() {
    this.menuContentPageURL = "http://automationpractice.com/";
    this.tShirtMenu = "T-shirts";
  }

  public visitMenuContentPage(): void {
    cy.visit(this.menuContentPageURL);
  }

  public goToTShirtMenu(): void {
    cy.get(".sf-menu ").children("li").children("a").contains(this.tShirtMenu).click();
  }
}

export {MenuContentPage};
