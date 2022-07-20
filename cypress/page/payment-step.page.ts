class PaymentStepPage {
  private payBank: string;
  private order: string;

  constructor() {
    this.payBank = ".bankwire";
    this.order = ".cart_navigation.clearfix > button";
  }

  public paymentStep(): void {
    cy.get(this.payBank).click();
  }

  public confirmOrder(): void {
    cy.get(this.order).click();
    cy.get("#center_column > div > p > strong").should(
        "have.text",
        "Your order on My Store is complete.",
    );
  }
}
export {PaymentStepPage};
